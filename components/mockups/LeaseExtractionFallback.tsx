"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/**
 * Live extraction demo.
 *
 * Rather than revealing a finished screenshot, this runs the product: a scan
 * passes down the lease, each clause lights as it is read, and the row lands
 * in the abstract with its values typing in. It loops only while on screen,
 * and settles on the finished state under prefers-reduced-motion.
 */

type Row = {
  clause: string;
  tenant: string;
  sf: string;
  rent: string;
  type: string;
  /** which document paragraph this clause is lifted from */
  para: number;
};

const ROWS: Row[] = [
  { clause: "§2.1 Demise", tenant: "Acme Retail", sf: "12,400", rent: "$28.50", type: "NNN", para: 0 },
  { clause: "§4.3 Rent", tenant: "Northgate", sf: "8,200", rent: "$31.00", type: "Gross", para: 1 },
  { clause: "§7.2 Term", tenant: "Ridgeview", sf: "15,600", rent: "$27.25", type: "NNN", para: 2 },
  { clause: "§9.6 Options", tenant: "Harbor Lane", sf: "6,400", rent: "$34.50", type: "Mod", para: 3 },
];

const PARAGRAPHS = [
  ["w-full", "w-[88%]", "w-[72%]"],
  ["w-full", "w-[94%]", "w-[80%]"],
  ["w-[90%]", "w-full", "w-[76%]"],
  ["w-full", "w-[82%]", "w-[58%]"],
];

const ease = [0.22, 1, 0.36, 1] as const;
const READ_MS = 780;
const SETTLE_MS = 260;
const HOLD_MS = 2200;

function Typed({ text, run }: { text: string; run: boolean }) {
  const [n, setN] = useState(run ? 0 : text.length);
  useEffect(() => {
    if (!run) {
      setN(text.length);
      return;
    }
    setN(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) clearInterval(id);
    }, Math.max(12, 340 / text.length));
    return () => clearInterval(id);
  }, [text, run]);
  return (
    <span>
      {text.slice(0, n)}
      {n < text.length && (
        <span className="ml-px inline-block h-[0.9em] w-[1px] translate-y-[0.1em] bg-accent" />
      )}
    </span>
  );
}

export default function LeaseExtractionFallback() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [inView, setInView] = useState(false);

  // The wrapper collapses (its content is absolutely positioned on md+), so
  // observe the frame we actually occupy rather than relying on the wrapper box.
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const target = node.parentElement ?? node;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    );
    io.observe(target);
    return () => io.disconnect();
  }, []);

  // -1 = idle; 0..n-1 = currently reading that clause
  const [active, setActive] = useState(-1);
  const [done, setDone] = useState(reduced ? ROWS.length : 0);

  useEffect(() => {
    if (reduced) {
      setDone(ROWS.length);
      setActive(-1);
      return;
    }
    if (!inView) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const at = (ms: number, fn: () => void) => {
      timers.push(setTimeout(() => !cancelled && fn(), ms));
    };

    const cycle = () => {
      let t = 0;
      setDone(0);
      setActive(-1);
      ROWS.forEach((_, i) => {
        at((t += 120), () => setActive(i));
        at((t += READ_MS), () => {
          setActive(-1);
          setDone(i + 1);
        });
        t += SETTLE_MS;
      });
      at(t + HOLD_MS, cycle);
    };

    cycle();
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [inView, reduced]);

  const reading = active >= 0;
  const progress = done / ROWS.length;

  return (
    <div ref={ref} className="overflow-hidden p-4">
      <div className="w-full">
        {/* status bar — the product talking */}
        <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.14em]">
          <span className="flex items-center gap-2 text-accent">
            <span
              className={`inline-block h-1.5 w-1.5 rounded-full bg-accent ${
                reading ? "opacity-100" : "opacity-40"
              }`}
              style={{ transition: "opacity 200ms ease" }}
            />
            {reading ? `Reading ${ROWS[active].clause}` : done === ROWS.length ? "Abstract complete" : "Idle"}
          </span>
          <span className="tabular-nums text-secondary/70">
            {done}/{ROWS.length} clauses
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-[minmax(0,0.9fr)_26px_minmax(0,1.25fr)] md:items-start">
          {/* lease document */}
          <div className="relative overflow-hidden rounded-md border border-border bg-background px-3 py-4 shadow-sm">
            <div className="mx-auto mb-4 h-1.5 w-10 rounded-full bg-border" />
            <div className="space-y-4">
              {PARAGRAPHS.map((lines, p) => {
                const isActive = reading && ROWS[active].para === p;
                const isRead = done > 0 && ROWS.findIndex((r) => r.para === p) < done;
                return (
                  <div
                    key={p}
                    className="space-y-1.5 rounded-sm px-1 py-1"
                    style={{
                      backgroundColor: isActive ? "rgba(123,30,58,0.09)" : "transparent",
                      transition: "background-color 240ms ease",
                    }}
                  >
                    {lines.map((w, l) => (
                      <div
                        key={l}
                        className={`h-[5px] rounded-sm ${w}`}
                        style={{
                          backgroundColor: isActive
                            ? "rgba(123,30,58,0.55)"
                            : isRead
                              ? "rgba(123,30,58,0.22)"
                              : "rgb(229 224 216)",
                          transition: "background-color 280ms ease",
                        }}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
            {/* scan sweep */}
            {reading && !reduced && (
              <motion.div
                key={active}
                className="pointer-events-none absolute inset-x-0 h-10"
                initial={{ top: "-12%" }}
                animate={{ top: "104%" }}
                transition={{ duration: READ_MS / 1000, ease: "linear" }}
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(123,30,58,0) 0%, rgba(123,30,58,0.10) 50%, rgba(123,30,58,0) 100%)",
                }}
              />
            )}
          </div>

          {/* connector */}
          <div className="relative hidden h-full min-h-[132px] sm:block" aria-hidden>
            <svg viewBox="0 0 46 150" className="h-full w-full" fill="none">
              <path d="M 0 40 C 24 40, 22 58, 46 58" stroke="rgb(229 224 216)" strokeWidth="1.5" />
              <path d="M 0 96 C 24 96, 22 112, 46 112" stroke="rgb(229 224 216)" strokeWidth="1.5" />
              {reading && !reduced && (
                <motion.circle
                  key={active}
                  r="2.6"
                  fill="#7B1E3A"
                  initial={{ cx: 0, cy: active % 2 ? 96 : 40, opacity: 0 }}
                  animate={{ cx: 46, cy: active % 2 ? 112 : 58, opacity: [0, 1, 1, 0] }}
                  transition={{ duration: 0.62, ease, delay: READ_MS / 1000 - 0.5 }}
                />
              )}
            </svg>
          </div>

          {/* extracted abstract */}
          <div className="overflow-hidden rounded-md border border-border bg-widget shadow-sm">
            <div className="grid grid-cols-[minmax(0,1fr)_46px_36px] gap-2 border-b border-border px-3 py-2 font-mono text-[9px] uppercase tracking-[0.12em] text-secondary/60">
              <span>Tenant</span>
              <span className="text-right">Rent</span>
              <span className="text-right">Type</span>
            </div>
            <div className="divide-y divide-border/70">
              {ROWS.map((r, i) => {
                const filled = i < done;
                const justFilled = i === done - 1;
                return (
                  <div
                    key={r.tenant}
                    className="grid grid-cols-[minmax(0,1fr)_46px_36px] items-center gap-2 px-3 py-[9px] text-[11px]"
                    style={{
                      backgroundColor: justFilled ? "rgba(123,30,58,0.05)" : "transparent",
                      transition: "background-color 600ms ease",
                    }}
                  >
                    {filled ? (
                      <>
                        <span className="truncate text-foreground">
                          <Typed text={r.tenant} run={justFilled && !reduced} />
                        </span>
                        <span className="text-right tabular-nums text-secondary">{r.rent}</span>
                        <span className="text-right font-mono text-[9px] uppercase text-accent">
                          {r.type}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="h-[6px] w-3/4 rounded-sm bg-border/70" />
                        <span className="ml-auto h-[6px] w-full rounded-sm bg-border/50" />
                        <span className="ml-auto h-[6px] w-full rounded-sm bg-border/50" />
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            {/* progress rail */}
            <div className="h-[3px] w-full bg-border/60">
              <div
                className="h-full bg-accent"
                style={{
                  width: `${progress * 100}%`,
                  transition: done === 0 ? "none" : "width 420ms cubic-bezier(0.22,1,0.36,1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

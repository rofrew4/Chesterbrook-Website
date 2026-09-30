"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A stacking plan — the drawing every CRE operator reads daily: a building as
 * stacked floor bands, each tenant a block, shaded by lease expiry.
 *
 * It fills bottom-up, one floor at a time, as though a rent roll were being
 * read. That is the page's single orchestrated moment; nothing else on the
 * site moves on its own.
 */

type Floor = {
  level: string;
  tenant: string;
  sf: string;
  expiry: number | null;
  /** share of the plate leased, 0..1 */
  leased: number;
};

const FLOORS: Floor[] = [
  { level: "12", tenant: "Meridian Capital", sf: "14,200", expiry: 2031, leased: 1 },
  { level: "11", tenant: "Acme Retail", sf: "12,400", expiry: 2027, leased: 1 },
  { level: "10", tenant: "Available", sf: "13,050", expiry: null, leased: 0 },
  { level: "09", tenant: "Northgate Holdings", sf: "8,200", expiry: 2026, leased: 0.64 },
  { level: "08", tenant: "Ridgeview Properties", sf: "15,600", expiry: 2030, leased: 1 },
  { level: "07", tenant: "Harbor Lane", sf: "6,400", expiry: 2026, leased: 0.48 },
  { level: "06", tenant: "Calloway & Reed", sf: "11,900", expiry: 2029, leased: 0.88 },
  { level: "05", tenant: "Available", sf: "13,050", expiry: null, leased: 0 },
  { level: "04", tenant: "Tysons Dental Group", sf: "9,300", expiry: 2028, leased: 0.72 },
  { level: "03", tenant: "Beltway Logistics", sf: "13,050", expiry: 2032, leased: 1 },
  { level: "02", tenant: "Fairfax Title Co.", sf: "10,100", expiry: 2027, leased: 0.8 },
  { level: "01", tenant: "Kestrel Coffee", sf: "4,600", expiry: 2026, leased: 0.36 },
];

/** Near-term expiries are the thing an operator is scanning for. */
function bandColor(f: Floor) {
  if (f.expiry === null) return "var(--vacancy)";
  if (f.expiry <= 2027) return "#7B1E3A";
  return "#2B4C7E";
}

const STEP_MS = 170;
const HOLD_MS = 4200;

export default function StackingPlan() {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(0);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (m.matches) {
      setReduced(true);
      setFilled(FLOORS.length);
      return;
    }
    const node = ref.current;
    if (!node) return;

    let timers: ReturnType<typeof setTimeout>[] = [];
    let running = false;

    const run = () => {
      timers.forEach(clearTimeout);
      timers = [];
      setFilled(0);
      FLOORS.forEach((_, i) => {
        timers.push(setTimeout(() => setFilled(i + 1), 260 + i * STEP_MS));
      });
      timers.push(
        setTimeout(run, 260 + FLOORS.length * STEP_MS + HOLD_MS),
      );
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !running) {
          running = true;
          run();
        } else if (!e.isIntersecting && running) {
          running = false;
          timers.forEach(clearTimeout);
          timers = [];
        }
      },
      { threshold: 0.15 },
    );
    io.observe(node);
    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  const total = FLOORS.length;
  // floors arrive bottom-up, so index from the end
  const isIn = (i: number) => total - i <= filled;
  const leasedFloors = FLOORS.filter((f) => f.leased > 0).length;

  return (
    <div ref={ref} className="w-full" style={{ ["--vacancy" as string]: "#D8D2C7" }}>
      <div className="mb-4 flex items-baseline justify-between border-b border-border pb-3">
        <p className="text-[15px] font-medium text-ink">1400 Chesterbrook Plaza</p>
        <p className="text-[13px] tabular-nums text-graphite">
          {reduced ? total : filled} of {total} floors
        </p>
      </div>

      <div className="space-y-[5px]">
        {FLOORS.map((f, i) => {
          const shown = isIn(i);
          return (
            <div
              key={f.level}
              className="grid grid-cols-[26px_1fr_78px] items-center gap-3"
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "none" : "translateY(6px)",
                transition: "opacity 320ms ease-out, transform 320ms cubic-bezier(0.22,1,0.36,1)",
              }}
            >
              <span className="text-[12px] tabular-nums text-graphite">{f.level}</span>

              <div className="relative h-[22px] overflow-hidden rounded-[2px] bg-[var(--vacancy)]/55">
                <div
                  className="absolute inset-y-0 left-0 flex items-center px-2"
                  style={{
                    width: shown ? `${Math.max(f.leased, 0.001) * 100}%` : "0%",
                    backgroundColor: bandColor(f),
                    transition: "width 460ms cubic-bezier(0.22,1,0.36,1) 90ms",
                  }}
                >
                  {f.leased > 0.3 && (
                    <span className="truncate text-[12px] leading-none text-white/95">
                      {f.tenant}
                    </span>
                  )}
                </div>
                {f.leased === 0 && (
                  <span className="absolute inset-y-0 left-2 flex items-center text-[12px] leading-none text-graphite">
                    {f.tenant}
                  </span>
                )}
              </div>

              <span className="text-right text-[12px] tabular-nums text-graphite">
                {f.expiry ?? "—"}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border pt-3 text-[12px] text-graphite">
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-accent" />
          Expiring by 2027
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-data" />
          Term beyond 2027
        </span>
        <span className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-[2px] bg-[var(--vacancy)]" />
          Available
        </span>
        <span className="ml-auto tabular-nums">{leasedFloors}/{total} leased</span>
      </div>
    </div>
  );
}

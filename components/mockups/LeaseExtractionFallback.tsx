"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const documentParagraphs = [
  { lines: ["w-full", "w-[88%]", "w-[72%]"] },
  { lines: ["w-full", "w-[94%]", "w-[80%]", "w-[65%]"] },
  { lines: ["w-[90%]", "w-full", "w-[76%]"] },
  { lines: ["w-full", "w-[82%]", "w-[58%]"] },
];

const highlightPositions = new Set(["0-1", "1-1", "2-0", "3-1"]);

const spreadsheetRows = [
  { tenant: "Acme Retail LLC", sf: "12,400", rent: "$28.50", type: "NNN" },
  { tenant: "Northgate Holdings", sf: "8,200", rent: "$31.00", type: "Gross" },
  { tenant: "Ridgeview Properties", sf: "15,600", rent: "$27.25", type: "NNN" },
  { tenant: "Harbor Lane LLC", sf: "6,400", rent: "$34.50", type: "Mod" },
];

const connectorPaths = [
  "M 0 36 C 36 36, 36 44, 80 48",
  "M 0 76 C 36 76, 36 84, 80 88",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function LeaseExtractionFallback() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-40px" });

  let lineIndex = 0;

  return (
    <div ref={ref} className="p-5 md:p-8">
      <div className="grid gap-5 md:grid-cols-[1fr_72px_1fr] md:items-stretch">
        <motion.div
          className="rounded-md border border-border bg-background px-5 py-6 shadow-sm md:px-6 md:py-7"
          initial={false}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
          transition={{ duration: 0.45, ease }}
        >
          <div className="mx-auto mb-5 h-1.5 w-12 rounded-full bg-border" />
          <div className="space-y-5">
            {documentParagraphs.map((paragraph, pIdx) => (
              <div key={pIdx} className="space-y-2">
                {paragraph.lines.map((width, lIdx) => {
                  const key = `${pIdx}-${lIdx}`;
                  const isHighlight = highlightPositions.has(key);
                  const currentLine = lineIndex++;
                  return (
                    <motion.div
                      key={key}
                      className={`h-2 rounded-sm ${width} ${
                        isHighlight
                          ? "bg-accent/25 ring-1 ring-accent/50"
                          : "bg-border/80"
                      }`}
                      initial={false}
                      animate={
                        inView
                          ? { opacity: isHighlight ? 1 : 0.55, scaleX: 1 }
                          : { opacity: 0, scaleX: 0.6 }
                      }
                      transition={{
                        delay: 0.08 + currentLine * 0.04,
                        duration: 0.35,
                        ease,
                      }}
                      style={{ transformOrigin: "left" }}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </motion.div>

        <div className="relative hidden min-h-[200px] md:block">
          <svg
            viewBox="0 0 80 190"
            className="h-full w-full"
            fill="none"
            aria-hidden
            preserveAspectRatio="none"
          >
            {connectorPaths.map((d, i) => (
              <motion.path
                key={d}
                d={d}
                stroke="#7B1E3A"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={false}
                animate={
                  inView
                    ? { pathLength: 1, opacity: 1 }
                    : { pathLength: 0, opacity: 0.25 }
                }
                transition={{
                  pathLength: { delay: 0.45 + i * 0.1, duration: 0.45, ease },
                  opacity: { delay: 0.45 + i * 0.1, duration: 0.25 },
                }}
              />
            ))}
            {connectorPaths.map((_, i) => (
              <motion.circle
                key={`dot-${i}`}
                cx="80"
                cy={48 + i * 40}
                r="3"
                fill="#7B1E3A"
                initial={false}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.75 + i * 0.1, ease }}
              />
            ))}
          </svg>
        </div>

        <motion.div
          className="overflow-hidden rounded-md border border-border"
          initial={false}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
          transition={{ duration: 0.45, delay: 0.1, ease }}
        >
          <div className="grid grid-cols-4 gap-1 border-b border-border bg-surface px-3 py-2 text-[10px] uppercase tracking-wider text-muted">
            <span>Tenant</span>
            <span>SF</span>
            <span>Rent</span>
            <span>Type</span>
          </div>
          {spreadsheetRows.map((row, i) => (
            <motion.div
              key={row.tenant}
              className="grid grid-cols-4 gap-1 border-b border-border px-3 py-2.5 text-[11px] last:border-0 md:text-[12px]"
              initial={false}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
              transition={{ delay: 0.65 + i * 0.1, duration: 0.35, ease }}
            >
              <span className="truncate text-foreground">{row.tenant}</span>
              <span className="text-secondary">{row.sf}</span>
              <span className="text-secondary">{row.rent}</span>
              <span className="text-secondary">{row.type}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

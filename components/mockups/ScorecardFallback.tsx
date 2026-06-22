"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  { label: "Data readiness", value: 72 },
  { label: "Process automation", value: 45 },
  { label: "Integration depth", value: 58 },
];

export default function ScorecardFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Diagnostic Scorecard
      </p>

      <div className="mt-6 flex items-center gap-8">
        <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
          <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#ebebeb"
              strokeWidth="6"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="42"
              fill="none"
              stroke="#7B1E3A"
              strokeWidth="6"
              strokeLinecap="round"
              strokeDasharray={264}
              initial={{ strokeDashoffset: 264 }}
              animate={inView ? { strokeDashoffset: 264 * 0.62 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          </svg>
          <span className="absolute font-display text-[22px] text-foreground">
            38
          </span>
        </div>

        <div className="flex-1 space-y-3">
          {metrics.map((m, i) => (
            <div key={m.label}>
              <div className="flex justify-between text-[11px] text-secondary">
                <span>{m.label}</span>
                <span>{m.value}%</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-border">
                <motion.div
                  className="h-full rounded-full bg-accent"
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${m.value}%` } : {}}
                  transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const signals = [
  { label: "New listing — Arlington", time: "2m ago" },
  { label: "Price change — Fairfax", time: "14m ago" },
  { label: "Permit filed — McLean", time: "1h ago" },
];

export default function SourcingFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Deal Monitor
      </p>
      <div className="mt-5 space-y-3">
        {signals.map((s, i) => (
          <motion.div
            key={s.label}
            className="flex items-center justify-between rounded border border-border px-3 py-2.5"
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 }}
          >
            <span className="text-[12px] text-foreground">{s.label}</span>
            <span className="text-[10px] text-muted">{s.time}</span>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 rounded border border-accent/20 bg-accent/5 px-4 py-3">
        <p className="text-[10px] uppercase tracking-wider text-accent">
          Buy box match
        </p>
        <p className="mt-1 font-display text-[24px] text-foreground">3 new</p>
      </div>
    </div>
  );
}

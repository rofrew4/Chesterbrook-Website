"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  { tenant: "Tenant A", sf: "12,400", rent: "$28.50", type: "NNN" },
  { tenant: "Tenant B", sf: "8,200", rent: "$32.00", type: "Gross" },
  { tenant: "Tenant C", sf: "22,100", rent: "$24.75", type: "NNN" },
];

export default function DataTableFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <div className="flex items-center justify-between">
        <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
          Extracted Fields
        </p>
        <motion.span
          className="flex items-center gap-1.5 text-[10px] text-accent"
          animate={inView ? { opacity: [0.5, 1, 0.5] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Processing
        </motion.span>
      </div>

      <div className="mt-5 overflow-hidden rounded border border-border">
        <div className="grid grid-cols-4 gap-2 border-b border-border bg-surface px-3 py-2 text-[10px] uppercase tracking-wider text-muted">
          <span>Tenant</span>
          <span>SF</span>
          <span>Rent</span>
          <span>Type</span>
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={row.tenant}
            className="grid grid-cols-4 gap-2 border-b border-border px-3 py-2.5 text-[12px] last:border-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 - i * 0.15 } : {}}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <span className="text-foreground">{row.tenant}</span>
            <span className="text-secondary">{row.sf}</span>
            <span className="text-secondary">{row.rent}</span>
            <span className="text-secondary">{row.type}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-4 rounded border border-border bg-surface px-4 py-3">
        <p className="text-[10px] uppercase tracking-wider text-muted">
          Blended cap
        </p>
        <p className="mt-1 font-display text-[28px] text-accent">6.85%</p>
      </div>
    </div>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const properties = [
  { name: "Harbor View", occ: "94%", rev: "$42K" },
  { name: "The Meridian", occ: "88%", rev: "$38K" },
  { name: "Parkside", occ: "91%", rev: "$29K" },
];

export default function OperationsFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <div className="flex items-center justify-between">
        <p className="font-display text-[16px] text-foreground">
          Portfolio Overview
        </p>
        <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] text-white">
          Live
        </span>
      </div>

      <div className="mt-4 flex gap-2">
        {["Overview", "Leases", "Work Orders"].map((tab, i) => (
          <span
            key={tab}
            className={`rounded-full px-3 py-1 text-[10px] ${
              i === 2
                ? "bg-foreground text-background"
                : "text-muted"
            }`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="mt-5 space-y-0 overflow-hidden rounded border border-border">
        {properties.map((p, i) => (
          <motion.div
            key={p.name}
            className="flex items-center justify-between border-b border-border px-3 py-2.5 text-[12px] last:border-0"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: i * 0.08 }}
          >
            <span className="text-foreground">{p.name}</span>
            <div className="flex gap-4 text-secondary">
              <span>{p.occ}</span>
              <span>{p.rev}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

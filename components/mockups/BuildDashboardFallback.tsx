"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function BuildDashboardFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Build Status
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          { label: "Sprint", value: "Week 2" },
          { label: "Demos shipped", value: "4" },
          { label: "Hours logged", value: "38" },
          { label: "Modules live", value: "2" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            className="rounded border border-border px-3 py-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: i * 0.06 }}
          >
            <p className="text-[10px] uppercase tracking-wider text-muted">
              {stat.label}
            </p>
            <p className="mt-1 font-display text-[22px] text-foreground">
              {stat.value}
            </p>
          </motion.div>
        ))}
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-[11px] text-secondary">
          <span>V1 completion</span>
          <span>68%</span>
        </div>
        <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-border">
          <motion.div
            className="h-full rounded-full bg-accent"
            initial={{ width: 0 }}
            animate={inView ? { width: "68%" } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
}

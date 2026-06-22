"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const opportunities = [
  { name: "Lease abstraction", impact: 92 },
  { name: "Email triage", impact: 78 },
  { name: "Deal sourcing", impact: 65 },
  { name: "CRM integration", impact: 48 },
];

export default function OpportunityMapFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Opportunity Register
      </p>
      <div className="mt-6 space-y-4">
        {opportunities.map((item, i) => (
          <div key={item.name}>
            <div className="flex justify-between text-[12px]">
              <span className="text-foreground">{item.name}</span>
              <span className="text-muted">{item.impact}</span>
            </div>
            <div className="mt-1.5 h-2 overflow-hidden rounded-sm bg-border">
              <motion.div
                className="h-full bg-accent/80"
                initial={{ width: 0 }}
                animate={inView ? { width: `${item.impact}%` } : {}}
                transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

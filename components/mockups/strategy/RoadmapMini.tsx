"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const items = [
  { label: "Deal flow", w: "92%" },
  { label: "Efficiency", w: "78%" },
  { label: "Hidden data", w: "64%" },
];

export default function RoadmapMini() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  return (
    <div ref={ref} className="space-y-2 rounded-md border border-border bg-surface p-2.5">
      {items.map((item, i) => (
        <div key={item.label}>
          <div className="flex justify-between text-[8px] text-muted">
            <span>{item.label}</span>
          </div>
          <div className="mt-1 h-1.5 overflow-hidden rounded-sm bg-border">
            <motion.div
              className="h-full origin-left bg-accent/70"
              style={{ width: item.w }}
              initial={false}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const topics = ["Ops walkthrough", "Data review", "Bottlenecks"];

export default function DiscoveryMini() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  return (
    <div ref={ref} className="overflow-hidden rounded-md border border-border bg-background">
      <div className="flex items-center justify-between border-b border-border bg-surface px-2 py-1.5">
        <div className="flex -space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-background bg-accent/20 text-[7px] text-accent"
              initial={false}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
              transition={{ delay: i * 0.07 }}
            >
              {i + 1}
            </motion.span>
          ))}
        </div>
        <span className="text-[7px] uppercase tracking-wider text-muted">Live</span>
      </div>
      <div className="space-y-1.5 p-2">
        {topics.map((topic, i) => (
          <motion.div
            key={topic}
            className="rounded border border-border bg-surface px-1.5 py-1 text-[8px] text-secondary"
            initial={false}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -6 }}
            transition={{ delay: 0.1 + i * 0.08 }}
          >
            {topic}
          </motion.div>
        ))}
        <div className="mt-1 space-y-1 border-t border-border pt-1.5">
          {[88, 72, 94].map((w, i) => (
            <motion.div
              key={w}
              className="h-1 rounded-sm bg-border"
              style={{ width: `${w}%` }}
              initial={false}
              animate={inView ? { opacity: 0.7, scaleX: 1 } : { opacity: 0, scaleX: 0.5 }}
              transition={{ delay: 0.28 + i * 0.06 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const tools = ["ChatGPT", "Claude", "Copilot"];
const modules = ["Intake workflow", "Review queue", "Export pipeline"];

export default function TrainBuildFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="grid gap-4 p-6 md:grid-cols-2 md:gap-3 md:p-8">
      <div className="rounded-md border border-border p-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
          AI training
        </p>
        <div className="mt-4 space-y-2">
          {tools.map((tool, i) => (
            <motion.div
              key={tool}
              className="flex items-center gap-2 rounded border border-border px-3 py-2"
              initial={{ opacity: 0, x: -6 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08 }}
            >
              <span className="h-2 w-2 rounded-full bg-accent" />
              <span className="text-[12px] text-foreground">{tool}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="rounded-md border border-border p-4">
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
          Custom build
        </p>
        <div className="mt-4 space-y-2">
          {modules.map((mod, i) => (
            <motion.div
              key={mod}
              className="flex items-center justify-between rounded border border-border px-3 py-2"
              initial={{ opacity: 0, x: 6 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.08 }}
            >
              <span className="text-[12px] text-foreground">{mod}</span>
              <span className="text-[10px] text-accent">Live</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

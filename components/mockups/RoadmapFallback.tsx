"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const milestones = [
  { label: "Diagnostic", weeks: "Wk 1–3" },
  { label: "V1 Build", weeks: "Wk 4–6" },
  { label: "Iterate", weeks: "Wk 7–9" },
  { label: "Handoff", weeks: "Wk 10" },
];

export default function RoadmapFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Deployment Roadmap
      </p>
      <div className="relative mt-10">
        <div className="absolute left-0 right-0 top-3 h-px bg-border" />
        <div className="grid grid-cols-4 gap-2">
          {milestones.map((m, i) => (
            <div key={m.label} className="text-center">
              <motion.div
                className={`mx-auto h-6 w-6 rounded-full border-2 ${
                  i === 0
                    ? "border-accent bg-accent"
                    : "border-border bg-background"
                }`}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.2, delay: i * 0.12 }}
              />
              <p className="mt-3 text-[11px] font-medium text-foreground">
                {m.label}
              </p>
              <p className="mt-0.5 text-[10px] text-muted">{m.weeks}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

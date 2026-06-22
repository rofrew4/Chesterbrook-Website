"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function TrainBuildMini() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  return (
    <div ref={ref} className="overflow-hidden rounded-md border border-border bg-[#0f1114] p-2 font-mono text-[8px] leading-relaxed text-[#a8b0bc]">
      <div className="flex items-center gap-1 border-b border-white/10 pb-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#ff5f57]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#febc2e]" />
        <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" />
        <span className="ml-auto text-[7px] text-white/40">deploy</span>
      </div>
      <motion.p
        initial={false}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.05 }}
      >
        <span className="text-[#7aa2f7]">const</span> workflow = build()
      </motion.p>
      <motion.p
        initial={false}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 0.12 }}
      >
        <span className="text-[#9ece6a]">→</span> training.complete()
      </motion.p>
      <motion.div
        className="mt-1.5 flex items-center justify-between rounded border border-accent/30 bg-accent/10 px-1.5 py-1"
        initial={false}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }}
        transition={{ delay: 0.22 }}
      >
        <span className="text-[7px] text-white/80">Client-owned</span>
        <span className="text-[7px] font-medium text-accent">Shipped</span>
      </motion.div>
    </div>
  );
}

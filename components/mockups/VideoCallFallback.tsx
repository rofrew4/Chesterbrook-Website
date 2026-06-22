"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Participant({ delay }: { delay: number }) {
  return (
    <motion.div
      className="flex aspect-[4/3] flex-col items-center justify-end overflow-hidden rounded-md border border-border bg-[#1a1a1a] pb-4"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="mb-3 h-14 w-14 rounded-full bg-white/10" />
      <div className="h-2 w-16 rounded-full bg-white/10" />
    </motion.div>
  );
}

export default function VideoCallFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Discovery calls
      </p>
      <motion.div
        className="mt-6 overflow-hidden rounded-lg border border-border bg-[#111]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-2.5">
          <div className="flex gap-1.5">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
          </div>
          <span className="text-[10px] uppercase tracking-wider text-white/40">
            Live session
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 p-3">
          <Participant delay={0.1} />
          <Participant delay={0.18} />
          <Participant delay={0.26} />
          <Participant delay={0.34} />
        </div>
        <div className="flex items-center justify-center gap-4 border-t border-white/10 py-3">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="h-8 w-8 rounded-full bg-white/10"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.4 + i * 0.06 }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

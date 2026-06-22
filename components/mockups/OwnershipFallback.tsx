"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function OwnershipFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-8 md:p-10">
      <motion.div
        className="relative flex h-28 w-28 items-center justify-center rounded-2xl border-2 border-accent bg-accent/5"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
      >
        <svg
          viewBox="0 0 48 48"
          className="h-14 w-14 text-accent"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M12 20v16a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V20" />
          <path d="M8 20h32l-4-8H12l-4 8z" />
          <path d="M20 28l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <motion.span
          className="absolute -right-2 -top-2 rounded-full bg-accent px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white"
          initial={{ opacity: 0, y: 4 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
        >
          Yours
        </motion.span>
      </motion.div>
      <motion.p
        className="mt-6 font-display text-[22px] tracking-tight text-foreground"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
      >
        100% client-owned
      </motion.p>
      <p className="mt-2 text-center text-[12px] text-muted">
        Code, models, and IP transfer at close
      </p>
    </div>
  );
}

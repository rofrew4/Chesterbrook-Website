"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { scrollToSection } from "@/lib/scroll";

export default function StrategyProjectsCta({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center rounded-2xl border border-accent/15 bg-widget px-6 py-8 text-center shadow-mockup min-[720px]:px-8 min-[720px]:py-10 ${className}`}
      initial={false}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="font-display text-[clamp(1.35rem,2.5vw,1.85rem)] leading-snug tracking-tight text-foreground">
        Already know what you want built?
      </p>
      <p className="mt-3 max-w-[280px] text-[14px] leading-relaxed text-secondary min-[720px]:max-w-none min-[720px]:text-[15px]">
        We&apos;ve built custom websites, backends for new companies, integrated
        payment systems, and more.
      </p>
      <button
        type="button"
        onClick={() => scrollToSection("examples")}
        className="btn-primary mt-6"
      >
        View common projects
      </button>
    </motion.div>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, ReactNode } from "react";
import FigmaSlot from "./FigmaSlot";

const ease = [0.22, 1, 0.36, 1] as const;

interface ZigzagRowProps {
  tag: string;
  title: string;
  description: string;
  mockupSrc?: string;
  mockupAlt: string;
  mockupBlur?: number;
  fallback: ReactNode;
}

export default function ZigzagRow({
  tag,
  title,
  description,
  mockupSrc,
  mockupAlt,
  mockupBlur,
  fallback,
}: ZigzagRowProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-100px" });

  return (
    <article ref={ref} className="border-t border-border py-14 md:py-16">
      <div className="grid items-start gap-10 md:grid-cols-[minmax(0,1fr)_minmax(260px,340px)] md:gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-12">
        <motion.div
          initial={false}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
          transition={{ duration: 0.55, ease }}
        >
          <div className="flex items-center gap-4">
            <span className="tag-pill">{tag}</span>
          </div>
          <h3 className="mt-5 font-display text-[clamp(1.5rem,3vw,2rem)] leading-tight tracking-tight text-foreground">
            {title}
          </h3>
          <p className="mt-4 max-w-[540px] text-[16px] leading-relaxed text-secondary">
            {description}
          </p>
        </motion.div>

        <motion.div
          className="md:pt-8"
          initial={false}
          animate={
            inView
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 28, scale: 0.98 }
          }
          transition={{ duration: 0.55, delay: 0.12, ease }}
        >
          <FigmaSlot
            src={mockupSrc}
            alt={mockupAlt}
            fallback={fallback}
            imageBlur={mockupBlur}
          />
        </motion.div>
      </div>
    </article>
  );
}

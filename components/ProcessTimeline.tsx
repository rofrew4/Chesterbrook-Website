"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { engagementPhases } from "@/lib/content";
import { getStrategyPhaseVisual } from "@/lib/strategyVisuals";

const ease = [0.22, 1, 0.36, 1] as const;

function TimelineItem({
  title,
  description,
  phaseId,
  index,
  isLast,
}: {
  title: string;
  description: string;
  phaseId: string;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <div
      ref={ref}
      className={`flex flex-nowrap items-stretch gap-3 sm:gap-5 ${
        isLast ? "pb-0" : "pb-10 sm:pb-12"
      }`}
    >
      <div className="flex w-5 shrink-0 flex-col items-center pt-1.5" aria-hidden>
        <motion.span
          className="relative z-10 h-2.5 w-2.5 rounded-full border-[3px] border-background bg-accent"
          initial={false}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: index * 0.06, ease }}
        />
        {!isLast && (
          <motion.div
            className="mt-1 w-px flex-1 origin-top bg-accent"
            initial={false}
            animate={inView ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0.3 }}
            transition={{ duration: 0.4, delay: 0.12 + index * 0.06, ease }}
          />
        )}
      </div>

      <motion.div
        className="min-w-0 flex-1 pt-0.5"
        initial={false}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
        transition={{ duration: 0.45, delay: 0.06 + index * 0.06, ease }}
      >
        <h3 className="font-display text-[clamp(1.2rem,2.2vw,1.65rem)] leading-tight tracking-tight text-accent">
          {title}
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-secondary sm:text-[15px]">
          {description}
        </p>
      </motion.div>

      <motion.div
        className="mockup-frame w-[min(34vw,200px)] min-w-[108px] max-w-[200px] shrink-0 self-center overflow-hidden p-2 sm:w-[180px]"
        initial={false}
        animate={
          inView
            ? { opacity: 1, x: 0, scale: 1 }
            : { opacity: 0, x: 16, scale: 0.96 }
        }
        transition={{ duration: 0.45, delay: 0.14 + index * 0.06, ease }}
      >
        {getStrategyPhaseVisual(phaseId)}
      </motion.div>
    </div>
  );
}

export default function ProcessTimeline() {
  return (
    <div className="mt-10 border-t border-border pt-10 sm:mt-12 sm:pt-12">
      {engagementPhases.map((phase, i) => (
        <TimelineItem
          key={phase.id}
          phaseId={phase.id}
          title={phase.title}
          description={phase.description}
          index={i}
          isLast={i === engagementPhases.length - 1}
        />
      ))}
    </div>
  );
}

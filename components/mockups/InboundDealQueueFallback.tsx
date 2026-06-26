"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  {
    deal: "Grocery-anchored center, GA",
    source: "Broker email",
    size: "$42M",
    score: "92",
  },
  {
    deal: "Mixed-use, SC",
    source: "Brokerage",
    size: "$18M",
    score: "87",
  },
  {
    deal: "Industrial flex, SC",
    source: "Direct broker",
    size: "$11M",
    score: "81",
  },
  {
    deal: "Office-to-resi, NC",
    source: "Brokerage",
    size: "$65M",
    score: "74",
  },
  {
    deal: "Strip retail, GA",
    source: "Cold inbound",
    size: "$7M",
    score: "68",
  },
];

export default function InboundDealQueueFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Inbound deal queue
      </p>
      <div className="mt-5 overflow-x-auto overflow-y-hidden rounded border border-border">
        <div className="grid min-w-[560px] grid-cols-[1.3fr_0.8fr_0.5fr_0.5fr] gap-2 border-b border-border bg-surface px-3 py-2 text-[10px] uppercase tracking-wider text-muted">
          <span>Deal</span>
          <span>Source</span>
          <span>Size</span>
          <span>Fit score</span>
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={row.deal}
            className="grid min-w-[560px] grid-cols-[1.3fr_0.8fr_0.5fr_0.5fr] gap-2 border-b border-border px-3 py-2.5 text-[12px] last:border-0"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ delay: i * 0.06 }}
          >
            <span className="truncate text-foreground">{row.deal}</span>
            <span className="text-secondary">{row.source}</span>
            <span className="text-secondary">{row.size}</span>
            <span className="font-medium text-accent">{row.score}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

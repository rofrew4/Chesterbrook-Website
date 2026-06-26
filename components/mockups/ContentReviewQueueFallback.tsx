"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  {
    draft: "5 things accidental landlords miss…",
    channel: "LinkedIn",
    status: "Ready for review",
  },
  {
    draft: "Q3 county rent recap",
    channel: "Blog",
    status: "Approved · scheduled",
  },
  {
    draft: "Why we don't take every listing",
    channel: "Email",
    status: "Revising",
  },
  {
    draft: "New construction vs. existing rentals",
    channel: "LinkedIn",
    status: "Ready for review",
  },
  {
    draft: "Tenant screening — what actually matters",
    channel: "Blog",
    status: "Draft",
  },
];

export default function ContentReviewQueueFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Content review queue
      </p>
      <div className="mt-5 overflow-x-auto overflow-y-hidden rounded border border-border">
        <div className="grid min-w-[520px] grid-cols-[1.4fr_0.6fr_0.8fr] gap-2 border-b border-border bg-surface px-3 py-2 text-[10px] uppercase tracking-wider text-muted">
          <span>Draft</span>
          <span>Channel</span>
          <span>Status</span>
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={row.draft}
            className="grid min-w-[520px] grid-cols-[1.4fr_0.6fr_0.8fr] gap-2 border-b border-border px-3 py-2.5 text-[12px] last:border-0"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ delay: i * 0.06 }}
          >
            <span className="truncate text-foreground">&ldquo;{row.draft}&rdquo;</span>
            <span className="text-secondary">{row.channel}</span>
            <span className="text-secondary">{row.status}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

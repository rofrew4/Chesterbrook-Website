"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const rows = [
  {
    subject: "Re: tour Thursday",
    intent: "Scheduling",
    action: "Draft sent",
  },
  {
    subject: "Application question",
    intent: "Tenant inquiry",
    action: "Draft sent",
  },
  {
    subject: "Following up on the deck",
    intent: "Investor follow-up",
    action: "Flagged",
  },
  {
    subject: "Quick question about the unit",
    intent: "Lead",
    action: "Draft sent",
  },
  {
    subject: "Invoice #4421",
    intent: "Billing",
    action: "Routed to AP",
  },
];

export default function InboxTriageFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  return (
    <div ref={ref} className="p-6 md:p-8">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Inbox triage
      </p>
      <div className="mt-5 overflow-x-auto overflow-y-hidden rounded border border-border">
        <div className="grid min-w-[520px] grid-cols-[1.2fr_0.9fr_0.7fr] gap-2 border-b border-border bg-surface px-3 py-2 text-[10px] uppercase tracking-wider text-muted">
          <span>Subject</span>
          <span>Intent</span>
          <span>Action</span>
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={row.subject}
            className="grid min-w-[520px] grid-cols-[1.2fr_0.9fr_0.7fr] gap-2 border-b border-border px-3 py-2.5 text-[12px] last:border-0"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ delay: i * 0.06 }}
          >
            <span className="truncate text-foreground">{row.subject}</span>
            <span className="text-secondary">{row.intent}</span>
            <span className="text-secondary">{row.action}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

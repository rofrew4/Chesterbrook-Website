"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const leads = [
  { address: "1842 Wilson Blvd, Arlington, VA", phone: "(703) 555-0142" },
  { address: "9200 Westpark Dr, Tysons, VA", phone: "(571) 555-0198" },
  { address: "310 King St, Alexandria, VA", phone: "(703) 555-0267" },
  { address: "4450 Lee Hwy, Fairfax, VA", phone: "(703) 555-0331" },
  { address: "11200 Waples Mill Rd, Fairfax, VA", phone: "(571) 555-0415" },
];

export default function DealSourcingListFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  return (
    <div ref={ref} className="p-4 md:p-5">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Off-market leads
      </p>
      <div className="mt-5 overflow-hidden rounded border border-border">
        {leads.map((lead, i) => (
          <motion.div
            key={lead.address}
            className="flex flex-col gap-0.5 border-b border-border px-3 py-3 last:border-0 sm:flex-row sm:items-center sm:justify-between"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="text-[12px] text-foreground">{lead.address}</span>
            <span className="text-[12px] text-secondary">{lead.phone}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

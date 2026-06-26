"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const vacancies = [
  { address: "2200 Clarendon Blvd, Arlington, VA", units: 3 },
  { address: "7900 Westpark Dr, McLean, VA", units: 1 },
  { address: "1550 Crystal Dr, Arlington, VA", units: 5 },
  { address: "8300 Greensboro Dr, Tysons, VA", units: 2 },
  { address: "4100 Fairfax Dr, Arlington, VA", units: 4 },
];

export default function CompetitorScrapingFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  return (
    <div ref={ref} className="p-4 md:p-5">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Competitor vacancy feed
      </p>
      <div className="mt-5 overflow-hidden rounded border border-border">
        <div className="grid grid-cols-[1fr_auto] gap-2 border-b border-border bg-surface px-3 py-2 text-[10px] uppercase tracking-wider text-muted">
          <span>Address</span>
          <span>Vacancies</span>
        </div>
        {vacancies.map((row, i) => (
          <motion.div
            key={row.address}
            className="grid grid-cols-[1fr_auto] items-center gap-2 border-b border-border px-3 py-3 text-[12px] last:border-0"
            initial={false}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="text-foreground">{row.address}</span>
            <span className="font-medium text-accent">{row.units}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

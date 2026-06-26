"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const navItems = ["To-do", "Contacts", "Deals", "Comps", "Analytics"];

const columns = [
  {
    title: "New inquiry",
    count: 5,
    tint: "bg-orange-50 border-orange-200",
    header: "bg-orange-100 text-orange-900",
    cards: [
      { name: "Mixed-use, Arlington", company: "Institutional buyer", meta: "$42M · 6.1 cap" },
      { name: "Retail pad, Tysons", company: "Family office", meta: "Broker referral" },
    ],
  },
  {
    title: "Site tour",
    count: 4,
    tint: "bg-amber-50 border-amber-200",
    header: "bg-amber-100 text-amber-900",
    cards: [
      { name: "Office conversion, DC", company: "Private equity", meta: "Tour Thu 2pm" },
    ],
  },
  {
    title: "LOI out",
    count: 3,
    tint: "bg-emerald-50 border-emerald-200",
    header: "bg-emerald-100 text-emerald-900",
    cards: [
      { name: "Multifamily, Fairfax", company: "Equity partner", meta: "LOI expires 6/28" },
      { name: "Industrial, Manassas", company: "1031 buyer", meta: "$18M · 7.2 cap" },
    ],
  },
  {
    title: "Due diligence",
    count: 2,
    tint: "bg-violet-50 border-violet-200",
    header: "bg-violet-100 text-violet-900",
    cards: [
      { name: "Ground-up, Reston", company: "Developer sponsor", meta: "Entitlements review" },
    ],
  },
];

export default function CustomCrmFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  return (
    <div ref={ref} className="p-4 md:p-5">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Deal pipeline
      </p>

      <div className="mt-4 overflow-hidden rounded border border-border bg-background">
        <div className="flex min-h-[220px]">
          <aside className="hidden w-[72px] shrink-0 border-r border-border bg-surface/60 px-2 py-3 sm:block">
            <p className="px-1 text-[10px] font-semibold uppercase tracking-wider text-foreground">
              CRM
            </p>
            <ul className="mt-3 space-y-1">
              {navItems.map((item) => (
                <li
                  key={item}
                  className={`rounded px-1.5 py-1 text-[9px] ${
                    item === "Deals"
                      ? "bg-background font-medium text-foreground shadow-sm"
                      : "text-muted"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>

          <div className="min-w-0 flex-1 p-3">
            <div className="flex items-baseline justify-between gap-2">
              <div>
                <p className="text-[13px] font-medium text-foreground">Deals</p>
                <p className="text-[10px] text-muted">19 active</p>
              </div>
              <span className="rounded-full bg-foreground px-2 py-0.5 text-[9px] text-background">
                Add deal
              </span>
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {columns.map((column, columnIndex) => (
                <div
                  key={column.title}
                  className={`w-[100px] shrink-0 rounded border ${column.tint}`}
                >
                  <div
                    className={`rounded-t px-2 py-1.5 text-[8px] font-medium uppercase tracking-wide ${column.header}`}
                  >
                    {column.title} · {column.count}
                  </div>
                  <div className="space-y-1.5 p-1.5">
                    {column.cards.map((card, cardIndex) => (
                      <motion.div
                        key={card.name}
                        className="rounded border border-border/70 bg-background px-2 py-1.5"
                        initial={false}
                        animate={
                          inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 4 }
                        }
                        transition={{
                          delay: columnIndex * 0.08 + cardIndex * 0.05,
                        }}
                      >
                        <div
                          className="select-none"
                          style={{ filter: "blur(1.7px)" }}
                        >
                          <p className="truncate text-[10px] font-medium text-foreground">
                            {card.name}
                          </p>
                          <p className="truncate text-[9px] text-secondary">
                            {card.company}
                          </p>
                          <p className="mt-1 text-[8px] text-muted">{card.meta}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

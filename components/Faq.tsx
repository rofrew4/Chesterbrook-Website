"use client";

import { useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus } from "./Icons";

type Item = { q: string; a: string };

export default function Faq({ items }: { items: readonly Item[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();
  const baseId = useId();

  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i;
        const panelId = `${baseId}-panel-${i}`;
        return (
          <li key={item.q}>
            <h3 className="font-sans">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left text-[19px] font-semibold leading-snug tracking-[-0.015em] text-foreground md:text-[21px]"
              >
                {item.q}
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface text-foreground transition-transform duration-300 ease-out ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <Plus />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={panelId}
                  key="panel"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={reduced ? { duration: 0.15 } : { type: "spring", bounce: 0, duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="max-w-[60ch] pb-7 pr-14 text-[17px] leading-[1.55] text-secondary">{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

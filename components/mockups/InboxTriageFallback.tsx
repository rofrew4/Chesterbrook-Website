"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function SkeletonLine({
  width,
  className = "",
}: {
  width: string;
  className?: string;
}) {
  return (
    <div
      className={`h-1.5 rounded-sm bg-border/80 ${width} ${className}`}
      aria-hidden
    />
  );
}

const folders = [
  { label: "Inbox", count: 12, active: true },
  { label: "Flagged", count: 2, active: false },
  { label: "Drafts", count: 4, active: false },
];

const emails = [
  {
    subject: "Re: tour Thursday",
    intent: "Scheduling",
    action: "Draft sent",
    selected: true,
    unread: true,
  },
  {
    subject: "Application question",
    intent: "Tenant inquiry",
    action: "Draft sent",
    selected: false,
    unread: true,
  },
  {
    subject: "Following up on the deck",
    intent: "Investor follow-up",
    action: "Flagged",
    selected: false,
    unread: false,
  },
  {
    subject: "Invoice #4421",
    intent: "Billing",
    action: "Routed to AP",
    selected: false,
    unread: false,
  },
];

export default function InboxTriageFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  const selected = emails.find((email) => email.selected)!;

  return (
    <div ref={ref} className="p-4 md:p-5">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Inbox triage
      </p>

      <div className="mt-4 origin-top" style={{ zoom: 0.8 }}>
        <div className="overflow-hidden rounded-md border border-border bg-widget shadow-sm">
          <div className="flex items-center justify-between border-b border-border bg-surface/60 px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-foreground">Mail</span>
              <SkeletonLine width="w-16" className="h-1 opacity-50" />
            </div>
            <div className="flex items-center gap-1.5 rounded-full bg-accent/10 px-2 py-0.5">
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-accent"
                animate={inView ? { opacity: [0.4, 1, 0.4] } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-[8px] font-medium uppercase tracking-wide text-accent">
                Agent live
              </span>
            </div>
          </div>

          <div className="flex min-h-[280px]">
            <aside className="w-[62px] shrink-0 border-r border-border bg-surface/40 py-2">
              {folders.map((folder) => (
                <div
                  key={folder.label}
                  className={`mx-1.5 mb-1 rounded px-1.5 py-1.5 ${
                    folder.active
                      ? "bg-background font-medium text-foreground shadow-sm"
                      : "text-muted"
                  }`}
                >
                  <p className="text-[8px] leading-tight">{folder.label}</p>
                  <p className="mt-0.5 text-[8px] text-muted">{folder.count}</p>
                </div>
              ))}
            </aside>

            <div className="min-w-0 flex-1">
              <div className="border-b border-border">
                {emails.map((email, i) => (
                  <motion.div
                    key={email.subject}
                    className={`border-b border-border px-2.5 py-2 last:border-0 ${
                      email.selected ? "bg-accent/[0.06]" : "bg-background"
                    }`}
                    initial={false}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 6 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <div className="flex items-start gap-2">
                      <div className="relative mt-0.5 h-6 w-6 shrink-0 rounded-full border border-border bg-surface">
                        {email.unread && (
                          <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-accent" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-1">
                          <p
                            className={`truncate text-[10px] ${
                              email.unread
                                ? "font-medium text-foreground"
                                : "text-secondary"
                            }`}
                          >
                            {email.subject}
                          </p>
                          <span className="shrink-0 text-[7px] text-muted">9:04a</span>
                        </div>
                        <SkeletonLine
                          width="w-[88%]"
                          className="mt-1 h-1 opacity-60"
                        />
                        <span className="mt-1 inline-block rounded-full bg-surface px-1.5 py-px text-[7px] text-secondary">
                          {email.intent}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="border-t-2 border-accent/30 bg-surface/30 p-2.5"
                initial={false}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                transition={{ delay: 0.35 }}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-accent text-[7px] font-bold text-white">
                      AI
                    </span>
                    <p className="text-[9px] font-medium text-foreground">
                      Agent on this thread
                    </p>
                  </div>
                  <span className="rounded-full bg-accent/10 px-1.5 py-0.5 text-[7px] font-medium text-accent">
                    {selected.action}
                  </span>
                </div>

                <div className="mt-2 rounded border border-border bg-background p-2">
                  <p className="text-[8px] uppercase tracking-wider text-muted">
                    Draft reply
                  </p>
                  <div className="mt-1.5 space-y-1">
                    <SkeletonLine width="w-full" />
                    <SkeletonLine width="w-[94%]" />
                    <SkeletonLine width="w-[72%]" />
                  </div>
                </div>

                <div className="mt-2 flex gap-1.5">
                  <span className="rounded-full bg-accent px-2 py-0.5 text-[7px] font-medium text-white">
                    Send draft
                  </span>
                  <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[7px] text-secondary">
                    Flag for review
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

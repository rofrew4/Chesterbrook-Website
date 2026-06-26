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

const posts = [
  {
    status: "Ready for review",
    statusClass: "bg-accent/10 text-accent",
    bodyLines: ["w-full", "w-[92%]", "w-[78%]", "w-[64%]"],
  },
  {
    status: "Draft",
    statusClass: "bg-surface text-muted",
    bodyLines: ["w-full", "w-[85%]", "w-[58%]"],
  },
];

export default function ContentReviewQueueFallback() {
  const ref = useRef(null);
  const inView = useInView(ref, { margin: "-40px" });

  return (
    <div ref={ref} className="p-4 md:p-5">
      <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
        Content review queue
      </p>

      <div className="mt-4 origin-top" style={{ zoom: 0.8 }}>
        <div className="space-y-3">
          {posts.map((post, i) => (
            <motion.article
              key={post.status}
              className="overflow-hidden rounded-md border border-border bg-widget shadow-sm"
              initial={false}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="border-b border-border bg-surface/50 px-3 py-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="flex h-3.5 w-3.5 items-center justify-center rounded-[3px] bg-accent text-[7px] font-bold text-white">
                    in
                  </span>
                  <span className="text-[9px] font-medium uppercase tracking-wider text-secondary">
                    LinkedIn post
                  </span>
                </div>
              </div>

              <div className="p-3">
                <div className="flex gap-2.5">
                  <div className="h-9 w-9 shrink-0 rounded-full border border-border bg-surface" />
                  <div className="min-w-0 flex-1 space-y-1.5 pt-0.5">
                    <SkeletonLine width="w-[58%]" />
                    <SkeletonLine width="w-[42%]" className="h-1 opacity-70" />
                    <SkeletonLine width="w-[30%]" className="h-1 opacity-50" />
                  </div>
                </div>

                <div className="mt-3 space-y-1.5">
                  {post.bodyLines.map((width, lineIndex) => (
                    <motion.div
                      key={`${post.status}-${width}-${lineIndex}`}
                      initial={false}
                      animate={
                        inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.7 }
                      }
                      transition={{
                        delay: 0.15 + i * 0.1 + lineIndex * 0.05,
                        duration: 0.3,
                      }}
                      style={{ transformOrigin: "left" }}
                    >
                      <SkeletonLine width={width} />
                    </motion.div>
                  ))}
                </div>

                <div className="mt-3 flex items-center gap-4 border-t border-border pt-2.5">
                  <SkeletonLine width="w-8" className="h-1 opacity-60" />
                  <SkeletonLine width="w-10" className="h-1 opacity-60" />
                  <SkeletonLine width="w-9" className="h-1 opacity-60" />
                  <SkeletonLine width="w-8" className="h-1 opacity-60" />
                </div>

                <div className="mt-2.5 flex justify-end">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[8px] font-medium uppercase tracking-wide ${post.statusClass}`}
                  >
                    {post.status}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

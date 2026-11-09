"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { CALENDLY_URL } from "@/lib/links";
import { ChevronRight } from "../Icons";
import Reveal from "../Reveal";
import { RoadmapVisual } from "../visuals/BuildVisual";
import { Notification } from "../visuals/primitives";

export default function Hero() {
  const stage = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  // Scroll-linked, 1:1 with the page: the window starts tipped back and
  // settles flat as it rises into view. No easing layer between the user's
  // scroll and what they see.
  const { scrollYProgress } = useScroll({ target: stage, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const chipsY = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section className="relative overflow-hidden bg-background pt-[calc(var(--nav-h)+56px)] md:pt-[calc(var(--nav-h)+88px)]">
      <div className="container-site text-center">
        <Reveal>
          <h1 className="mx-auto max-w-[12ch] text-hero text-foreground">
            Your AI engineering team.
          </h1>
          <p className="mx-auto mt-6 max-w-[34ch] text-lead text-secondary">
            We take AI projects off your plate and ship them. Built for
            commercial real estate.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book a call
            </a>
            <Link href="/work" className="link-chevron">
              <span className="link-label">See what we build</span>
              <ChevronRight />
            </Link>
          </div>
        </Reveal>
      </div>

      <div ref={stage} className="container-site relative mt-16 pb-24 md:mt-20 md:pb-32" style={{ perspective: 1600 }}>
        <div className="relative mx-auto max-w-[880px]">
          <motion.div className="origin-bottom" style={reduced ? undefined : { rotateX, scale }}>
            <RoadmapVisual />
          </motion.div>

          {/* Pinned to the window's corners: over the title bar and the last
              row, never over the projects themselves. */}
          <motion.div
            className="pointer-events-none absolute -inset-x-24 inset-y-0 hidden lg:block"
            style={reduced ? undefined : { y: chipsY }}
            aria-hidden
          >
            <Notification
              className="absolute -top-12 left-0"
              app="Shipped"
              title="Lease abstraction is live"
              body="412 leases in your template, ready to use."
            />
            <Notification
              className="absolute -bottom-14 right-0"
              app="Firm brain"
              title="Property management connected"
              body="Every tool now works from the same rent roll."
              time="2m ago"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useReducedMotion } from "framer-motion";
import HeroArcField from "./HeroArcField";
import { scrollToSection } from "@/lib/scroll";
import { CALENDLY_URL } from "@/lib/links";

const LINE_ONE = ["Automating", "Property", "Management"];
const LINE_TWO = ["and", "Commercial", "Real", "Estate."];

function Line({
  words,
  offset,
  reduced,
}: {
  words: string[];
  offset: number;
  reduced: boolean | null;
}) {
  return (
    <span className="block overflow-hidden pb-[0.08em]">
      {words.map((word, i) => (
        <motion.span
          key={word}
          className="inline-block will-change-transform"
          initial={reduced ? false : { y: "105%" }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.62,
            delay: reduced ? 0 : 0.08 + (offset + i) * 0.055,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border bg-background scroll-mt-nav"
      style={{ isolation: "isolate" }}
    >
      <HeroArcField />

      <div className="relative z-[1] mx-auto w-full max-w-[1200px] px-6 py-28 md:px-10 md:py-36">
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          AI Strategy &amp; Integration
        </motion.p>

        <h1 className="mt-8 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.04] tracking-[-0.035em] text-foreground">
          <Line words={LINE_ONE} offset={0} reduced={reduced} />
          <Line words={LINE_TWO} offset={LINE_ONE.length} reduced={reduced} />
        </h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-[46ch] text-[18px] leading-relaxed text-secondary"
        >
          Custom software fit to your business.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap items-center gap-6"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Book a consult
          </a>
          <button
            type="button"
            onClick={() => scrollToSection("examples")}
            className="nav-link text-[14px] text-secondary transition-colors duration-200 hover:text-accent"
          >
            See common projects →
          </button>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import FadeIn from "./FadeIn";
import HeroVideoBackground from "./HeroVideoBackground";
import { scrollToSection } from "@/lib/scroll";
import { CALENDLY_URL } from "@/lib/links";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center scroll-mt-nav overflow-hidden border-b border-white/10"
    >
      <HeroVideoBackground />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 py-28 md:px-10 md:py-36">
        <FadeIn>
          <p className="font-sans text-[11px] font-normal uppercase tracking-[0.25em] text-white/70">
            AI Strategy & Deployment
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="mt-8 font-display text-[clamp(2.25rem,5vw,5.5rem)] leading-[1.08] tracking-[-0.03em] text-white">
            <span className="block">Automating Property Management</span>
            <span className="block">and Commercial Real Estate.</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-8 max-w-[480px] text-[18px] leading-relaxed text-white/85">
            More deals, more time. Custom fit to your business.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mt-12 flex flex-wrap items-center gap-6">
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
              className="nav-link text-[14px] text-white/90 transition-colors hover:text-white"
            >
              See common projects →
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

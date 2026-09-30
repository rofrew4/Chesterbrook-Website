"use client";

import HeroFlow from "./HeroFlow";
import HeroVideoBackground from "./HeroVideoBackground";
import { scrollToSection } from "@/lib/scroll";
import { CALENDLY_URL } from "@/lib/links";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border bg-background scroll-mt-nav"
      style={{ isolation: "isolate" }}
    >
      <HeroVideoBackground />

      <div className="relative z-[1] mx-auto grid w-full max-w-[1320px] items-center gap-14 px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40 lg:grid-cols-[minmax(0,1fr)_minmax(460px,600px)] lg:gap-20">
        <div>
          <h1 className="font-display text-[clamp(2.1rem,3.6vw,3.25rem)] leading-[1.06] text-foreground">
            Your team&rsquo;s personal engineering arm.
          </h1>

          <p className="mt-6 max-w-[44ch] text-[17px] leading-[1.55] text-accent">
            AI strategy and integration for commercial real estate and property
            managers.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
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
              className="nav-link text-[15px] text-secondary transition-colors duration-200 hover:text-accent"
            >
              See what we&rsquo;ve built
            </button>
          </div>
        </div>

        <div className="relative h-[320px] w-full md:h-[420px] lg:h-[460px]">
          <HeroFlow />
        </div>
      </div>
    </section>
  );
}

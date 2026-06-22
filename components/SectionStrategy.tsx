import FadeIn from "./FadeIn";
import ProcessTimeline from "./ProcessTimeline";
import StrategyProjectsCta from "./StrategyProjectsCta";

export default function SectionStrategy() {
  return (
    <section id="strategy" className="scroll-mt-nav">
      <div className="border-b border-border bg-surface/50 py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-8 min-[720px]:grid-cols-[1fr_minmax(260px,340px)] min-[720px]:items-start min-[720px]:gap-10">
            <FadeIn>
              <p className="eyebrow">Our Strategy</p>
              <h2 className="mt-6 max-w-[600px] font-display text-headline text-foreground">
                We find where AI can advance your business.
              </h2>
              <p className="mt-6 max-w-[520px] text-[17px] leading-relaxed text-secondary">
                Every day, we meet with leaders who know they need AI but
                don&apos;t know how to start. Here&apos;s how we help:
              </p>
            </FadeIn>

            <StrategyProjectsCta />
          </div>

          <ProcessTimeline />
        </div>
      </div>
    </section>
  );
}

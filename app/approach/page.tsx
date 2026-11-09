import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import { Check, Ear, Hammer, Refresh, Roadmap } from "@/components/Icons";
import { faqs, steps } from "@/lib/site";

export const metadata: Metadata = {
  title: "Approach — How We Work",
  description:
    "How Chesterbrook works as your AI engineering team: we listen, plan a ranked roadmap, ship software you own, and keep it running.",
  alternates: { canonical: "/approach" },
};

const icons = [Ear, Roadmap, Hammer, Refresh];

export default function ApproachPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-background pb-20 pt-[calc(var(--nav-h)+64px)] md:pb-28 md:pt-[calc(var(--nav-h)+104px)]">
          <Reveal className="container-site">
            <p className="eyebrow">Approach</p>
            <h1 className="mt-3 max-w-[16ch] text-display text-foreground">
              Like an engineering team. Without the hiring.
            </h1>
          </Reveal>
        </section>

        {/* The three steps, each as its own chapter */}
        <section className="bg-surface py-20 md:py-28">
          <div className="container-site space-y-5">
            {steps.map((step, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={step.name}>
                  <article className="tile grid gap-10 bg-white p-8 shadow-tile ring-1 ring-black/[0.04] md:grid-cols-[1.1fr_1fr] md:gap-16 md:p-14">
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/[0.08] text-accent">
                          <Icon className="h-6 w-6" />
                        </span>
                        <span className="text-[14px] font-semibold tabular-nums text-secondary">
                          Step {step.number}
                        </span>
                      </div>
                      <h2 className="mt-8 text-[clamp(2.25rem,5vw,3.5rem)] font-bold leading-none tracking-[-0.03em] text-foreground">
                        {step.name}
                      </h2>
                      <p className="mt-4 text-title text-foreground">{step.headline}</p>
                      <p className="mt-4 max-w-[46ch] text-[19px] leading-[1.5] text-secondary">{step.body}</p>
                    </div>
                    <div className="md:pt-20">
                      <p className="text-[14px] font-semibold text-foreground">What you get</p>
                      <ul className="mt-4 divide-y divide-border border-t border-border">
                        {step.deliverables.map((d) => (
                          <li key={d} className="flex items-start gap-3 py-4 text-[17px] leading-snug text-foreground">
                            <Check className="mt-0.5 h-[18px] w-[18px] shrink-0 text-accent" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Statement */}
        <section className="bg-ink py-28 text-ink-text md:py-40">
          <Reveal className="container-site">
            <p className="mx-auto max-w-[22ch] text-center text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.028em]">
              Sometimes the answer is off the shelf.{" "}
              <span className="text-ink-soft">We’ll tell you.</span>
            </p>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="bg-background py-24 md:py-36">
          <div className="container-site grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow">Questions</p>
              <h2 className="mt-3 text-headline text-foreground">Common questions.</h2>
            </Reveal>
            <Reveal delay={0.06}>
              <Faq items={faqs} />
            </Reveal>
          </div>
        </section>

        <div className="border-t border-border/70" />
        <CtaBand
          title="Ready when you are."
          body="It starts with a 30-minute call."
        />
      </main>
      <Footer />
    </>
  );
}

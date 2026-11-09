import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import BuildVisual from "@/components/visuals/BuildVisual";
import { builds } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work — What We Build",
  description:
    "Firm brains, stack replacement, and AI projects — deal sourcing, lease abstraction, inbox agents, and more — built and run for commercial real estate firms.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-background pb-16 pt-[calc(var(--nav-h)+64px)] md:pb-24 md:pt-[calc(var(--nav-h)+104px)]">
          <Reveal className="container-site">
            <p className="eyebrow">Work</p>
            <h1 className="mt-3 max-w-[14ch] text-display text-foreground">
              What we take off your hands.
            </h1>
          </Reveal>

          {/* In-page index */}
          <nav aria-label="Builds" className="container-site mt-12">
            <ul className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
              {builds.map((b) => (
                <li key={b.id} className="shrink-0">
                  <a
                    href={`#${b.id}`}
                    className="inline-flex rounded-full bg-surface px-4 py-2 text-[14px] text-foreground transition-colors duration-200 hover:bg-black/[0.08] active:scale-[0.97]"
                  >
                    {b.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        {builds.map((build, i) => {
          const flip = i % 2 === 1;
          return (
            <section
              key={build.id}
              id={build.id}
              className={`scroll-mt-nav py-20 md:py-32 ${i % 2 === 0 ? "bg-surface" : "bg-background"}`}
            >
              <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                <Reveal className={flip ? "lg:order-last" : ""}>
                  <p className="text-[14px] font-semibold text-accent">
                    {build.area} · {build.name}
                  </p>
                  <h2 className="mt-3 text-headline text-foreground">{build.headline}</h2>
                  <p className="mt-5 max-w-[48ch] text-[19px] leading-[1.5] text-secondary">{build.detail}</p>

                  <dl className="mt-9 divide-y divide-border border-y border-border">
                    {[
                      ["In", build.input],
                      ["Out", build.output],
                      ["Check", build.check],
                    ].map(([k, v]) => (
                      <div key={k} className="grid grid-cols-[84px_1fr] gap-4 py-3.5">
                        <dt className="text-[14px] font-semibold text-foreground">{k}</dt>
                        <dd className="text-[15px] text-secondary">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
                <Reveal delay={0.08} className="mx-auto w-full max-w-[560px]">
                  <BuildVisual id={build.id} />
                </Reveal>
              </div>
            </section>
          );
        })}

        <CtaBand
          title="Need something else?"
          body="Tell us what’s slowing your team down."
        />
      </main>
      <Footer />
    </>
  );
}

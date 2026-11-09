import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Team",
  description: `${SITE_NAME} is a small team of Northeastern University students and recent graduates building AI software for commercial real estate.`,
  alternates: { canonical: "/team" },
};

const values = [
  { title: "No hand-offs.", body: "The people who scope it build it." },
  { title: "Built in the field.", body: "We learn on operations calls, not from a distance." },
  { title: "Yours to keep.", body: "Code, data, and accounts — all yours." },
];

export default function TeamPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="bg-background pb-16 pt-[calc(var(--nav-h)+64px)] md:pb-24 md:pt-[calc(var(--nav-h)+104px)]">
          <Reveal className="container-site">
            <p className="eyebrow">Team</p>
            <h1 className="mt-3 max-w-[12ch] text-display text-foreground">
              Small team. Close to the work.
            </h1>
          </Reveal>
        </section>

        {/* Photo + story */}
        <section className="bg-background pb-24 md:pb-36">
          <div className="container-site grid items-center gap-12 md:grid-cols-2 md:gap-16">
            <Reveal className="mx-auto w-full max-w-[520px]">
              <div className="tile relative aspect-[4/5] bg-surface">
                <Image
                  src="/about/team.webp"
                  alt="Two members of the Chesterbrook team"
                  fill
                  priority
                  sizes="(max-width: 768px) 92vw, 520px"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <p className="eyebrow">Our story</p>
              <h2 className="mt-3 text-headline text-foreground">It started in the back office.</h2>
              <div className="mt-6 space-y-5 text-[19px] leading-[1.5] text-secondary">
                <p>
                  Founder and CEO Rowan Frew started building software with real
                  estate operators as a college junior — mostly by sitting in on
                  their operations calls.
                </p>
                <p>
                  Lease PDFs retyped by hand. Owner lookups one parcel at a time.
                  That’s what we build for.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Values */}
        <section className="bg-ink py-24 text-ink-text md:py-36">
          <div className="container-site">
            <Reveal>
              <h2 className="max-w-[16ch] text-display">What you can count on.</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
              {values.map((v, i) => (
                <Reveal key={v.title} delay={i * 0.08} className="tile bg-ink-raised p-8 md:p-10">
                  <h3 className="text-[28px] font-bold tracking-[-0.025em]">{v.title}</h3>
                  <p className="mt-3 text-[17px] leading-[1.5] text-ink-soft">{v.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <CtaBand title="Come meet us." body="30 minutes with the people who’d build it." />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import BuildTile from "@/components/BuildTile";
import BlogCard from "@/components/blog/BlogCard";
import CtaBand from "@/components/CtaBand";
import Reveal from "@/components/Reveal";
import { ChevronRight, Ear, Eye, Hammer, Key, Person, Puzzle, Refresh, Roadmap } from "@/components/Icons";
import { blogPosts } from "@/lib/blog";
import { builds, principles, steps, type BuildId } from "@/lib/site";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

const TITLE = `${SITE_NAME} — The AI Engineering Team for Commercial Real Estate`;

export const metadata: Metadata = {
  title: TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: { title: TITLE, description: SITE_DESCRIPTION, url: SITE_URL },
};

export const revalidate = 3600;

const stepIcons = [Ear, Roadmap, Hammer, Refresh];
const principleIcons = [Person, Key, Eye, Puzzle];

const byId = (id: BuildId) => builds.find((b) => b.id === id)!;

export default function Home() {
  const foundations = [byId("firm-brain"), byId("stack-replacement")];
  // Projects bento: one wide, four halves, one wide.
  const projects = (
    ["deal-sourcing", "lease-abstraction", "email-agents", "deal-queue", "competitor-watch", "content-engine"] as BuildId[]
  ).map(byId);
  const latest = blogPosts.slice(0, 3);

  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Proof points */}
        <section className="border-y border-border/70 bg-background">
          <div className="container-site grid divide-y divide-border/70 md:grid-cols-3 md:divide-x md:divide-y-0">
            {[
              ["Off your plate.", "We scope, build, and run it."],
              ["Lower software bills.", "Subscriptions replaced with tools you own."],
              ["Weeks, not quarters.", "First versions in one to three weeks."],
            ].map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.06} className="py-10 md:px-10 md:py-14 md:first:pl-0 md:last:pr-0">
                <p className="text-[24px] font-bold leading-tight tracking-[-0.022em] text-foreground">{title}</p>
                <p className="mt-2 text-[17px] leading-[1.45] text-secondary">{body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Foundations: firm brain + stack replacement */}
        <section className="bg-surface py-24 md:py-36">
          <div className="container-site">
            <Reveal className="max-w-[760px]">
              <p className="eyebrow">What we do</p>
              <h2 className="mt-3 text-display text-foreground">AI that costs less and does more.</h2>
            </Reveal>
            <div className="mt-14 grid gap-5 md:mt-20">
              {foundations.map((build) => (
                <Reveal key={build.id}>
                  <BuildTile build={build} wide />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="bg-background py-24 md:py-36">
          <div className="container-site">
            <Reveal className="max-w-[760px]">
              <p className="eyebrow">Projects</p>
              <h2 className="mt-3 text-display text-foreground">The projects you never get to. Done.</h2>
            </Reveal>

            <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2">
              <Reveal className="md:col-span-2">
                <BuildTile build={projects[0]} wide surface />
              </Reveal>
              {projects.slice(1, 5).map((build, i) => (
                <Reveal key={build.id} delay={(i % 2) * 0.08}>
                  <BuildTile build={build} surface />
                </Reveal>
              ))}
              <Reveal className="md:col-span-2">
                <BuildTile build={projects[5]} wide surface />
              </Reveal>
            </div>

            <Reveal className="mt-12 text-center">
              <Link href="/work" className="link-chevron">
                <span className="link-label">See all our work</span>
                <ChevronRight />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* How we work */}
        <section className="bg-ink py-24 text-ink-text md:py-36">
          <div className="container-site">
            <Reveal className="max-w-[760px]">
              <p className="eyebrow-dark">How we work</p>
              <h2 className="mt-3 text-display">An engineering team, without the hiring.</h2>
            </Reveal>

            <ol className="mt-16 grid gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => {
                const Icon = stepIcons[i];
                return (
                  <Reveal as="li" key={step.name} delay={i * 0.06} className="tile flex flex-col bg-ink-raised p-8">
                    <div className="flex items-center justify-between">
                      <Icon className="h-8 w-8 text-accent-light" />
                      <span className="text-[13px] font-semibold tabular-nums text-ink-soft">{step.number}</span>
                    </div>
                    <h3 className="mt-12 text-[28px] font-bold tracking-[-0.025em]">{step.name}</h3>
                    <p className="mt-1 text-[17px] font-semibold leading-snug tracking-[-0.012em]">{step.headline}</p>
                    <p className="mt-2 text-[16px] leading-[1.5] text-ink-soft">{step.body}</p>
                  </Reveal>
                );
              })}
            </ol>

            <Reveal className="mt-12">
              <Link href="/approach" className="inline-flex items-center gap-1 text-[17px] text-accent-light hover:underline hover:underline-offset-[3px]">
                How an engagement runs
                <ChevronRight />
              </Link>
            </Reveal>
          </div>
        </section>

        {/* Principles */}
        <section className="bg-background py-24 md:py-36">
          <div className="container-site">
            <Reveal className="max-w-[760px]">
              <p className="eyebrow">Why Chesterbrook</p>
              <h2 className="mt-3 text-display text-foreground">Small on purpose.</h2>
            </Reveal>
            <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 md:mt-20">
              {principles.map((p, i) => {
                const Icon = principleIcons[i];
                return (
                  <Reveal key={p.title} delay={i * 0.06}>
                    <Icon className="h-8 w-8 text-accent" />
                    <h3 className="mt-5 text-[21px] font-bold leading-[1.2] tracking-[-0.02em] text-foreground">{p.title}</h3>
                    <p className="mt-2 text-[17px] leading-[1.45] text-secondary">{p.body}</p>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team teaser */}
        <section className="bg-surface py-24 md:py-32">
          <div className="container-site grid items-center gap-12 md:grid-cols-[1fr_1fr] md:gap-16">
            <Reveal className="order-last md:order-first">
              <p className="eyebrow">The team</p>
              <h2 className="mt-3 text-headline text-foreground">The people on your call write the code.</h2>
              <p className="mt-5 max-w-[40ch] text-[19px] leading-[1.5] text-secondary">
                A small team of Northeastern students and recent graduates.
              </p>
              <Link href="/team" className="link-chevron mt-6">
                <span className="link-label">Meet the team</span>
                <ChevronRight />
              </Link>
            </Reveal>
            <Reveal className="relative mx-auto w-full max-w-[460px]">
              <div className="tile aspect-[4/5] shadow-tile">
                <Image
                  src="/about/team.webp"
                  alt="Two members of the Chesterbrook team"
                  fill
                  sizes="(max-width: 768px) 92vw, 460px"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* Insights */}
        {latest.length > 0 && (
          <section className="bg-background py-24 md:py-36">
            <div className="container-site">
              <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="max-w-[640px]">
                  <p className="eyebrow">Insights</p>
                  <h2 className="mt-3 text-headline text-foreground">Straight answers on AI in real estate.</h2>
                </div>
                <Link href="/blog" className="link-chevron shrink-0">
                  <span className="link-label">Read all insights</span>
                  <ChevronRight />
                </Link>
              </Reveal>
              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {latest.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 0.06}>
                    <BlogCard post={post} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="border-t border-border/70" />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}

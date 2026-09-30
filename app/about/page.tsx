import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CALENDLY_URL } from "@/lib/links";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE_NAME} is a team of students and recent graduates from Northeastern University building AI software for property managers, developers, and commercial real estate operators.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="scroll-mt-nav bg-background pb-28 pt-32 md:pt-40">
      <div className="mx-auto w-full max-w-[1120px] px-6 md:px-10">
        <p className="eyebrow">About</p>

        <h1 className="mt-5 max-w-[20ch] font-display text-[clamp(2.1rem,3.6vw,3.25rem)] leading-[1.06] text-foreground">
          Built by people who learned this business from the inside.
        </h1>

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] lg:gap-16">
          <div className="max-w-[62ch]">
            <div className="space-y-6 text-[17px] leading-[1.7] text-secondary">
            <p>
              Chesterbrook AI is made up of students and recent graduates from
              Northeastern University. We are small on purpose: the people who
              scope your project are the same people who build it, and nobody
              is handed off to an account manager.
            </p>
            <p>
              Our founder and CEO, Rowan Frew, has been building AI software
              with property managers, developers, and commercial real estate
              operators since he was a junior in college. That started with
              sitting in on operations calls and watching where teams actually
              lose their days &mdash; lease PDFs retyped into spreadsheets,
              owner lookups done one parcel at a time, inboxes triaged by hand.
            </p>
            <p>
              Everything we build comes out of that: software shaped around how
              a team already works, rather than a platform they have to move
              into. You own what we deliver.
            </p>

            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a consult
              </a>
              <Link
                href="/#examples"
                className="nav-link text-[15px] text-secondary transition-colors duration-200 hover:text-accent"
              >
                See what we&rsquo;ve built
              </Link>
            </div>
            </div>

            <figure className="m-0 mt-12 w-full max-w-[280px] sm:max-w-[300px]">
              <div className="overflow-hidden rounded-2xl">
                <Image
                  src="/about/team.webp"
                  alt="Two members of the Chesterbrook AI team"
                  width={1000}
                  height={1333}
                  className="h-auto w-full"
                  sizes="(max-width: 640px) 280px, 300px"
                />
              </div>
              <figcaption className="mt-3 text-[13px] leading-relaxed text-secondary">
                The team, between classes in Boston.
              </figcaption>
            </figure>
          </div>

          <figure className="m-0 w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/about/rowan-interview.webp"
                alt="Rowan Frew interviewing an agent at an eXp Realty Regional Rallies event"
                width={923}
                height={1387}
                className="h-auto w-full"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 360px, 420px"
                priority
              />
            </div>
            <figcaption className="mt-3 text-[13px] leading-relaxed text-secondary">
              Rowan Frew on the floor at an industry event &mdash; most of what
              we build starts in conversations like this one.
            </figcaption>
          </figure>
        </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

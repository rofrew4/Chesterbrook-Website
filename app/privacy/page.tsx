import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/lib/links";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Chesterbrook AI collects and uses information from website visitors.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="scroll-mt-nav pt-28 md:pt-32">
        <div className="mx-auto max-w-[720px] px-6 pb-20 md:px-10 md:pb-28">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-4 font-display text-headline text-foreground">
            Privacy Policy
          </h1>
          <p className="mt-4 text-[14px] text-secondary">Last updated September 28, 2026</p>

          <div className="blog-prose mt-10">
            <p>
              Old Chesterbrook LLC (&ldquo;Chesterbrook,&rdquo; &ldquo;we&rdquo;)
              operates chesterbrookai.com. This policy explains what we collect
              when you visit the site and how we use it.
            </p>

            <h2>What we collect</h2>
            <ul>
              <li>
                <strong>Usage data.</strong> Pages you view, how you arrived
                (referrer and campaign links), clicks, time on page, device and
                browser type, and approximate location derived from your IP
                address. We may record session replays to improve the site.
                Text you type into fields is masked in replays.
              </li>
              <li>
                <strong>IP address.</strong> Collected automatically with each
                request and used for analytics, security, and identifying the
                organization a visit comes from.
              </li>
              <li>
                <strong>Information you give us.</strong> Your name, email, and
                any details you share when you email us or book a consult.
              </li>
              <li>
                <strong>Visitor identification.</strong> We use third-party
                services that may match business visitors to publicly available
                professional profile information, such as name, job title,
                company, and work email, so we can follow up about our services.
              </li>
            </ul>

            <h2>Service providers</h2>
            <p>
              We use PostHog for analytics, RB2B for visitor identification,
              Calendly for scheduling, and Vercel for
              hosting. Each processes data on our behalf under its own privacy
              policy. We do not sell your personal information for money.
            </p>

            <h2>How we use it</h2>
            <ul>
              <li>To understand which content is useful and improve the site.</li>
              <li>To respond to inquiries and follow up with potential clients.</li>
              <li>To protect the site from abuse.</li>
            </ul>

            <h2>Your choices</h2>
            <p>
              You can block cookies or use a content blocker to limit
              analytics. You may ask us to access, correct, or delete
              information we hold about you, or opt out of visitor
              identification and follow-up outreach, by emailing{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. California
              residents have these rights under the CCPA/CPRA, and we honor
              Global Privacy Control signals as an opt-out request.
            </p>

            <h2>Retention</h2>
            <p>
              We keep analytics data for up to two years and inquiry
              information for as long as needed to respond and maintain our
              business relationship.
            </p>

            <h2>Contact</h2>
            <p>
              Old Chesterbrook LLC, McLean, Virginia ·{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

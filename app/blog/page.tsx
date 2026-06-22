import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import { BlogListingJsonLd } from "@/components/blog/BlogJsonLd";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Insights — CRE Data, Software & AI",
  description:
    "Articles on off-market CRE data, software renewals, and practical AI adoption for commercial real estate operators.",
  keywords: [
    "commercial real estate blog",
    "CRE data sourcing",
    "CRE software",
    "AI for real estate",
    "property management technology",
  ],
  openGraph: {
    title: "Chesterbrook Insights",
    description:
      "Practical guides for CRE operators on public data, software, and AI.",
    type: "website",
    url: "/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
      <BlogListingJsonLd />
      <Nav />
      <main className="scroll-mt-nav pt-28 md:pt-32">
        <div className="mx-auto max-w-[1200px] px-6 pb-20 md:px-10 md:pb-28">
          <header className="max-w-[720px] border-b border-border pb-10 md:pb-12">
            <p className="eyebrow">Insights</p>
            <h1 className="mt-4 font-display text-headline text-foreground">
              Practical guides for CRE operators
            </h1>
            <p className="mt-5 text-[17px] leading-relaxed text-secondary">
              Data sourcing, software renewals, and AI adoption — written for
              property managers, brokers, and developers who want actionable
              answers, not vendor pitches.
            </p>
          </header>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

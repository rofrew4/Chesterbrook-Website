import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import Reveal from "@/components/Reveal";
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
    title: "Chesterbrook AI Insights",
    description:
      "Practical guides for CRE operators on public data, software, and AI.",
    type: "website",
    url: "/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

// Posts are staggered by `publishedAt`; revalidating lets the next one
// appear on its date without a redeploy.
export const revalidate = 3600;

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;
  // Keep rows full: whatever won't divide into threes goes in a two-up row
  // above (1 left over -> four in pairs, 2 left over -> one pair).
  const pairCount = rest.length % 3 === 1 ? Math.min(4, rest.length) : rest.length % 3 === 2 ? 2 : 0;
  const pairs = rest.slice(0, pairCount);
  const threes = rest.slice(pairCount);

  return (
    <>
      <BlogListingJsonLd />
      <Nav />
      <main className="bg-surface pb-24 pt-[calc(var(--nav-h)+64px)] md:pb-36 md:pt-[calc(var(--nav-h)+96px)]">
        <div className="container-site">
          <Reveal as="section" className="max-w-[720px]">
            <p className="eyebrow">Insights</p>
            <h1 className="mt-3 text-display text-foreground">
              Straight answers on AI in real estate.
            </h1>
          </Reveal>

          {featured && (
            <Reveal className="mt-14 md:mt-20">
              <BlogCard post={featured} featured />
            </Reveal>
          )}

          {pairs.length > 0 && (
            <div className="mt-5 grid gap-5 md:grid-cols-2">
              {pairs.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 2) * 0.06}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          )}

          {threes.length > 0 && (
            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {threes.map((post, i) => (
                <Reveal key={post.slug} delay={(i % 3) * 0.06}>
                  <BlogCard post={post} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}

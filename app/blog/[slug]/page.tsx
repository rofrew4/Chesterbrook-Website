import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogArticleBody from "@/components/blog/BlogArticleBody";
import BlogVisual from "@/components/blog/BlogVisual";
import { BlogPostJsonLd } from "@/components/blog/BlogJsonLd";
import {
  blogPosts,
  getBlogPost,
  getBlogPostSlugs,
  siteUrl,
} from "@/lib/blog";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getBlogPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  const url = `${siteUrl}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: "Chesterbrook" }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url,
      tags: post.keywords,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <BlogPostJsonLd post={post} />
      <Nav />
      <main className="scroll-mt-nav pt-28 md:pt-32">
        <article className="mx-auto max-w-[1200px] px-6 pb-20 md:px-10 md:pb-28">
          <div className="max-w-[760px]">
            <Link
              href="/blog"
              className="text-[13px] text-secondary transition-colors hover:text-accent"
            >
              ← All insights
            </Link>

            <header className="mt-8">
              <div className="flex flex-wrap items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-muted">
                <time dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
                <span aria-hidden>·</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>
              <h1 className="mt-5 font-display text-[clamp(2rem,4.5vw,2.75rem)] leading-[1.08] tracking-tight text-foreground">
                {post.title}
              </h1>
              <p className="mt-4 text-[18px] leading-relaxed text-secondary">
                {post.subtitle}
              </p>
            </header>
          </div>

          <div className="mt-10 max-w-[900px] overflow-hidden rounded-2xl border border-border bg-widget shadow-sm">
            <BlogVisual id={post.visual} />
          </div>

          <div className="mx-auto mt-12 max-w-[760px]">
            <BlogArticleBody post={post} />
          </div>

          {related.length > 0 && (
            <aside className="mx-auto mt-20 max-w-[760px] border-t border-border pt-12">
              <h2 className="font-display text-[1.35rem] tracking-tight text-foreground">
                More insights
              </h2>
              <ul className="mt-6 space-y-4">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/blog/${item.slug}`}
                      className="group block rounded-xl border border-border bg-widget px-5 py-4 transition-shadow hover:shadow-sm"
                    >
                      <p className="font-display text-[1.1rem] leading-snug text-foreground transition-colors group-hover:text-accent">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[14px] text-secondary">
                        {item.subtitle}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}

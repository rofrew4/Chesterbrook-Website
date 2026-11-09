import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BlogCard, { formatPostDate } from "@/components/blog/BlogCard";
import BlogArticleBody from "@/components/blog/BlogArticleBody";
import BlogVisual from "@/components/blog/BlogVisual";
import { ChevronLeft } from "@/components/Icons";
import {
  BlogFaqJsonLd,
  BlogPostJsonLd,
} from "@/components/blog/BlogJsonLd";
import {
  getBlogPost,
  getBlogPostSlugs,
  getRelatedPosts,
  siteUrl,
} from "@/lib/blog";

type PageProps = {
  params: { slug: string };
};

// Posts are staggered by `publishedAt`; revalidating lets the next one go
// live on its date without a redeploy.
export const revalidate = 3600;

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
    authors: [{ name: "Chesterbrook AI" }],
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

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);

  return (
    <>
      <BlogPostJsonLd post={post} />
      <BlogFaqJsonLd post={post} />
      <Nav />
      <main className="bg-background pb-24 pt-[calc(var(--nav-h)+48px)] md:pb-36 md:pt-[calc(var(--nav-h)+72px)]">
        <article>
          <div className="container-site">
            <div className="mx-auto max-w-prose">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1 text-[14px] text-accent hover:underline hover:underline-offset-[3px]"
              >
                <ChevronLeft />
                Insights
              </Link>

              <header className="mt-10">
                <p className="text-[14px] font-semibold text-secondary">
                  <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                  <span aria-hidden> · </span>
                  {post.readingTimeMinutes} min read
                </p>
                <h1 className="mt-4 text-[clamp(2.25rem,5.4vw,3.5rem)] font-bold leading-[1.06] tracking-[-0.03em] text-foreground">
                  {post.title}
                </h1>
                <p className="mt-5 text-[clamp(1.2rem,2.2vw,1.5rem)] font-medium leading-[1.35] tracking-[-0.012em] text-secondary">
                  {post.subtitle}
                </p>
                {post.tags && post.tags.length > 0 && (
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-surface px-3 py-1.5 text-[12px] font-semibold text-foreground/70">
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </header>
            </div>

            <div className="mx-auto mt-12 max-w-[920px] overflow-hidden rounded-tile md:mt-16">
              <div className="flex aspect-[16/9] items-center justify-center bg-surface md:aspect-[2/1]">
                <div className="w-full max-w-[440px] [zoom:1.15] sm:[zoom:1.35] md:[zoom:1.6]">
                  <BlogVisual id={post.visual} />
                </div>
              </div>
            </div>

            <div className="mx-auto mt-12 max-w-prose md:mt-16">
              <BlogArticleBody post={post} />
            </div>
          </div>
        </article>

        {related.length > 0 && (
          <aside className="mt-24 bg-surface py-20 md:mt-32 md:py-28">
            <div className="container-site">
              <h2 className="text-headline text-foreground">Keep reading</h2>
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <BlogCard key={item.slug} post={item} />
                ))}
              </div>
            </div>
          </aside>
        )}
      </main>
      <Footer />
    </>
  );
}

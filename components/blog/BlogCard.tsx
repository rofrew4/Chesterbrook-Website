import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import BlogVisual from "./BlogVisual";

export function formatPostDate(iso: string) {
  // Date-only strings parse as UTC midnight; format in UTC so western
  // timezones don't show the previous day.
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex h-full flex-col overflow-hidden rounded-card bg-white shadow-tile ring-1 ring-black/[0.04] transition-transform duration-300 ease-out hover:-translate-y-0.5 active:scale-[0.99] ${
        featured ? "md:grid md:grid-cols-[1.15fr_1fr]" : ""
      }`}
    >
      <div
        className={`flex items-center overflow-hidden ${
          featured ? "aspect-[16/10] md:aspect-auto md:min-h-[360px]" : "aspect-[16/10]"
        }`}
      >
        <BlogVisual id={post.visual} />
      </div>
      <div className={`flex flex-1 flex-col ${featured ? "p-7 md:justify-center md:p-12" : "p-6 md:p-7"}`}>
        <p className="text-[12px] font-semibold text-secondary">
          {featured ? "Latest · " : ""}
          {formatPostDate(post.publishedAt)}
        </p>
        <h3
          className={`mt-2 font-bold tracking-[-0.02em] text-foreground ${
            featured ? "text-[clamp(1.6rem,3vw,2.25rem)] leading-[1.1]" : "text-[21px] leading-[1.2]"
          }`}
        >
          {post.title}
        </h3>
        <p className={`mt-3 text-secondary ${featured ? "text-[17px] leading-relaxed" : "line-clamp-3 text-[15px] leading-relaxed"}`}>
          {featured ? post.description : post.subtitle}
        </p>
        <p className="mt-auto pt-5 text-[13px] text-secondary">{post.readingTimeMinutes} min read</p>
      </div>
    </Link>
  );
}

import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import BlogVisual from "./BlogVisual";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-widget shadow-sm transition-shadow duration-300 hover:shadow-mockup"
    >
      <BlogVisual id={post.visual} />
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="text-[11px] uppercase tracking-[0.2em] text-accent">
          {post.readingTimeMinutes} min read
        </p>
        <h2 className="mt-3 font-display text-[clamp(1.25rem,2.5vw,1.5rem)] leading-snug tracking-tight text-foreground transition-colors group-hover:text-accent">
          {post.title}
        </h2>
        <p className="mt-2 text-[15px] leading-relaxed text-secondary">
          {post.subtitle}
        </p>
        <p className="mt-4 line-clamp-3 flex-1 text-[14px] leading-relaxed text-secondary">
          {post.description}
        </p>
        <span className="mt-6 text-[13px] font-medium text-accent">
          Read article →
        </span>
      </div>
    </Link>
  );
}

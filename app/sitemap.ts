import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { SITE_URL } from "@/lib/seo";

// Matches the blog routes so staggered posts enter the sitemap on their date.
export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...posts,
  ];
}

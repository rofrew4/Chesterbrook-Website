import { creAiPost } from "./posts/cre-ai";
import { creSoftwarePost } from "./posts/cre-software";
import { publicCreDataPost } from "./posts/public-cre-data";
import type { BlogPost } from "./types";
import { SITE_URL } from "../seo";

export const blogPosts: BlogPost[] = [
  publicCreDataPost,
  creSoftwarePost,
  creAiPost,
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export const siteUrl = SITE_URL;

export type { BlogPost, BlogSection, BlogVisualId } from "./types";

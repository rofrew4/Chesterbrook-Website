import { aiForPropertyManagementPost } from "./posts/ai-for-property-management";
import { aiForRealEstateDevelopersPost } from "./posts/ai-for-real-estate-developers";
import { creAiPost } from "./posts/cre-ai";
import { creSoftwarePost } from "./posts/cre-software";
import { howFirmsUseAiPost } from "./posts/how-real-estate-firms-use-ai";
import { publicCreDataPost } from "./posts/public-cre-data";
import { whatAiCostsPost } from "./posts/what-ai-costs-real-estate";
import { willAiReplaceJobsPost } from "./posts/will-ai-replace-real-estate-jobs";
import type { BlogPost } from "./types";
import { SITE_URL } from "../seo";

/**
 * Every post in the repo, including ones dated in the future. Posts are
 * staggered by `publishedAt` and only become visible on or after that date —
 * see `blogPosts` below.
 */
const allBlogPosts: BlogPost[] = [
  // Newest first within a shared date; the list is sorted by date below.
  publicCreDataPost,
  creSoftwarePost,
  creAiPost,
  howFirmsUseAiPost,
  aiForPropertyManagementPost,
  whatAiCostsPost,
  aiForRealEstateDevelopersPost,
  willAiReplaceJobsPost,
];

function isPublished(post: BlogPost): boolean {
  // Date-only string comparison, so a post goes live at UTC midnight.
  return post.publishedAt <= new Date().toISOString().slice(0, 10);
}

export const blogPosts: BlogPost[] = allBlogPosts
  .filter(isPublished)
  .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

/** Curated "More insights" list, falling back to the two most recent posts. */
export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const curated = (post.related ?? [])
    .filter((slug) => slug !== post.slug)
    .map((slug) => getBlogPost(slug))
    .filter((related): related is BlogPost => Boolean(related));

  if (curated.length > 0) return curated.slice(0, limit);

  return blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
}

export const siteUrl = SITE_URL;

export type {
  BlogBlock,
  BlogFaqItem,
  BlogPost,
  BlogSection,
  BlogVisualId,
} from "./types";

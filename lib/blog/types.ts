export type BlogVisualId =
  | "public-records"
  | "software-stack"
  | "ai-stages"
  | "function-map"
  | "operations-queue"
  | "cost-layers"
  | "site-screening"
  | "role-tasks";

/**
 * Text in blocks below is authored in a deliberately small subset of markdown:
 * `**bold**`, `*italic*`, and `[label](/href)`. See ./richText.ts.
 */
export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; columns: string[]; rows: string[][] };

export type BlogSection = {
  heading?: string;
  /** Plain paragraphs. Kept for the original three posts. */
  paragraphs?: string[];
  /** Plain bulleted list, rendered after `paragraphs`. Kept for the original three posts. */
  list?: string[];
  /** Rich content, rendered after `paragraphs` and `list`. Preferred for new posts. */
  blocks?: BlogBlock[];
};

export type BlogFaqItem = {
  question: string;
  answer: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  publishedAt: string;
  keywords: string[];
  readingTimeMinutes: number;
  visual: BlogVisualId;
  intro: string[];
  sections: BlogSection[];
  /** Short topic labels shown under the title. */
  tags?: string[];
  /** Rendered as a "Common questions" block and mirrored into FAQPage JSON-LD. */
  faq?: BlogFaqItem[];
  /** Slugs for the "More insights" list. Falls back to the two most recent other posts. */
  related?: string[];
};

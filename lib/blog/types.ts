export type BlogVisualId = "public-records" | "software-stack" | "ai-stages";

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  list?: string[];
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
};

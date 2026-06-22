import type { BlogPost } from "@/lib/blog";
import { siteUrl } from "@/lib/blog";

export function BlogListingJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Chesterbrook Insights",
    description:
      "Practical guides on CRE data, software, and AI adoption for property managers, brokers, and developers.",
    url: `${siteUrl}/blog`,
    publisher: {
      "@type": "Organization",
      name: "Chesterbrook",
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BlogPostJsonLd({ post }: { post: BlogPost }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Chesterbrook",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Chesterbrook",
      url: siteUrl,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/${post.slug}`,
    },
    keywords: post.keywords.join(", "),
    articleSection: "Commercial Real Estate",
    about: post.keywords.slice(0, 3).map((keyword) => ({
      "@type": "Thing",
      name: keyword,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

import type { BlogPost } from "@/lib/blog";
import { CALENDLY_URL } from "@/lib/links";

export default function BlogArticleBody({ post }: { post: BlogPost }) {
  return (
    <article className="blog-prose">
      {post.intro.map((paragraph, i) => (
        <p key={`intro-${i}`}>{paragraph}</p>
      ))}

      {post.sections.map((section, si) => (
        <section key={section.heading ?? `section-${si}`}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs.map((paragraph, pi) => (
            <p key={`p-${si}-${pi}`}>{paragraph}</p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item, li) => (
                <li key={`l-${si}-${li}`}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <div className="blog-cta">
        <p>
          Want to talk through how this applies to your business? Book a consult
          — no pitch, just a practical conversation.
        </p>
        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          Book a consult →
        </a>
      </div>
    </article>
  );
}

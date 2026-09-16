import type { BlogBlock, BlogPost } from "@/lib/blog";
import { CALENDLY_URL } from "@/lib/links";
import InlineText from "./InlineText";

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p>
          <InlineText text={block.text} />
        </p>
      );
    case "h3":
      return (
        <h3>
          <InlineText text={block.text} />
        </h3>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>
              <InlineText text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>
              <InlineText text={item} />
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div className="blog-table-wrap">
          <table>
            <thead>
              <tr>
                {block.columns.map((column) => (
                  <th key={column} scope="col">
                    <InlineText text={column} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri}>
                  {row.map((cell, ci) => (
                    <td key={ci}>
                      <InlineText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
  }
}

export default function BlogArticleBody({ post }: { post: BlogPost }) {
  return (
    <article className="blog-prose">
      {post.intro.map((paragraph, i) => (
        <p key={`intro-${i}`}>
          <InlineText text={paragraph} />
        </p>
      ))}

      {post.sections.map((section, si) => (
        <section key={section.heading ?? `section-${si}`}>
          {section.heading && <h2>{section.heading}</h2>}
          {section.paragraphs?.map((paragraph, pi) => (
            <p key={`p-${si}-${pi}`}>
              <InlineText text={paragraph} />
            </p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item, li) => (
                <li key={`l-${si}-${li}`}>
                  <InlineText text={item} />
                </li>
              ))}
            </ul>
          )}
          {section.blocks?.map((block, bi) => (
            <Block key={`b-${si}-${bi}`} block={block} />
          ))}
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

      {post.faq && post.faq.length > 0 && (
        <section className="blog-faq">
          <h2>Common questions</h2>
          <dl>
            {post.faq.map((item) => (
              <div key={item.question}>
                <dt>{item.question}</dt>
                <dd>
                  <InlineText text={item.answer} />
                </dd>
              </div>
            ))}
          </dl>
        </section>
      )}
    </article>
  );
}

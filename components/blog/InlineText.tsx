import Link from "next/link";
import { parseInline } from "@/lib/blog/richText";

export default function InlineText({ text }: { text: string }) {
  return (
    <>
      {parseInline(text).map((node, i) => {
        switch (node.kind) {
          case "strong":
            return (
              <strong key={i} className="font-medium text-foreground">
                {node.value}
              </strong>
            );
          case "em":
            return <em key={i}>{node.value}</em>;
          case "link":
            return node.href.startsWith("/") ? (
              <Link key={i} href={node.href}>
                {node.value}
              </Link>
            ) : (
              <a
                key={i}
                href={node.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {node.value}
              </a>
            );
          default:
            return <span key={i}>{node.value}</span>;
        }
      })}
    </>
  );
}

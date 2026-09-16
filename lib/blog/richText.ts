export type InlineNode =
  | { kind: "text"; value: string }
  | { kind: "strong"; value: string }
  | { kind: "em"; value: string }
  | { kind: "link"; value: string; href: string };

// `**strong**` is matched before `*em*` so the longer delimiter wins.
const INLINE_PATTERN =
  /\*\*([^*]+)\*\*|\*([^*\n]+)\*|\[([^\]]+)\]\(([^)\s]+)\)/g;

/**
 * Parses the small markdown subset used in blog post copy: `**bold**`,
 * `*italic*`, and `[label](/href)`. Anything else is left as literal text.
 */
export function parseInline(text: string): InlineNode[] {
  const nodes: InlineNode[] = [];
  let lastIndex = 0;

  INLINE_PATTERN.lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = INLINE_PATTERN.exec(text)) !== null) {
    const index = match.index;
    if (index > lastIndex) {
      nodes.push({ kind: "text", value: text.slice(lastIndex, index) });
    }

    const [full, strong, em, linkLabel, href] = match;
    if (strong !== undefined) {
      nodes.push({ kind: "strong", value: strong });
    } else if (em !== undefined) {
      nodes.push({ kind: "em", value: em });
    } else if (linkLabel !== undefined && href !== undefined) {
      nodes.push({ kind: "link", value: linkLabel, href });
    }

    lastIndex = index + full.length;
  }

  if (lastIndex < text.length) {
    nodes.push({ kind: "text", value: text.slice(lastIndex) });
  }

  return nodes;
}

/** Strips inline markers — for JSON-LD and metadata, which must be plain text. */
export function toPlainText(text: string): string {
  return parseInline(text)
    .map((node) => node.value)
    .join("");
}

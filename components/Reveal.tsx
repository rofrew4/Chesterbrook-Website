import type { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Stagger, in seconds. */
  delay?: number;
  as?: "div" | "li" | "section" | "article";
};

/**
 * Settles content into place as it scrolls into view.
 *
 * Pure CSS + a tiny inline observer (see RevealScript), so it works before
 * React hydrates and degrades to plainly visible content without JS. The
 * easing approximates a critically damped spring: no overshoot, because
 * nothing here was thrown. Reduced motion gets a short cross-fade.
 */
export default function Reveal({ children, className, delay = 0, as: Tag = "div" }: Props) {
  return (
    <Tag
      data-reveal=""
      // The observer adds data-shown before or during hydration.
      suppressHydrationWarning
      className={className}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

const script = `(function(){var d=document.documentElement;d.classList.add('js');
if(!('IntersectionObserver' in window)){d.classList.remove('js');return;}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.setAttribute('data-shown','');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});
function scan(){document.querySelectorAll('[data-reveal]:not([data-shown]):not([data-watched])').forEach(function(el){el.setAttribute('data-watched','');io.observe(el);});}
scan();new MutationObserver(scan).observe(document.body,{childList:true,subtree:true});})();`;

/** Rendered once at the end of <body>. */
export function RevealScript() {
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

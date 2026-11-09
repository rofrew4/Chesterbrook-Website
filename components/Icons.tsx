type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export function ChevronRight({ className = "h-[0.7em] w-[0.7em]" }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" className={className} {...base} strokeWidth={1.8}>
      <path d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

export function ChevronLeft({ className = "h-[0.7em] w-[0.7em]" }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" className={className} {...base} strokeWidth={1.8}>
      <path d="M7.5 2.5 4 6l3.5 3.5" />
    </svg>
  );
}

export function ArrowUpRight({ className = "h-[0.75em] w-[0.75em]" }: IconProps) {
  return (
    <svg viewBox="0 0 12 12" className={className} {...base} strokeWidth={1.7}>
      <path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" />
    </svg>
  );
}

export function Check({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={2}>
      <path d="m3.5 8.5 3 3 6-7" />
    </svg>
  );
}

export function Plus({ className = "h-4 w-4" }: IconProps) {
  return (
    <svg viewBox="0 0 16 16" className={className} {...base} strokeWidth={1.8}>
      <path d="M8 3v10M3 8h10" />
    </svg>
  );
}

export function Ear({ className = "h-7 w-7" }: IconProps) {
  // Two speech bubbles: listening, in conversation.
  return (
    <svg viewBox="0 0 28 28" className={className} {...base}>
      <path d="M4 7.5A3.5 3.5 0 0 1 7.5 4h8A3.5 3.5 0 0 1 19 7.5v4a3.5 3.5 0 0 1-3.5 3.5H10l-4 3v-3.2A3.5 3.5 0 0 1 4 11.5Z" />
      <path d="M19 10h1.5A3.5 3.5 0 0 1 24 13.5v4a3.5 3.5 0 0 1-2 3.2V24l-4-3h-3.5A3.5 3.5 0 0 1 11 17.5V17" />
    </svg>
  );
}

export function Roadmap({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} {...base}>
      <path d="M3.5 7 10 4.5l8 3 6.5-2.5v16.5L18 24l-8-3-6.5 2.5Z" />
      <path d="M10 4.5V21M18 7.5V24" />
    </svg>
  );
}

export function Hammer({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} {...base}>
      <path d="m15 10-9.5 9.5a2.1 2.1 0 0 0 3 3L18 13" />
      <path d="m13 8 4-4 3 1 4 4-1.5 1.5L24 12l-3 3-1.5-1.5L18 15l-5-5Z" />
    </svg>
  );
}

export function Person({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

export function Key({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <circle cx="8" cy="15" r="4" />
      <path d="m11 12 8.5-8.5M16 7l2.5 2.5M18.5 4.5 21 7" />
    </svg>
  );
}

export function Eye({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function Puzzle({ className = "h-6 w-6" }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...base}>
      <path d="M9.5 4.5a2 2 0 1 1 4 0V6H17a1 1 0 0 1 1 1v3.5h1.5a2 2 0 1 1 0 4H18V18a1 1 0 0 1-1 1h-3.5v-1.5a2 2 0 1 0-4 0V19H6a1 1 0 0 1-1-1v-3.5h1.5a2 2 0 1 0 0-4H5V7a1 1 0 0 1 1-1h3.5Z" />
    </svg>
  );
}

export function Refresh({ className = "h-7 w-7" }: IconProps) {
  return (
    <svg viewBox="0 0 28 28" className={className} {...base}>
      <path d="M22.5 11A9 9 0 0 0 6.2 8.5M5.5 17a9 9 0 0 0 16.3 2.5" />
      <path d="M6 4v4.8h4.8M22 24v-4.8h-4.8" />
    </svg>
  );
}

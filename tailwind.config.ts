import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light canvas. Token names are kept from the previous theme so the
        // blog visuals and prose keep resolving.
        background: "rgb(var(--background) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        widget: "rgb(var(--widget) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        secondary: "rgb(var(--secondary) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        border: "rgb(var(--border) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        "accent-dark": "rgb(var(--accent-dark) / <alpha-value>)",
        "accent-light": "#E8879D",
        ink: {
          DEFAULT: "#000000",
          raised: "#161617",
          line: "#2c2c2e",
          text: "#f5f5f7",
          soft: "#a1a1a6",
        },
        success: "#1d8a4e",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Text"',
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"SF Pro Display"',
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["ui-monospace", '"SF Mono"', "Menlo", "monospace"],
      },
      fontSize: {
        // Tracking tightens and leading closes as size grows; body stays near 0.
        hero: ["clamp(3rem, 8.4vw, 6.5rem)", { lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "700" }],
        display: ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }],
        headline: ["clamp(2rem, 4.4vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "700" }],
        title: ["clamp(1.5rem, 2.6vw, 2rem)", { lineHeight: "1.15", letterSpacing: "-0.018em", fontWeight: "600" }],
        lead: ["clamp(1.1875rem, 1.9vw, 1.5rem)", { lineHeight: "1.4", letterSpacing: "-0.01em", fontWeight: "500" }],
        body: ["1.0625rem", { lineHeight: "1.5", letterSpacing: "-0.005em" }],
        fine: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.005em" }],
      },
      borderRadius: {
        tile: "28px",
        card: "20px",
      },
      boxShadow: {
        window: "0 1px 1px rgba(0,0,0,0.04), 0 8px 24px -6px rgba(0,0,0,0.10), 0 32px 64px -24px rgba(0,0,0,0.18)",
        float: "0 1px 1px rgba(0,0,0,0.04), 0 12px 32px -8px rgba(0,0,0,0.18)",
        tile: "0 2px 4px rgba(0,0,0,0.02), 0 12px 40px -12px rgba(0,0,0,0.12)",
      },
      maxWidth: {
        site: "1180px",
        prose: "680px",
      },
    },
  },
  plugins: [],
};

export default config;

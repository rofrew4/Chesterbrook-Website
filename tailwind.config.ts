import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        widget: "rgb(var(--widget) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        secondary: "#5A6068",
        ink: "#15171A",
        graphite: "#5A6068",
        accent: "#7B1E3A",
        "accent-dark": "#5c1529",
        muted: "#5A6068",
        data: "#2B4C7E",
        border: "rgb(var(--border) / <alpha-value>)",
        "surface-border": "rgb(var(--surface-border) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "footer-border": "rgb(var(--footer-border) / <alpha-value>)",
        footer: "#5A6068",
      },
      fontFamily: {
        display: ["var(--font-archivo)", "system-ui", "sans-serif"],
        sans: ["var(--font-archivo)", "system-ui", "sans-serif"],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "SF Mono",
          "Menlo",
          "Consolas",
          "monospace",
        ],
      },
      fontSize: {
        display: [
          "clamp(3.5rem, 8vw, 7rem)",
          { lineHeight: "1.0", letterSpacing: "-0.03em" },
        ],
        headline: [
          "clamp(2rem, 4.5vw, 3.25rem)",
          { lineHeight: "1.05", letterSpacing: "-0.025em" },
        ],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      boxShadow: {
        mockup: "0 4px 24px -4px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04)",
      },
    },
  },
  plugins: [],
};

export default config;

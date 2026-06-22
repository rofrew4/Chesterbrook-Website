import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        widget: "rgb(var(--widget) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        secondary: "#1a1a1a",
        accent: "#7B1E3A",
        "accent-dark": "#5c1529",
        muted: "#1a1a1a",
        border: "rgb(var(--border) / <alpha-value>)",
        "surface-border": "rgb(var(--surface-border) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        "footer-border": "rgb(var(--footer-border) / <alpha-value>)",
        footer: "#1a1a1a",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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

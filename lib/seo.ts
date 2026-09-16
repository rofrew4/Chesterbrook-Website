/** Canonical production URL — used for sitemap, Open Graph, and JSON-LD. */
export const SITE_URL = "https://chesterbrookai.com";

export const SITE_NAME = "Chesterbrook AI";

export const SITE_DESCRIPTION =
  "Chesterbrook AI builds AI-powered workflows for commercial real estate — deal sourcing, lease abstraction, and custom software for property managers, brokers, and developers.";

/** Paste the code from Google Search Console → HTML tag method → Vercel env var. */
export function getGoogleSiteVerification(): string | undefined {
  const code = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  return code || undefined;
}

/** Canonical production URL — used for sitemap, Open Graph, and JSON-LD. */
export const SITE_URL = "https://chesterbrookai.com";

export const SITE_NAME = "Chesterbrook AI";

export const SITE_DESCRIPTION =
  "Chesterbrook AI is the AI engineering team for commercial real estate firms. We take AI projects off your plate, connect your tech stack to one firm brain, and replace costly software with tools you own.";

/** Paste the code from Google Search Console → HTML tag method → Vercel env var. */
export function getGoogleSiteVerification(): string | undefined {
  const code = process.env.GOOGLE_SITE_VERIFICATION?.trim();
  return code || undefined;
}

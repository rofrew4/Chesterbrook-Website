import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import PostHogProvider from "@/components/analytics/PostHogProvider";
import RB2BScript from "@/components/analytics/RB2BScript";
import { RevealScript } from "@/components/Reveal";
import {
  getGoogleSiteVerification,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

// SF Pro is used on Apple devices via the system stack; Inter stands in
// everywhere else.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

const googleVerification = getGoogleSiteVerification();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — The AI Engineering Team for Commercial Real Estate`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  ...(googleVerification
    ? { verification: { google: googleVerification } }
    : {}),
  openGraph: {
    title: `${SITE_NAME} — The AI Engineering Team for Commercial Real Estate`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — The AI Engineering Team for Commercial Real Estate`,
    description: SITE_DESCRIPTION,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="overflow-x-clip">
        <OrganizationJsonLd />
        <PostHogProvider>{children}</PostHogProvider>
        <RevealScript />
        <RB2BScript />
      </body>
    </html>
  );
}

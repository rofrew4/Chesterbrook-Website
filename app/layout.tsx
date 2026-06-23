import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import {
  getGoogleSiteVerification,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-inter",
  display: "swap",
});

const googleVerification = getGoogleSiteVerification();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — AI Strategy & Deployment for CRE`,
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
    title: `${SITE_NAME} — AI Strategy & Deployment for CRE`,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — AI Strategy & Deployment for CRE`,
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
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="overflow-x-hidden">
        <OrganizationJsonLd />
        {children}
      </body>
    </html>
  );
}

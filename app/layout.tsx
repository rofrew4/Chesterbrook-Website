import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://chesterbrookai.com"),
  title: "Chesterbrook — AI Strategy & Deployment",
  description:
    "Chesterbrook designs and deploys AI infrastructure for real estate, logistics, and asset-heavy enterprises. From opportunity assessment to production deployment.",
  openGraph: {
    title: "Chesterbrook — AI Strategy & Deployment",
    description:
      "Intelligence systems for the operators of physical assets.",
    siteName: "Chesterbrook",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chesterbrook — AI Strategy & Deployment",
    description:
      "Intelligence systems for the operators of physical assets.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/seo";

export const metadata: Metadata = {
  // An explicit template here, rather than a bare string, so posts under
  // /blog/[slug] inherit the brand suffix too.
  title: {
    default: "Insights",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Practical guides on CRE public data, software renewals, and AI adoption for property managers, brokers, and developers.",
  openGraph: {
    title: "Chesterbrook AI Insights — CRE Data, Software & AI",
    description:
      "Practical guides on CRE public data, software renewals, and AI adoption.",
    type: "website",
  },
  alternates: {
    canonical: "/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guides on CRE public data, software renewals, and AI adoption for property managers, brokers, and developers.",
  openGraph: {
    title: "Chesterbrook Insights — CRE Data, Software & AI",
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

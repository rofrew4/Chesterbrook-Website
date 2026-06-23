import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionStrategy from "@/components/SectionStrategy";
import SectionProjectExamples from "@/components/SectionProjectExamples";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";
import HashScrollOnLoad from "@/components/HashScrollOnLoad";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: `${SITE_NAME} — AI for Property Management & CRE`,
  description: SITE_DESCRIPTION,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — AI for Property Management & CRE`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
};

export default function Home() {
  return (
    <>
      <HashScrollOnLoad />
      <Nav />
      <main>
        <Hero />
        <SectionStrategy />
        <SectionProjectExamples />
        <SectionContact />
      </main>
      <Footer />
    </>
  );
}

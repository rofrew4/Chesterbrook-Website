import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import SectionStrategy from "@/components/SectionStrategy";
import SectionProjectExamples from "@/components/SectionProjectExamples";
import SectionContact from "@/components/SectionContact";
import Footer from "@/components/Footer";
import HashScrollOnLoad from "@/components/HashScrollOnLoad";

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

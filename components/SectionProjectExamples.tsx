import FadeIn from "./FadeIn";
import ZigzagRow from "./ui/ZigzagRow";
import { projectExamples } from "@/lib/content";
import { getMockupFallback } from "@/lib/mockups";

export default function SectionProjectExamples() {
  return (
    <section id="examples" className="scroll-mt-nav border-t border-border">
      <div className="bg-accent-dark py-12 md:py-14">
        <div className="mx-auto max-w-[1200px] px-6 text-center md:px-10">
          <FadeIn>
            <h2 className="font-display text-headline text-white">
              Common projects
            </h2>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10">
        {projectExamples.map((item) => (
          <ZigzagRow
            key={item.id}
            tag={item.tag}
            title={item.title}
            description={item.description}
            mockupSrc={item.mockupSrc}
            mockupAlt={item.mockupAlt}
            fallback={getMockupFallback(item.id)}
          />
        ))}
      </div>
    </section>
  );
}

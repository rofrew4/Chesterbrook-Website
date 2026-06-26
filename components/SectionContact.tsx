import FadeIn from "./FadeIn";
import { CALENDLY_URL } from "@/lib/links";

export default function SectionContact() {
  return (
    <section
      id="contact"
      className="scroll-mt-nav border-t border-border bg-surface/30"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-10 md:py-36">
        <div className="max-w-xl">
          <FadeIn>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-6 font-display text-headline text-foreground">
              Start a conversation.
            </h2>
            <p className="mt-6 max-w-[400px] text-[16px] leading-relaxed text-secondary">
              Tell us about the workflow that&apos;s eating your week. We&apos;ll
              scope a diagnostic or point you in the right direction.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-10 inline-block"
            >
              Book a consult
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

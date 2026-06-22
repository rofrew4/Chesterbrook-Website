import FadeIn from "./FadeIn";
import { CALENDLY_URL } from "@/lib/links";

export default function SectionContact() {
  return (
    <section
      id="contact"
      className="scroll-mt-nav border-t border-border bg-surface/30"
    >
      <div className="mx-auto max-w-[1200px] px-6 py-28 md:px-10 md:py-36">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <FadeIn>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-6 font-display text-headline text-foreground">
                Start a conversation.
              </h2>
              <p className="mt-6 max-w-[400px] text-[16px] leading-relaxed text-secondary">
                Tell us about the workflow that&apos;s eating your week. We&apos;ll
                scope a diagnostic or point you in the right direction.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.1}>
            <div className="rounded-lg border border-border bg-background p-8 md:p-10">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block w-full text-center"
              >
                Book a consult
              </a>

              <div className="mt-10 space-y-4 border-t border-border pt-10">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    Email
                  </p>
                  <a
                    href="mailto:rofrew4@gmail.com"
                    className="mt-2 block text-[16px] text-foreground transition-colors hover:text-accent"
                  >
                    rofrew4@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-muted">
                    Phone
                  </p>
                  <a
                    href="tel:+15712633755"
                    className="mt-2 block text-[16px] text-foreground transition-colors hover:text-accent"
                  >
                    571-263-3755
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

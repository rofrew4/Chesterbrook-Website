import { CALENDLY_URL, CONTACT_EMAIL } from "@/lib/links";
import Reveal from "./Reveal";

type Props = {
  title?: string;
  body?: string;
};

export default function CtaBand({
  title = "What’s on your AI wishlist?",
  body = "Hand it to us on a 30-minute call.",
}: Props) {
  return (
    <section className="bg-background py-28 md:py-40">
      <Reveal className="container-site text-center">
        <h2 className="mx-auto max-w-[16ch] text-display text-foreground">{title}</h2>
        <p className="mx-auto mt-5 max-w-[40ch] text-lead text-secondary">{body}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book a call
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="link-chevron">
            <span className="link-label">Or email us</span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

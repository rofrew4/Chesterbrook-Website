import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_TEL,
} from "@/lib/links";

export default function Footer() {
  return (
    <footer className="border-t border-footer-border">
      <div className="mx-auto max-w-[1200px] px-6 py-8 md:px-10">
        <div className="flex flex-col gap-3 text-[12px] text-footer sm:flex-row sm:items-center sm:justify-between">
          <p>Old Chesterbrook LLC · McLean, Virginia</p>
          <p>© 2026 Chesterbrook</p>
        </div>
        <p className="mt-4 text-[12px] text-footer">
          Contact:{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="transition-colors hover:text-foreground"
          >
            {CONTACT_EMAIL}
          </a>
          {" · "}
          <a
            href={`tel:${CONTACT_PHONE_TEL}`}
            className="transition-colors hover:text-foreground"
          >
            {CONTACT_PHONE}
          </a>
        </p>
      </div>
    </footer>
  );
}

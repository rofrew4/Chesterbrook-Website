import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/seo";

export default function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    email: "rofrew4@gmail.com",
    telephone: "+1-571-263-3755",
    address: {
      "@type": "PostalAddress",
      addressLocality: "McLean",
      addressRegion: "VA",
      addressCountry: "US",
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

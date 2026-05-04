const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://calculs-sante.fr";

interface MedicalWebPageSchemaOptions {
  title: string;
  description: string;
  url: string;
  /** ISO date string e.g. "2025-05-01" */
  dateModified?: string;
}

export function generateMedicalWebPageSchema({
  title,
  description,
  url,
  dateModified,
}: MedicalWebPageSchemaOptions): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: title,
    description,
    url: `${siteUrl}${url}`,
    inLanguage: "fr-FR",
    isPartOf: {
      "@type": "WebSite",
      name: "Calculs Santé",
      url: siteUrl,
    },
    audience: {
      "@type": "MedicalAudience",
      audienceType: "Patient",
    },
    ...(dateModified ? { dateModified } : {}),
    // Mandatory disclaimer for health tools
    disclaimer:
      "Les informations fournies sont à titre indicatif uniquement et ne constituent pas un avis médical professionnel.",
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(items: FAQItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

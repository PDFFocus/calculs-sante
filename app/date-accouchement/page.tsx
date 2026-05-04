import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import GrossesseCalculateur from "@/components/calculateurs/GrossesseCalculateur";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Calculateur Date d'Accouchement | calculs-sante.fr",
  },
  description:
    "Calculez la date prévue d'accouchement (DPA) à partir de vos dernières règles (règle de Naegele). Semaines de grossesse et trimestre affichés. Gratuit.",
  alternates: {
    canonical: "https://calculs-sante.fr/date-accouchement/",
  },
  openGraph: {
    title: "Calculateur Date d'Accouchement | calculs-sante.fr",
    description:
      "Estimez votre date prévue d'accouchement selon la règle de Naegele. Résultat immédiat avec semaines de grossesse.",
    url: "https://calculs-sante.fr/date-accouchement/",
    type: "website",
  },
};

const medicalSchema = generateMedicalWebPageSchema({
  title: "Calculateur Date d'Accouchement",
  description:
    "Estimez la date prévue d'accouchement (DPA) à partir de la date des dernières règles selon la règle de Naegele.",
  url: "/date-accouchement/",
  dateModified: "2024-11-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Comment calculer la date d'accouchement ?",
    answer:
      "La méthode la plus utilisée est la règle de Naegele : Date Prévue d'Accouchement (DPA) = Date des Dernières Règles (DDR) + 280 jours (soit 9 mois et 7 jours). Si votre cycle est différent de 28 jours, on ajuste : DPA += (durée du cycle − 28) jours.",
  },
  {
    question: "La date d'accouchement est-elle exacte à 100% ?",
    answer:
      "Non, le terme calculé est une estimation. Seulement 4% des bébés naissent exactement à la date prévue. La majorité des naissances surviennent entre la 37e et la 42e semaine d'aménorrhée.",
  },
  {
    question: "Qu'est-ce que la date des dernières règles (DDR) ?",
    answer:
      "La DDR est le premier jour de vos dernières règles. C'est la date de référence pour calculer l'âge gestationnel et la date prévue d'accouchement.",
  },
  {
    question: "Que sont les semaines d'aménorrhée (SA) ?",
    answer:
      "Les semaines d'aménorrhée (SA) comptent à partir du premier jour des dernières règles. La grossesse dure en moyenne 41 SA. Une naissance entre 37 et 42 SA est considérée comme à terme.",
  },
  {
    question: "Comment ajuster le calcul si mon cycle n'est pas de 28 jours ?",
    answer:
      "Pour un cycle de 32 jours, on ajoute 4 jours au terme calculé (32 − 28 = +4). Pour un cycle de 25 jours, on soustrait 3 jours. Notre calculateur effectue cet ajustement automatiquement.",
  },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [medicalSchema, faqSchema],
};

export default function DateAccouchementPage() {
  return (
    <CalculatorShell
      title="Calculateur Date d'Accouchement"
      description="Estimez votre date prévue d'accouchement (DPA) à partir de la date de vos dernières règles. Calcul selon la règle de Naegele avec ajustement cycle."
      jsonLd={combinedSchema}
    >
      <GrossesseCalculateur />
    </CalculatorShell>
  );
}

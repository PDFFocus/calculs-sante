import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import SemainesGrossesseCalculateur from "@/components/calculateurs/SemainesGrossesseCalculateur";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Calculateur semaines de grossesse — SA, trimestre et terme | calculs-sante.fr",
  },
  description:
    "Calculez votre nombre de semaines d'aménorrhée (SA), votre trimestre et la date de terme estimée à partir de la DDR ou de la date de conception.",
  alternates: {
    canonical: "https://calculs-sante.fr/calculateur-semaines-grossesse/",
  },
  openGraph: {
    title: "Calculateur semaines de grossesse — SA, trimestre et terme | calculs-sante.fr",
    description:
      "Connaissez votre avancement de grossesse en SA, votre trimestre et la date de terme estimée grâce à la règle de Naegele.",
    url: "https://calculs-sante.fr/calculateur-semaines-grossesse/",
    type: "website",
  },
};

const medicalSchema = generateMedicalWebPageSchema({
  title: "Calculateur semaines de grossesse — SA, trimestre et terme",
  description:
    "Calculez vos semaines d'aménorrhée (SA), votre trimestre de grossesse et la date de terme estimée selon la règle de Naegele.",
  url: "/calculateur-semaines-grossesse/",
  dateModified: "2025-05-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Qu'est-ce qu'une semaine d'aménorrhée (SA) ?",
    answer:
      "Les semaines d'aménorrhée (SA) comptent le temps de grossesse à partir du premier jour des dernières règles. Une grossesse dure environ 40 SA, même si la conception a lieu vers la 2e SA. C'est l'unité de référence utilisée par les médecins en France.",
  },
  {
    question: "Comment calculer les semaines de grossesse ?",
    answer:
      "Comptez le nombre de jours entre le premier jour de vos dernières règles (DDR) et aujourd'hui, puis divisez par 7. Par exemple, si vos dernières règles ont commencé il y a 63 jours, vous êtes à 9 SA.",
  },
  {
    question: "Quelle est la différence entre SA et semaines de grossesse ?",
    answer:
      "En France, on utilise les semaines d'aménorrhée (SA), comptées depuis les dernières règles. Dans d'autres pays, les semaines de grossesse comptent depuis la conception (environ 2 semaines après les règles). 10 SA = 8 semaines de grossesse.",
  },
  {
    question: "Comment savoir dans quel trimestre je suis ?",
    answer:
      "Le 1er trimestre va de la SA 1 à la SA 14, le 2e trimestre de la SA 15 à la SA 28, et le 3e trimestre de la SA 29 jusqu'au terme (SA 40–42). Notre calculateur identifie automatiquement votre trimestre.",
  },
  {
    question: "Quelle est la différence avec le calculateur de date d'accouchement ?",
    answer:
      "Le calculateur de date d'accouchement calcule uniquement la date prévue du terme. Ce calculateur affiche en plus le nombre exact de SA au jour d'aujourd'hui, le trimestre en cours et la progression visuelle de la grossesse.",
  },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [medicalSchema, faqSchema],
};

export default function CalculateurSemainesGrossessePage() {
  return (
    <CalculatorShell
      title="Calculateur semaines de grossesse — SA, trimestre et terme"
      description="Calculez votre avancement de grossesse en semaines d'aménorrhée (SA), identifiez votre trimestre et estimez votre date de terme grâce à la règle de Naegele."
      jsonLd={combinedSchema}
    >
      <SemainesGrossesseCalculateur />
    </CalculatorShell>
  );
}

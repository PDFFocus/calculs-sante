import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import GlycemieCalculateur from "@/components/calculateurs/GlycemieCalculateur";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Calculateur de glycémie en ligne — Conversion mmol/L et mg/dL | calculs-sante.fr",
  },
  description:
    "Calculez et convertissez votre glycémie entre mmol/L et mg/dL. Interprétation médicale : normal, prédiabète, diabète. À jeun ou post-prandial.",
  alternates: {
    canonical: "https://calculs-sante.fr/calculateur-glycemie/",
  },
  openGraph: {
    title: "Calculateur de glycémie — Conversion mmol/L et mg/dL | calculs-sante.fr",
    description:
      "Convertissez votre glycémie entre mmol/L et mg/dL et obtenez une interprétation médicale immédiate.",
    url: "https://calculs-sante.fr/calculateur-glycemie/",
    type: "website",
  },
};

const medicalSchema = generateMedicalWebPageSchema({
  title: "Calculateur de glycémie — Conversion mmol/L et mg/dL",
  description:
    "Convertissez votre glycémie entre mmol/L et mg/dL et interprétez votre résultat (normal, prédiabète, diabète).",
  url: "/calculateur-glycemie/",
  dateModified: "2025-05-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Quelle est la glycémie normale à jeun ?",
    answer:
      "La glycémie normale à jeun est comprise entre 3,9 et 6,0 mmol/L (70–108 mg/dL). Une valeur entre 6,1 et 6,9 mmol/L indique un prédiabète, et une valeur ≥ 7,0 mmol/L est le critère diagnostic du diabète.",
  },
  {
    question: "Comment convertir mmol/L en mg/dL ?",
    answer:
      "Pour convertir mmol/L en mg/dL, multipliez par 18,0182. Par exemple, 5,5 mmol/L = 5,5 × 18,0182 ≈ 99 mg/dL. Pour l'inverse, divisez mg/dL par 18,0182.",
  },
  {
    question: "Quelle est la glycémie normale 2 heures après un repas ?",
    answer:
      "Une glycémie post-prandiale normale est inférieure à 7,8 mmol/L (140 mg/dL) 2 heures après un repas. Entre 7,8 et 11,0 mmol/L : intolérance au glucose (prédiabète). Au-delà de 11,1 mmol/L : diabète probable.",
  },
  {
    question: "Quels sont les symptômes d'une hyperglycémie ?",
    answer:
      "Les symptômes d'une hyperglycémie incluent une soif intense, des mictions fréquentes, une fatigue inhabituelle, une vision floue et des plaies qui cicatrisent lentement. Consultez un médecin si vous présentez ces symptômes.",
  },
  {
    question: "À quelle fréquence faut-il mesurer sa glycémie ?",
    answer:
      "La fréquence dépend de votre situation. Les personnes diabétiques insulino-traitées mesurent leur glycémie plusieurs fois par jour. Pour le dépistage, un bilan sanguin annuel suffit généralement si vous n'avez pas de facteur de risque.",
  },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [medicalSchema, faqSchema],
};

export default function CalculateurGlycemiePage() {
  return (
    <CalculatorShell
      title="Calculateur de glycémie — Conversion mmol/L et mg/dL"
      description="Saisissez votre valeur de glycémie pour obtenir la conversion entre mmol/L et mg/dL, ainsi qu'une interprétation médicale selon votre contexte (à jeun ou post-prandial)."
      jsonLd={combinedSchema}
    >
      <GlycemieCalculateur />
    </CalculatorShell>
  );
}

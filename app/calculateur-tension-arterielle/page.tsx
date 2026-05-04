import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import TensionCalculateur from "@/components/calculateurs/TensionCalculateur";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Calculateur tension artérielle — Classification HTA | calculs-sante.fr",
  },
  description:
    "Analysez votre tension artérielle selon la classification ESC 2018. Identifiez votre catégorie : optimale, normale, normale haute ou HTA grade 1–3.",
  alternates: {
    canonical: "https://calculs-sante.fr/calculateur-tension-arterielle/",
  },
  openGraph: {
    title: "Calculateur tension artérielle — Classification HTA | calculs-sante.fr",
    description:
      "Entrez vos valeurs systolique et diastolique pour obtenir votre classification ESC 2018 et savoir quand consulter.",
    url: "https://calculs-sante.fr/calculateur-tension-arterielle/",
    type: "website",
  },
};

const medicalSchema = generateMedicalWebPageSchema({
  title: "Calculateur tension artérielle — Classification HTA ESC 2018",
  description:
    "Analysez votre tension artérielle selon la classification ESC/ESH 2018 : optimale, normale, normale haute, HTA grade 1–3.",
  url: "/calculateur-tension-arterielle/",
  dateModified: "2025-05-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Quelle est la tension artérielle normale ?",
    answer:
      "Selon la classification ESC 2018, une tension artérielle normale est inférieure à 130/85 mmHg. La tension optimale est inférieure à 120/80 mmHg. Au-delà de 140/90 mmHg, on parle d'hypertension artérielle (HTA).",
  },
  {
    question: "Qu'est-ce que la pression systolique et diastolique ?",
    answer:
      "La pression systolique (chiffre du haut) mesure la pression dans les artères lors de la contraction du cœur. La pression diastolique (chiffre du bas) mesure la pression lors du repos entre deux battements. Une tension normale s'écrit 120/80 mmHg.",
  },
  {
    question: "Quels sont les symptômes de l'hypertension artérielle ?",
    answer:
      "L'hypertension est souvent asymptomatique, d'où son surnom de « tueur silencieux ». Dans les cas sévères, on peut observer des maux de tête, des vertiges, des bourdonnements d'oreilles ou des troubles visuels. Un suivi médical régulier est essentiel.",
  },
  {
    question: "Comment faire baisser sa tension artérielle naturellement ?",
    answer:
      "Plusieurs mesures peuvent aider : réduire le sel (< 5 g/jour), pratiquer une activité physique régulière, maintenir un poids santé, limiter l'alcool, éviter le tabac et gérer le stress. Ces mesures complètent un traitement médical si nécessaire.",
  },
  {
    question: "À quelle fréquence faut-il mesurer sa tension artérielle ?",
    answer:
      "Pour les personnes sans hypertension connue, une mesure annuelle lors du bilan médical est recommandée. En cas d'hypertension traitée, les recommandations varient selon votre médecin, généralement tous les 3 à 6 mois.",
  },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [medicalSchema, faqSchema],
};

export default function CalculateurTensionPage() {
  return (
    <CalculatorShell
      title="Calculateur tension artérielle — Classification HTA"
      description="Entrez vos valeurs de pression systolique et diastolique pour obtenir votre classification selon les recommandations ESC/ESH 2018 et savoir quand consulter un médecin."
      jsonLd={combinedSchema}
    >
      <TensionCalculateur />
    </CalculatorShell>
  );
}

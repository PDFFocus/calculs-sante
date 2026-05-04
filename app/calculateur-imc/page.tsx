import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import IMCCalculateur from "@/components/calculateurs/IMCCalculateur";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Calculateur IMC gratuit en ligne 2024 | calculs-sante.fr",
  },
  description:
    "Calculez votre IMC (Indice de Masse Corporelle) gratuitement. Résultat immédiat avec catégorie OMS et barre visuelle. Poids, taille, interprétation.",
  alternates: {
    canonical: "https://calculs-sante.fr/calculateur-imc/",
  },
  openGraph: {
    title: "Calculateur IMC gratuit en ligne | calculs-sante.fr",
    description:
      "Calculez votre Indice de Masse Corporelle en quelques secondes. Interprétation OMS incluse.",
    url: "https://calculs-sante.fr/calculateur-imc/",
    type: "website",
  },
};

const medicalSchema = generateMedicalWebPageSchema({
  title: "Calculateur IMC — Indice de Masse Corporelle",
  description:
    "Calculez votre Indice de Masse Corporelle (IMC) gratuitement avec la formule OMS. Résultat immédiat.",
  url: "/calculateur-imc/",
  dateModified: "2024-11-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Comment calculer l'IMC ?",
    answer:
      "L'IMC se calcule en divisant le poids (en kg) par le carré de la taille (en mètres) : IMC = poids / taille². Par exemple, pour 70 kg et 1,75 m : IMC = 70 / (1,75²) = 22,9.",
  },
  {
    question: "Quelle est la plage normale de l'IMC selon l'OMS ?",
    answer:
      "Selon l'Organisation Mondiale de la Santé, un IMC entre 18,5 et 24,9 est considéré comme normal. En dessous de 18,5 : dénutrition. Entre 25 et 29,9 : surpoids. Au-delà de 30 : obésité.",
  },
  {
    question: "L'IMC est-il fiable pour tout le monde ?",
    answer:
      "L'IMC est un indicateur simple mais il présente des limites : il ne différencie pas la masse musculaire de la masse graisseuse, et peut être imprécis pour les sportifs, les personnes âgées ou les enfants.",
  },
  {
    question: "Quel IMC correspond au surpoids ?",
    answer:
      "Un IMC supérieur ou égal à 25 kg/m² est considéré comme du surpoids. L'obésité commence à partir d'un IMC de 30 kg/m².",
  },
  {
    question: "Comment interpréter un IMC bas ?",
    answer:
      "Un IMC inférieur à 18,5 indique une insuffisance pondérale (dénutrition). Il est recommandé de consulter un médecin ou un nutritionniste pour évaluer et corriger cet état.",
  },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [medicalSchema, faqSchema],
};

export default function CalculateurIMCPage() {
  return (
    <CalculatorShell
      title="Calculateur IMC — Indice de Masse Corporelle"
      description="Calculez votre Indice de Masse Corporelle (IMC) en renseignant votre taille et votre poids. Interprétation OMS immédiate."
      jsonLd={combinedSchema}
    >
      <IMCCalculateur />
    </CalculatorShell>
  );
}

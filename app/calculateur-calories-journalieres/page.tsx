import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import CaloriesCalculateur from "@/components/calculateurs/CaloriesCalculateur";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Calcul Calories Journalières TDEE | calculs-sante.fr",
  },
  description:
    "Calculez vos besoins caloriques journaliers (TDEE) selon votre âge, taille, poids et niveau d'activité. Répartition macronutriments incluse. Gratuit.",
  alternates: {
    canonical: "https://calculs-sante.fr/calculateur-calories-journalieres/",
  },
  openGraph: {
    title: "Calcul Calories Journalières TDEE | calculs-sante.fr",
    description:
      "Estimez vos besoins caloriques quotidiens et la répartition macros selon votre profil.",
    url: "https://calculs-sante.fr/calculateur-calories-journalieres/",
    type: "website",
  },
};

const medicalSchema = generateMedicalWebPageSchema({
  title: "Calculateur Calories Journalières (TDEE)",
  description:
    "Calculez vos besoins caloriques quotidiens selon votre âge, taille, poids et niveau d'activité physique.",
  url: "/calculateur-calories-journalieres/",
  dateModified: "2024-11-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Qu'est-ce que le TDEE ?",
    answer:
      "Le TDEE (Total Daily Energy Expenditure) est le total de calories que vous brûlez en une journée, en tenant compte de votre niveau d'activité physique. Il se calcule en multipliant votre BMR (métabolisme de base) par un coefficient d'activité.",
  },
  {
    question: "Comment calculer ses besoins caloriques journaliers ?",
    answer:
      "TDEE = BMR × coefficient d'activité. Exemples de coefficients : sédentaire = 1,2 ; légèrement actif = 1,375 ; modérément actif = 1,55 ; très actif = 1,725 ; extrêmement actif = 1,9.",
  },
  {
    question: "Combien de calories par jour pour perdre du poids ?",
    answer:
      "Pour perdre du poids, un déficit de 500 kcal/jour par rapport à votre TDEE est généralement recommandé, ce qui représente environ 0,5 kg de perte par semaine. Ne descendez pas en dessous de 1 200 kcal/jour sans suivi médical.",
  },
  {
    question: "Quelle est la répartition idéale des macronutriments ?",
    answer:
      "Une répartition équilibrée couramment recommandée est : glucides 50%, protéines 20%, lipides 30%. Ces proportions peuvent varier selon vos objectifs (prise de masse, perte de poids, performance sportive).",
  },
  {
    question: "Le TDEE est-il différent pour les hommes et les femmes ?",
    answer:
      "Oui, le TDEE varie selon le sexe car le BMR est différent. Les hommes ont généralement un BMR plus élevé du fait d'une masse musculaire plus importante. La formule Mifflin-St Jeor intègre cette différence.",
  },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [medicalSchema, faqSchema],
};

export default function CaloriesJournalieresPage() {
  return (
    <CalculatorShell
      title="Calculateur Calories Journalières (TDEE)"
      description="Estimez vos besoins caloriques quotidiens selon votre âge, taille, poids et niveau d'activité. Répartition macronutriments incluse."
      jsonLd={combinedSchema}
    >
      <CaloriesCalculateur />
    </CalculatorShell>
  );
}

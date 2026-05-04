import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import BMRCalculateur from "@/components/calculateurs/BMRCalculateur";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Calculateur Métabolisme de Base (BMR) | calculs-sante.fr",
  },
  description:
    "Calculez votre métabolisme de base (BMR) avec la formule Mifflin-St Jeor. Résultat en kcal/jour selon votre sexe, âge, taille et poids. Gratuit.",
  alternates: {
    canonical: "https://calculs-sante.fr/calculateur-metabolisme-de-base/",
  },
  openGraph: {
    title: "Calculateur Métabolisme de Base (BMR) | calculs-sante.fr",
    description:
      "Estimez vos dépenses énergétiques au repos avec la formule Mifflin-St Jeor. Calcul immédiat.",
    url: "https://calculs-sante.fr/calculateur-metabolisme-de-base/",
    type: "website",
  },
};

const medicalSchema = generateMedicalWebPageSchema({
  title: "Calculateur Métabolisme de Base (BMR)",
  description:
    "Estimez votre dépense énergétique au repos (BMR) avec la formule Mifflin-St Jeor. Résultat en kcal/jour.",
  url: "/calculateur-metabolisme-de-base/",
  dateModified: "2024-11-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Qu'est-ce que le métabolisme de base (BMR) ?",
    answer:
      "Le métabolisme de base (BMR, Basal Metabolic Rate) est la quantité d'énergie (en kcal) que votre corps dépense au repos complet pour maintenir ses fonctions vitales : respiration, circulation sanguine, température corporelle.",
  },
  {
    question: "Quelle formule est utilisée pour calculer le BMR ?",
    answer:
      "Nous utilisons la formule Mifflin-St Jeor (1990), considérée comme la plus précise. Homme : 10×poids + 6,25×taille − 5×âge + 5. Femme : 10×poids + 6,25×taille − 5×âge − 161.",
  },
  {
    question: "Quelle est la différence entre le BMR et le TDEE ?",
    answer:
      "Le BMR est la dépense énergétique au repos. Le TDEE (Total Daily Energy Expenditure) est le BMR multiplié par un coefficient d'activité physique — c'est votre besoin calorique réel pour la journée.",
  },
  {
    question: "Comment utiliser le BMR pour perdre du poids ?",
    answer:
      "Pour perdre du poids, il faut consommer moins de calories que votre TDEE. Un déficit de 500 kcal/jour entraîne généralement une perte d'environ 0,5 kg par semaine. Consultez un professionnel de santé avant tout régime.",
  },
  {
    question: "Le BMR change-t-il avec l'âge ?",
    answer:
      "Oui, le métabolisme de base diminue avec l'âge, en partie à cause de la perte de masse musculaire. L'activité physique régulière et une alimentation riche en protéines peuvent ralentir cette baisse.",
  },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [medicalSchema, faqSchema],
};

export default function MetabolismeDeBasePage() {
  return (
    <CalculatorShell
      title="Calculateur Métabolisme de Base (BMR)"
      description="Estimez votre dépense énergétique au repos avec la formule Mifflin-St Jeor. Résultat en kcal/jour."
      jsonLd={combinedSchema}
    >
      <BMRCalculateur />
    </CalculatorShell>
  );
}

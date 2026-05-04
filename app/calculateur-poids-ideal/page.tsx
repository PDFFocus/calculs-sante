import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import PoidsIdealCalculateur from "@/components/calculateurs/PoidsIdealCalculateur";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Calculateur Poids Idéal : quelle est votre IMC cible ? | calculs-sante.fr",
  },
  description:
    "Calculez votre poids idéal selon la formule de Lorentz, Creff et Monnerot-Dumaine. Tableau comparatif des 3 méthodes. Gratuit et instantané.",
  alternates: {
    canonical: "https://calculs-sante.fr/calculateur-poids-ideal/",
  },
  openGraph: {
    title: "Calculateur Poids Idéal | calculs-sante.fr",
    description:
      "Estimez votre poids idéal selon Lorentz, Creff et Monnerot-Dumaine. Tableau comparatif inclus.",
    url: "https://calculs-sante.fr/calculateur-poids-ideal/",
    type: "website",
  },
};

const medicalSchema = generateMedicalWebPageSchema({
  title: "Calculateur Poids Idéal",
  description:
    "Calculez votre poids idéal selon votre taille et votre sexe (formules de Lorentz, Creff, Monnerot-Dumaine).",
  url: "/calculateur-poids-ideal/",
  dateModified: "2024-11-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Comment calculer son poids idéal ?",
    answer:
      "La formule de Lorentz est la référence : Homme = taille − 100 − (taille − 150) / 4 ; Femme = taille − 100 − (taille − 150) / 2,5. D'autres formules comme Creff ou Monnerot-Dumaine donnent des résultats légèrement différents.",
  },
  {
    question: "Quelle est la différence entre poids idéal et IMC normal ?",
    answer:
      "Le poids idéal est une estimation spécifique à votre morphologie. L'IMC normal (18,5–24,9) définit une plage de poids sain pour une taille donnée. Ces deux notions sont complémentaires.",
  },
  {
    question: "La formule de Lorentz est-elle fiable ?",
    answer:
      "La formule de Lorentz est un outil indicatif simple. Elle ne tient pas compte de la morphologie individuelle ni de la composition corporelle. Elle est toutefois largement utilisée comme référence clinique.",
  },
  {
    question: "Quel est le poids idéal pour une femme de 165 cm ?",
    answer:
      "Selon Lorentz : 165 − 100 − (165 − 150) / 2,5 = 59 kg. C'est une valeur indicative ; la plage normale d'IMC (18,5–24,9) correspond à 50–68 kg pour cette taille.",
  },
  {
    question: "Quel est le poids idéal pour un homme de 180 cm ?",
    answer:
      "Selon Lorentz : 180 − 100 − (180 − 150) / 4 = 72,5 kg. La plage normale d'IMC correspond à 60–81 kg pour un homme de 180 cm.",
  },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [medicalSchema, faqSchema],
};

export default function PoidsIdealPage() {
  return (
    <CalculatorShell
      title="Calculateur Poids Idéal"
      description="Estimez votre poids idéal selon votre taille et votre sexe. Tableau comparatif Lorentz, Creff et Monnerot-Dumaine."
      jsonLd={combinedSchema}
    >
      <PoidsIdealCalculateur />
    </CalculatorShell>
  );
}

import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import { generateMedicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Calculateur Calories Journalières (TDEE)",
  description:
    "Calculez vos besoins caloriques journaliers selon votre niveau d'activité. Basé sur la formule Mifflin-St Jeor.",
  alternates: {
    canonical: "/calculateur-calories-journalieres/",
  },
};

const jsonLd = generateMedicalWebPageSchema({
  title: "Calculateur Calories Journalières",
  description: "Calculez vos besoins caloriques quotidiens selon votre niveau d'activité (TDEE).",
  url: "/calculateur-calories-journalieres/",
});

export default function CaloriesJournalieresPage() {
  return (
    <CalculatorShell
      title="Calculateur Calories Journalières"
      description="Estimez vos besoins caloriques quotidiens (TDEE) selon votre âge, taille, poids et niveau d'activité physique."
      jsonLd={jsonLd}
    >
      <p className="text-gray-500 text-sm">Calculateur en cours de développement.</p>
    </CalculatorShell>
  );
}

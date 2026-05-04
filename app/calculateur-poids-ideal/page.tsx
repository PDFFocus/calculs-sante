import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import { generateMedicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Calculateur Poids Idéal",
  description:
    "Calculez votre poids idéal selon votre taille et votre morphologie. Formule de Lorentz.",
  alternates: {
    canonical: "/calculateur-poids-ideal/",
  },
};

const jsonLd = generateMedicalWebPageSchema({
  title: "Calculateur Poids Idéal",
  description: "Calculez votre poids idéal selon votre taille et votre sexe.",
  url: "/calculateur-poids-ideal/",
});

export default function PoidsIdealPage() {
  return (
    <CalculatorShell
      title="Calculateur Poids Idéal"
      description="Estimez votre poids idéal selon votre taille et votre sexe (formule de Lorentz)."
      jsonLd={jsonLd}
    >
      <p className="text-gray-500 text-sm">Calculateur en cours de développement.</p>
    </CalculatorShell>
  );
}

import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import { generateMedicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Calculateur IMC — Indice de Masse Corporelle",
  description:
    "Calculez votre IMC (Indice de Masse Corporelle) gratuitement. Résultat immédiat avec interprétation OMS.",
  alternates: {
    canonical: "/calculateur-imc/",
  },
};

const jsonLd = generateMedicalWebPageSchema({
  title: "Calculateur IMC",
  description: "Calculez votre Indice de Masse Corporelle (IMC) gratuitement.",
  url: "/calculateur-imc/",
});

export default function CalculateurIMCPage() {
  return (
    <CalculatorShell
      title="Calculateur IMC"
      description="Calculez votre Indice de Masse Corporelle (IMC) en renseignant votre taille et votre poids."
      jsonLd={jsonLd}
    >
      {/* Logique calculateur à implémenter dans une prochaine issue */}
      <p className="text-gray-500 text-sm">Calculateur en cours de développement.</p>
    </CalculatorShell>
  );
}

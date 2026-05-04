import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import { generateMedicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Calculateur Métabolisme de Base (BMR)",
  description:
    "Calculez votre métabolisme de base (BMR) avec la formule Mifflin-St Jeor. Gratuit et instantané.",
  alternates: {
    canonical: "/calculateur-metabolisme-de-base/",
  },
};

const jsonLd = generateMedicalWebPageSchema({
  title: "Calculateur Métabolisme de Base",
  description: "Estimez votre dépense énergétique au repos (BMR) avec la formule Mifflin-St Jeor.",
  url: "/calculateur-metabolisme-de-base/",
});

export default function MetabolismeDeBasePage() {
  return (
    <CalculatorShell
      title="Calculateur Métabolisme de Base (BMR)"
      description="Estimez votre dépense énergétique au repos avec la formule Mifflin-St Jeor."
      jsonLd={jsonLd}
    >
      <p className="text-gray-500 text-sm">Calculateur en cours de développement.</p>
    </CalculatorShell>
  );
}

import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import { generateMedicalWebPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Calculateur Date d'Accouchement (DPA)",
  description:
    "Calculez la date prévue d'accouchement (DPA) à partir de la date de vos dernières règles. Règle de Naegele.",
  alternates: {
    canonical: "/date-accouchement/",
  },
};

const jsonLd = generateMedicalWebPageSchema({
  title: "Calculateur Date d'Accouchement",
  description:
    "Estimez la date prévue d'accouchement (DPA) à partir de la date des dernières règles.",
  url: "/date-accouchement/",
});

export default function DateAccouchementPage() {
  return (
    <CalculatorShell
      title="Calculateur Date d'Accouchement"
      description="Estimez votre date prévue d'accouchement (DPA) à partir de la date de vos dernières règles (règle de Naegele)."
      jsonLd={jsonLd}
    >
      <p className="text-gray-500 text-sm">Calculateur en cours de développement.</p>
    </CalculatorShell>
  );
}

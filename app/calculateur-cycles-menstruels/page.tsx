import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import CyclesCalculateur from "@/components/calculateurs/CyclesCalculateur";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Calculateur de cycles menstruels — Ovulation et règles | calculs-sante.fr",
  },
  description:
    "Calculez vos prochaines règles, la date d'ovulation et la fenêtre fertile sur 3 cycles. Basé sur la date de vos dernières règles.",
  alternates: {
    canonical: "https://calculs-sante.fr/calculateur-cycles-menstruels/",
  },
  openGraph: {
    title: "Calculateur de cycles menstruels — Ovulation et règles | calculs-sante.fr",
    description:
      "Prévoyez vos prochaines règles et votre fenêtre d'ovulation sur 3 cycles. Outil indicatif, ne remplace pas un suivi gynécologique.",
    url: "https://calculs-sante.fr/calculateur-cycles-menstruels/",
    type: "website",
  },
};

const medicalSchema = generateMedicalWebPageSchema({
  title: "Calculateur de cycles menstruels — Ovulation et règles",
  description:
    "Calculez vos prochaines dates de règles, l'ovulation probable et la fenêtre fertile sur les 3 prochains cycles menstruels.",
  url: "/calculateur-cycles-menstruels/",
  dateModified: "2025-05-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Comment calculer la date de ses prochaines règles ?",
    answer:
      "Ajoutez la durée de votre cycle (en général 28 jours) à la date de vos dernières règles. Par exemple, si vos dernières règles ont commencé le 1er mai et que votre cycle dure 28 jours, vos prochaines règles sont attendues vers le 29 mai.",
  },
  {
    question: "Comment calculer la date d'ovulation ?",
    answer:
      "L'ovulation survient généralement 14 jours avant les prochaines règles. Pour un cycle de 28 jours, elle a lieu environ au 14e jour. Pour un cycle de 32 jours, elle survient vers le 18e jour.",
  },
  {
    question: "Qu'est-ce que la fenêtre fertile ?",
    answer:
      "La fenêtre fertile est la période pendant laquelle une grossesse est possible. Elle correspond généralement aux 5 jours avant l'ovulation, au jour de l'ovulation, et au lendemain, soit environ 6 jours au total.",
  },
  {
    question: "Quelle est la durée normale d'un cycle menstruel ?",
    answer:
      "Un cycle menstruel normal dure entre 21 et 35 jours, avec une moyenne de 28 jours. Cette durée peut varier d'un mois à l'autre. Des cycles irréguliers peuvent indiquer un déséquilibre hormonal à explorer avec un gynécologue.",
  },
  {
    question: "Ce calculateur peut-il être utilisé comme contraceptif ?",
    answer:
      "Non. Ce calculateur est un outil indicatif basé sur des cycles théoriques réguliers. Les cycles varient naturellement. La méthode des jours fertiles seule n'est pas une contraception fiable. Consultez un professionnel de santé pour un conseil personnalisé.",
  },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [medicalSchema, faqSchema],
};

export default function CalculateurCyclesPage() {
  return (
    <CalculatorShell
      title="Calculateur de cycles menstruels — Ovulation et règles"
      description="Renseignez la date de vos dernières règles et la durée de votre cycle pour calculer vos prochaines règles, la date d'ovulation et la fenêtre fertile sur 3 cycles."
      jsonLd={combinedSchema}
    >
      <CyclesCalculateur />
    </CalculatorShell>
  );
}

import type { Metadata } from "next";
import CalculatorShell from "@/components/CalculatorShell";
import EauCalculateur from "@/components/calculateurs/EauCalculateur";
import { generateMedicalWebPageSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute:
      "Calculateur de consommation d'eau quotidienne | calculs-sante.fr",
  },
  description:
    "Calculez votre besoin en eau quotidien selon votre poids, votre niveau d'activité physique et la température ambiante. Résultat en litres et en verres.",
  alternates: {
    canonical: "https://calculs-sante.fr/calculateur-consommation-eau/",
  },
  openGraph: {
    title: "Calculateur de consommation d'eau quotidienne | calculs-sante.fr",
    description:
      "Découvrez combien de litres d'eau boire par jour selon votre profil. Calcul personnalisé selon le poids, l'activité et la chaleur.",
    url: "https://calculs-sante.fr/calculateur-consommation-eau/",
    type: "website",
  },
};

const medicalSchema = generateMedicalWebPageSchema({
  title: "Calculateur de consommation d'eau quotidienne",
  description:
    "Calculez votre besoin hydrique journalier en litres selon votre poids, votre niveau d'activité physique et la température ambiante.",
  url: "/calculateur-consommation-eau/",
  dateModified: "2025-05-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Combien de litres d'eau faut-il boire par jour ?",
    answer:
      "Les besoins varient selon le poids, l'activité et la température. La formule de base est : poids (kg) × 35 mL. Pour une personne de 70 kg, cela représente environ 2,5 litres par jour. En cas d'activité intense ou de chaleur, les besoins augmentent.",
  },
  {
    question: "Est-ce que les boissons autres que l'eau comptent ?",
    answer:
      "Oui, toutes les boissons (tisanes, café, jus) et les aliments riches en eau (fruits, légumes) contribuent à l'hydratation. Cependant, les boissons alcoolisées et le café ont un effet diurétique qui peut augmenter les besoins.",
  },
  {
    question: "Comment savoir si je suis suffisamment hydraté ?",
    answer:
      "La couleur des urines est le meilleur indicateur : des urines jaune pâle indiquent une bonne hydratation, des urines foncées signalent un manque d'eau. D'autres signes de déshydratation : bouche sèche, fatigue, maux de tête.",
  },
  {
    question: "Faut-il boire plus d'eau quand il fait chaud ?",
    answer:
      "Oui. Par temps chaud (> 25 °C), notre corps transpire plus pour réguler la température. Il est recommandé d'augmenter son apport en eau d'environ 300 à 500 mL par jour, et davantage en cas d'activité physique.",
  },
  {
    question: "Peut-on boire trop d'eau ?",
    answer:
      "Oui, c'est rare mais possible. Une hyponatrémie (surcharge hydrique) peut survenir lors d'efforts intenses ou chez certains patients. Dans la vie courante, les reins éliminent l'excès. Le calculateur fournit une estimation ; adaptez selon votre ressenti.",
  },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [medicalSchema, faqSchema],
};

export default function CalculateurEauPage() {
  return (
    <CalculatorShell
      title="Calculateur de consommation d'eau quotidienne"
      description="Découvrez combien de litres d'eau vous devriez boire chaque jour en fonction de votre poids, de votre niveau d'activité physique et de la température ambiante."
      jsonLd={combinedSchema}
    >
      <EauCalculateur />
    </CalculatorShell>
  );
}

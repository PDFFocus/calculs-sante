import type { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "FAQ calculateurs santé — IMC, calories, glycémie et plus | calculs-sante.fr",
  },
  description:
    "Toutes vos questions sur nos calculateurs santé : IMC, calories, métabolisme de base, poids idéal, glycémie, tension, grossesse et cycles. Réponses claires et fiables.",
  alternates: {
    canonical: "https://calculs-sante.fr/faq-calculateurs-sante/",
  },
  openGraph: {
    title: "FAQ calculateurs santé — IMC, calories, glycémie et plus",
    description:
      "Réponses aux questions fréquentes sur tous nos calculateurs de santé : IMC, calories, métabolisme de base, poids idéal, glycémie, tension, grossesse et cycles.",
    url: "https://calculs-sante.fr/faq-calculateurs-sante/",
    type: "article",
  },
};

const faqItems = [
  // IMC
  {
    question: "Comment fonctionne le calculateur IMC ?",
    answer:
      "Le calculateur IMC divise votre poids (en kg) par le carré de votre taille (en mètres). Il affiche votre résultat et la catégorie correspondante selon les seuils OMS : insuffisance pondérale, poids normal, surpoids ou obésité.",
    calculator: "/calculateur-imc",
    calculatorName: "Calculateur IMC",
  },
  {
    question: "L'IMC est-il différent pour les hommes et les femmes ?",
    answer:
      "La formule est identique pour les deux sexes. Cependant, les femmes ont naturellement un pourcentage de masse grasse plus élevé pour le même IMC. Certains médecins utilisent des normes légèrement ajustées selon le sexe, mais les seuils OMS officiels s'appliquent à tous.",
    calculator: "/calculateur-imc",
    calculatorName: "Calculateur IMC",
  },
  // Calories
  {
    question: "Que calcule le calculateur de calories journalières ?",
    answer:
      "Il calcule votre TDEE (Total Daily Energy Expenditure) — la quantité de calories que vous brûlez chaque jour en tenant compte de votre métabolisme de base et de votre niveau d'activité physique. C'est la base pour planifier votre alimentation.",
    calculator: "/calculateur-calories-journalieres",
    calculatorName: "Calculateur calories journalières",
  },
  {
    question: "Combien de calories pour maintenir son poids ?",
    answer:
      "Pour maintenir son poids, il faut consommer autant de calories qu'on en dépense (votre TDEE). Pour perdre du poids, consommez 300 à 500 kcal de moins. Pour prendre de la masse, consommez 200 à 300 kcal de plus. Notre calculateur personnalise ces recommandations.",
    calculator: "/calculateur-calories-journalieres",
    calculatorName: "Calculateur calories journalières",
  },
  // Métabolisme de base
  {
    question: "Quelle formule utilise le calculateur de métabolisme de base ?",
    answer:
      "Notre calculateur utilise la formule Mifflin-St Jeor (1990), recommandée par les professionnels de santé pour sa précision. Homme : (10 × poids) + (6,25 × taille) − (5 × âge) + 5. Femme : même formule − 161.",
    calculator: "/calculateur-metabolisme-de-base",
    calculatorName: "Calculateur métabolisme de base",
  },
  {
    question: "Mon métabolisme de base change-t-il avec le temps ?",
    answer:
      "Oui, il diminue progressivement avec l'âge (environ 1 à 2% par décennie après 30 ans) en raison de la perte naturelle de masse musculaire. La musculation régulière est le moyen le plus efficace de maintenir un métabolisme de base élevé.",
    calculator: "/calculateur-metabolisme-de-base",
    calculatorName: "Calculateur métabolisme de base",
  },
  // Poids idéal
  {
    question: "Comment est calculé le poids idéal ?",
    answer:
      "Plusieurs formules existent : Lorentz, Devine, Robinson. Notre calculateur utilise des références validées par taille, sexe et morphologie. Le poids idéal est une fourchette indicative, pas un objectif absolu — votre IMC, votre masse musculaire et votre bien-être comptent autant.",
    calculator: "/calculateur-poids-ideal",
    calculatorName: "Calculateur poids idéal",
  },
  {
    question: "Le poids idéal est-il le même pour tout le monde ?",
    answer:
      "Non. Le poids idéal varie selon la taille, le sexe, la morphologie (ossature) et l'âge. C'est une fourchette de référence, non un objectif absolu. Un sportif musclé peut dépasser le poids idéal théorique tout en étant en excellente santé.",
    calculator: "/calculateur-poids-ideal",
    calculatorName: "Calculateur poids idéal",
  },
  // Glycémie
  {
    question: "Que signifient les résultats du calculateur de glycémie ?",
    answer:
      "Le calculateur de glycémie vous aide à interpréter vos valeurs selon les normes médicales : glycémie à jeun normale : 0,70 à 1,10 g/L. Entre 1,10 et 1,25 g/L : prédiabète. Au-delà de 1,26 g/L : critère diagnostique du diabète (confirmé par 2 mesures). Consultez toujours un médecin pour l'interprétation clinique.",
    calculator: "/calculateur-glycemie",
    calculatorName: "Calculateur glycémie",
  },
  {
    question: "À quelle fréquence surveiller sa glycémie ?",
    answer:
      "Pour une personne sans diabète diagnostiqué, un bilan annuel lors du bilan de santé habituel est suffisant. Pour les personnes diabétiques ou prédiabétiques, la fréquence est définie par le médecin traitant (plusieurs fois par jour pour les diabétiques sous insuline).",
    calculator: "/calculateur-glycemie",
    calculatorName: "Calculateur glycémie",
  },
  // Tension artérielle
  {
    question: "Comment interpréter les résultats de tension artérielle ?",
    answer:
      "Selon l'OMS : Tension normale : systolique < 120 mmHg et diastolique < 80 mmHg. Tension normale haute : 120–139 / 80–89 mmHg. Hypertension légère : 140–159 / 90–99 mmHg. Au-delà : hypertension modérée à sévère. Une seule mesure élevée n'est pas diagnostique — consultez un médecin.",
    calculator: "/calculateur-tension-arterielle",
    calculatorName: "Calculateur tension artérielle",
  },
  {
    question: "Quand prendre sa tension artérielle pour avoir un résultat fiable ?",
    answer:
      "Prenez votre tension après 5 minutes de repos assis, bras au niveau du cœur. Évitez café, tabac et effort physique dans les 30 minutes précédentes. Prenez 3 mesures consécutives et faites la moyenne. Le matin avant les médicaments et le soir sont les moments recommandés.",
    calculator: "/calculateur-tension-arterielle",
    calculatorName: "Calculateur tension artérielle",
  },
  // Consommation eau
  {
    question: "Comment calcule-t-on les besoins en eau quotidiens ?",
    answer:
      "Les besoins varient selon le poids, le niveau d'activité physique et la température ambiante. La règle de base est 35 mL d'eau par kg de poids corporel, augmentée lors d'exercice intense ou de forte chaleur. Notre calculateur personalise cette estimation.",
    calculator: "/calculateur-consommation-eau",
    calculatorName: "Calculateur consommation eau",
  },
  {
    question: "Faut-il vraiment boire 2 litres d'eau par jour ?",
    answer:
      "Les besoins en eau sont individuels et ne correspondent pas systématiquement à 2 litres/jour. Ils dépendent du poids (un adulte de 90 kg a besoin de plus qu'un adulte de 60 kg), de l'activité physique, de la température et de l'alimentation (environ 20% des apports hydriques viennent des aliments).",
    calculator: "/calculateur-consommation-eau",
    calculatorName: "Calculateur consommation eau",
  },
  // Semaines de grossesse
  {
    question: "Comment calculer les semaines d'aménorrhée (SA) ?",
    answer:
      "Soustrayez la date de vos dernières règles (DDR) à la date du jour pour obtenir le nombre de jours, puis divisez par 7. Exemple : 70 jours depuis la DDR = 10 SA. Notre calculateur de semaines de grossesse effectue ce calcul automatiquement et indique aussi votre trimestre.",
    calculator: "/calculateur-semaines-grossesse",
    calculatorName: "Calculateur semaines de grossesse",
  },
  {
    question: "Les SA sont-elles les mêmes que les semaines de grossesse réelles ?",
    answer:
      "Non. Les SA comptent depuis la DDR (dernières règles), les semaines réelles depuis la conception (environ 2 semaines plus tard). Une grossesse = 41 SA = 39 semaines de grossesse réelles. La médecine française utilise les SA pour tous les suivis.",
    calculator: "/calculateur-semaines-grossesse",
    calculatorName: "Calculateur semaines de grossesse",
  },
  // Date d'accouchement
  {
    question: "Comment est calculée la date d'accouchement prévue ?",
    answer:
      "Notre calculateur utilise la règle de Naegele : ajoutez 280 jours (40 semaines) à votre DDR. La date de terme est une estimation — 95% des bébés naissent entre 37 et 42 SA. L'échographie du 1er trimestre affine cette date avec une précision de ±5 jours.",
    calculator: "/date-accouchement",
    calculatorName: "Calculateur date d'accouchement",
  },
  {
    question: "La date d'accouchement est-elle fiable ?",
    answer:
      "C'est une estimation. Seulement 5% des bébés naissent exactement à la date prévue. Un accouchement entre 37 SA et 41 SA + 6 jours est considéré comme normal. Au-delà de 41 SA, un déclenchement est souvent proposé par l'équipe médicale.",
    calculator: "/date-accouchement",
    calculatorName: "Calculateur date d'accouchement",
  },
  // Cycles menstruels
  {
    question: "À quoi sert le calculateur de cycles menstruels ?",
    answer:
      "Il permet d'estimer vos prochaines dates de règles, votre fenêtre d'ovulation et votre période de fertilité maximale en se basant sur la durée moyenne de vos cycles. Utile pour le suivi de fertilité, la contraception naturelle ou simplement anticiper son cycle.",
    calculator: "/calculateur-cycles-menstruels",
    calculatorName: "Calculateur cycles menstruels",
  },
  {
    question: "Le calculateur de cycles peut-il remplacer un test de grossesse ?",
    answer:
      "Non. Le calculateur de cycles est un outil d'estimation basé sur des moyennes statistiques. Il ne peut pas détecter une grossesse. Seul un test de grossesse (urinaire ou sanguin bêta-hCG) peut confirmer une grossesse. Consultez un médecin en cas de doute.",
    calculator: "/calculateur-cycles-menstruels",
    calculatorName: "Calculateur cycles menstruels",
  },
];

const articleSchema = generateArticleSchema({
  title: "FAQ calculateurs santé — Toutes vos questions sur l'IMC, calories, glycémie et plus",
  description:
    "Réponses aux 20 questions les plus fréquentes sur nos 10 calculateurs de santé : IMC, calories journalières, métabolisme de base, poids idéal, glycémie, tension artérielle, consommation d'eau, semaines de grossesse, date d'accouchement et cycles menstruels.",
  url: "/faq-calculateurs-sante/",
  datePublished: "2025-01-01",
  dateModified: "2025-05-01",
});

const faqSchema = generateFAQSchema(faqItems.map(({ question, answer }) => ({ question, answer })));

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "/" },
  { name: "FAQ calculateurs santé", url: "/faq-calculateurs-sante/" },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [articleSchema, faqSchema, breadcrumbSchema],
};

// Group FAQ items by calculator topic
const topics = [
  {
    title: "IMC (Indice de Masse Corporelle)",
    color: "blue",
    items: faqItems.filter((_, i) => i < 2),
  },
  {
    title: "Calories journalières",
    color: "green",
    items: faqItems.filter((_, i) => i >= 2 && i < 4),
  },
  {
    title: "Métabolisme de base",
    color: "purple",
    items: faqItems.filter((_, i) => i >= 4 && i < 6),
  },
  {
    title: "Poids idéal",
    color: "teal",
    items: faqItems.filter((_, i) => i >= 6 && i < 8),
  },
  {
    title: "Glycémie",
    color: "orange",
    items: faqItems.filter((_, i) => i >= 8 && i < 10),
  },
  {
    title: "Tension artérielle",
    color: "red",
    items: faqItems.filter((_, i) => i >= 10 && i < 12),
  },
  {
    title: "Consommation d'eau",
    color: "cyan",
    items: faqItems.filter((_, i) => i >= 12 && i < 14),
  },
  {
    title: "Semaines de grossesse",
    color: "rose",
    items: faqItems.filter((_, i) => i >= 14 && i < 16),
  },
  {
    title: "Date d'accouchement",
    color: "pink",
    items: faqItems.filter((_, i) => i >= 16 && i < 18),
  },
  {
    title: "Cycles menstruels",
    color: "violet",
    items: faqItems.filter((_, i) => i >= 18),
  },
];

export default function FAQCalculateursSantePage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      {/* Fil d'Ariane */}
      <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li aria-hidden="true">›</li>
          <li className="text-gray-900 font-medium">FAQ calculateurs santé</li>
        </ol>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
        FAQ calculateurs santé — Toutes vos questions
      </h1>

      <p className="text-base text-gray-600 leading-relaxed mb-8">
        Retrouvez les réponses aux questions les plus fréquentes sur nos 10 calculateurs de santé gratuits : IMC, calories journalières, métabolisme de base, poids idéal, glycémie, tension artérielle, consommation d&apos;eau, semaines de grossesse, date d&apos;accouchement et cycles menstruels.
      </p>

      {/* Navigation rapide */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-10">
        <p className="font-semibold text-gray-900 mb-3 text-sm">Navigation rapide :</p>
        <div className="flex flex-wrap gap-2">
          {topics.map(({ title, items }) => (
            <Link
              key={title}
              href={items[0].calculator}
              className="inline-block text-xs bg-white border border-gray-300 rounded-full px-3 py-1 text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {title}
            </Link>
          ))}
        </div>
      </div>

      {/* FAQ sections */}
      <div className="space-y-10">
        {topics.map(({ title, items }) => (
          <section key={title}>
            <div className="flex items-center gap-3 mb-5">
              <h2 className="text-lg font-bold text-gray-900">{title}</h2>
              <Link
                href={items[0].calculator}
                className="text-xs text-blue-600 hover:underline border border-blue-200 bg-blue-50 rounded-full px-3 py-1 flex-shrink-0"
              >
                Aller au calculateur →
              </Link>
            </div>
            <div className="space-y-4">
              {items.map(({ question, answer }) => (
                <div key={question} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-2">{question}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{answer}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Guides liés */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-10 mb-6">
        <p className="font-semibold text-blue-900 mb-3">Guides approfondis</p>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/guide-imc" className="text-blue-700 hover:underline font-medium">
              → Guide complet sur l&apos;IMC
            </Link>{" "}
            — Formule, tableau OMS, limites et santé cardiovasculaire
          </li>
          <li>
            <Link href="/guide-calories-perte-poids" className="text-blue-700 hover:underline font-medium">
              → Guide calories pour perdre du poids
            </Link>{" "}
            — TDEE, déficit calorique et macronutriments
          </li>
          <li>
            <Link href="/guide-metabolisme-base" className="text-blue-700 hover:underline font-medium">
              → Guide métabolisme de base
            </Link>{" "}
            — Formule Mifflin-St Jeor, facteurs et stratégies
          </li>
          <li>
            <Link href="/guide-grossesse-semaines" className="text-blue-700 hover:underline font-medium">
              → Guide semaines de grossesse
            </Link>{" "}
            — SA, trimestres et règle de Naegele
          </li>
        </ul>
      </div>

      <p className="text-sm text-gray-500 border-t pt-4">
        Les informations de cette FAQ sont fournies à titre éducatif uniquement et ne constituent pas un avis médical professionnel. Consultez un médecin pour tout diagnostic ou question relative à votre santé.
      </p>
    </main>
  );
}

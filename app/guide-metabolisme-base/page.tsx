import type { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Métabolisme de base : définition, calcul et comment l'augmenter | calculs-sante.fr",
  },
  description:
    "Qu'est-ce que le métabolisme de base (BMR) ? Formule Mifflin-St Jeor, facteurs qui l'influencent, différence avec le TDEE et conseils pour le booster.",
  alternates: {
    canonical: "https://calculs-sante.fr/guide-metabolisme-base/",
  },
  openGraph: {
    title: "Métabolisme de base : définition, calcul et comment l'augmenter",
    description:
      "Qu'est-ce que le métabolisme de base (BMR) ? Formule Mifflin-St Jeor, facteurs qui l'influencent et conseils pour le booster naturellement.",
    url: "https://calculs-sante.fr/guide-metabolisme-base/",
    type: "article",
  },
};

const articleSchema = generateArticleSchema({
  title: "Métabolisme de base : définition, calcul et comment l'augmenter naturellement",
  description:
    "Guide complet sur le métabolisme de base (BMR) : formule Mifflin-St Jeor, facteurs qui l'influencent (âge, masse musculaire, thyroïde), différence avec le TDEE et stratégies pour augmenter son métabolisme.",
  url: "/guide-metabolisme-base/",
  datePublished: "2025-01-01",
  dateModified: "2025-05-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Qu'est-ce que le métabolisme de base ?",
    answer:
      "Le métabolisme de base (BMR — Basal Metabolic Rate) est la quantité minimale d'énergie que votre corps dépense au repos pour assurer ses fonctions vitales : respiration, circulation sanguine, régulation de la température, fonctionnement des organes. Il représente 60 à 75% de la dépense énergétique totale chez une personne sédentaire.",
  },
  {
    question: "Quelle est la formule la plus précise pour calculer le BMR ?",
    answer:
      "La formule Mifflin-St Jeor (1990) est considérée comme la plus précise par les professionnels de santé. Homme : BMR = (10 × poids en kg) + (6,25 × taille en cm) − (5 × âge) + 5. Femme : BMR = (10 × poids en kg) + (6,25 × taille en cm) − (5 × âge) − 161.",
  },
  {
    question: "Comment augmenter son métabolisme de base naturellement ?",
    answer:
      "Les principales stratégies : développer la masse musculaire (le muscle consomme plus d'énergie que la graisse), pratiquer des activités de haute intensité (HIIT), manger suffisamment de protéines (effet thermique élevé), bien dormir et gérer le stress (le cortisol ralentit le métabolisme).",
  },
  {
    question: "Quelle est la différence entre BMR et TDEE ?",
    answer:
      "Le BMR est la dépense énergétique au repos total. Le TDEE (Total Daily Energy Expenditure) inclut en plus toutes les activités physiques de la journée. TDEE = BMR × facteur d'activité (de 1,2 pour sédentaire à 1,9 pour athlète). C'est le TDEE qui sert de base pour calculer les apports caloriques.",
  },
  {
    question: "Mon métabolisme ralentit-il avec l'âge ?",
    answer:
      "Oui, le métabolisme de base diminue d'environ 1 à 2% par décennie après 30 ans, principalement à cause de la perte de masse musculaire (sarcopénie). Pratiquer la musculation régulièrement est le moyen le plus efficace de contrer ce phénomène.",
  },
]);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "/" },
  { name: "Guide métabolisme de base", url: "/guide-metabolisme-base/" },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [articleSchema, faqSchema, breadcrumbSchema],
};

export default function GuideMetabolismePage() {
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
          <li className="text-gray-900 font-medium">Guide métabolisme de base</li>
        </ol>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
        Métabolisme de base (BMR) : définition, calcul et comment l&apos;augmenter
      </h1>

      <p className="text-base text-gray-600 leading-relaxed mb-8">
        Le métabolisme de base détermine combien de calories votre corps brûle au repos. Comprendre ce chiffre est essentiel pour gérer efficacement votre poids, que vous souhaitiez maigrir, maintenir votre forme ou prendre de la masse musculaire.
      </p>

      {/* CTA principal */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-10">
        <p className="text-purple-800 font-medium mb-3">Calculez votre métabolisme de base maintenant</p>
        <Link
          href="/calculateur-metabolisme-de-base"
          className="inline-block bg-purple-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Calculer mon métabolisme de base →
        </Link>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          1. Qu&apos;est-ce que le métabolisme de base (BMR) ?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>métabolisme de base</strong> (BMR — <em>Basal Metabolic Rate</em>) est la quantité d&apos;énergie minimale que votre corps dépense pour maintenir ses fonctions vitales au repos complet : battements du cœur, respiration, régulation de la température corporelle, fonctionnement du cerveau et des organes.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Concrètement, c&apos;est le nombre de calories que vous brûleriez si vous restiez allongé sans bouger pendant 24 heures. Pour une femme adulte, ce chiffre se situe généralement entre <strong>1 200 et 1 600 kcal/jour</strong>, et entre <strong>1 500 et 2 000 kcal/jour</strong> pour un homme.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Chez une personne sédentaire, le BMR représente <strong>60 à 75% de la dépense énergétique totale</strong>. C&apos;est pourquoi il est impossible de &laquo; brûler &raquo; toutes ses calories rien qu&apos;en faisant du sport — la majeure partie de votre dépense énergétique vient de votre métabolisme au repos.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          2. Formule Mifflin-St Jeor : la plus précise
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Plusieurs formules existent pour estimer le BMR. La formule <strong>Mifflin-St Jeor</strong> (1990) est celle recommandée par les nutritionnistes et les académies de médecine car elle a été validée sur de larges cohortes contemporaines.
        </p>
        <div className="space-y-3 mb-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-900 font-semibold mb-1">Homme :</p>
            <p className="font-mono text-sm">BMR = (10 × poids en kg) + (6,25 × taille en cm) − (5 × âge) + 5</p>
          </div>
          <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
            <p className="text-pink-900 font-semibold mb-1">Femme :</p>
            <p className="font-mono text-sm">BMR = (10 × poids en kg) + (6,25 × taille en cm) − (5 × âge) − 161</p>
          </div>
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          <strong>Exemple :</strong> Femme de 60 kg, 165 cm, 30 ans :
        </p>
        <div className="bg-gray-100 rounded-lg p-4 font-mono text-sm text-center mb-4">
          BMR = (10 × 60) + (6,25 × 165) − (5 × 30) − 161<br />
          = 600 + 1 031,25 − 150 − 161 = <strong>1 320 kcal/jour</strong>
        </div>
        <p className="text-gray-700 text-sm">
          La formule Harris-Benedict (1919) est plus ancienne et tend à surestimer le BMR. La formule Katch-McArdle est plus précise si vous connaissez votre pourcentage de masse grasse.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          3. Facteurs influençant le métabolisme de base
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le BMR n&apos;est pas figé — il varie selon plusieurs facteurs physiologiques :
        </p>
        <div className="space-y-4">
          {[
            {
              factor: "Composition corporelle",
              icon: "💪",
              desc: "Le tissu musculaire est métaboliquement actif : il consomme 3 fois plus d'énergie au repos que le tissu adipeux. Plus vous avez de masse musculaire, plus votre BMR est élevé.",
            },
            {
              factor: "Âge",
              icon: "⏳",
              desc: "Le BMR diminue d'environ 1 à 2% par décennie après 30 ans, principalement à cause de la perte naturelle de masse musculaire (sarcopénie). À 60 ans, votre BMR peut être 15 à 20% inférieur à celui de vos 20 ans.",
            },
            {
              factor: "Sexe",
              icon: "⚧",
              desc: "Les hommes ont en moyenne un BMR 10 à 15% plus élevé que les femmes de même poids et taille, en raison d'une proportion de masse musculaire naturellement plus importante.",
            },
            {
              factor: "Thyroïde",
              icon: "🦋",
              desc: "La thyroïde régule le métabolisme global. Une hypothyroïdie ralentit significativement le BMR (parfois de 30%), tandis qu'une hyperthyroïdie l'accélère. Ces conditions nécessitent un suivi médical.",
            },
            {
              factor: "Alimentation",
              icon: "🥗",
              desc: "Les régimes très restrictifs entraînent une adaptation métabolique : le corps réduit son BMR pour économiser l'énergie. C'est le mécanisme principal derrière l'effet yo-yo.",
            },
            {
              factor: "Température ambiante",
              icon: "🌡️",
              desc: "L'exposition au froid augmente légèrement le BMR car le corps dépense de l'énergie pour maintenir sa température (thermogenèse). L'effet reste modeste dans les conditions de vie ordinaires.",
            },
          ].map(({ factor, icon, desc }) => (
            <div key={factor} className="flex gap-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <span className="text-2xl mt-0.5">{icon}</span>
              <div>
                <strong className="text-gray-900">{factor} :</strong>{" "}
                <span className="text-gray-700 text-sm">{desc}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          4. BMR vs TDEE : la différence clé
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le BMR mesure les calories brûlées au repos strict. Le <strong>TDEE</strong> (Total Daily Energy Expenditure) inclut toutes vos activités quotidiennes : marche, travail, sport, digestion, etc.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Indicateur</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Ce qu&apos;il mesure</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Usage principal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">BMR</td>
                <td className="border border-gray-300 px-4 py-2">Calories au repos total</td>
                <td className="border border-gray-300 px-4 py-2">Base de calcul du TDEE</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">TDEE</td>
                <td className="border border-gray-300 px-4 py-2">Calories brûlées en 24h avec activité</td>
                <td className="border border-gray-300 px-4 py-2">Planification alimentaire quotidienne</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Pour calculer votre TDEE, consultez notre{" "}
          <Link href="/calculateur-calories-journalieres" className="text-blue-600 hover:underline">
            calculateur de calories journalières
          </Link>
          . Pour approfondir la gestion des calories et du poids, lisez notre{" "}
          <Link href="/guide-calories-perte-poids" className="text-blue-600 hover:underline">
            guide calories pour perdre du poids
          </Link>
          .
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          5. Comment augmenter son métabolisme naturellement
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Contrairement aux idées reçues, plusieurs stratégies permettent d&apos;augmenter durablement son BMR :
        </p>
        <ol className="space-y-4">
          {[
            {
              num: "1",
              title: "Développer la masse musculaire",
              desc: "C'est la stratégie la plus efficace. La musculation (résistance progressive) stimule la croissance musculaire. Chaque kg de muscle supplémentaire brûle environ 13 kcal/jour supplémentaires au repos.",
            },
            {
              num: "2",
              title: "Pratiquer le HIIT",
              desc: "Les entraînements fractionnés à haute intensité (HIIT) génèrent un effet EPOC (Excess Post-exercise Oxygen Consumption) : votre métabolisme reste accéléré jusqu'à 24h après l'entraînement.",
            },
            {
              num: "3",
              title: "Augmenter les apports en protéines",
              desc: "Les protéines ont un effet thermique élevé : leur digestion consomme 20-30% de leur valeur calorique, contre 5-10% pour les glucides et 0-3% pour les lipides. Consommez 1,6-2 g de protéines par kg de poids.",
            },
            {
              num: "4",
              title: "Ne pas trop restreindre les calories",
              desc: "Une restriction calorique sévère déclenche l'adaptation métabolique. Maintenez un déficit modéré (300-500 kcal) pour éviter que votre corps ne ralentisse son métabolisme.",
            },
            {
              num: "5",
              title: "Optimiser le sommeil",
              desc: "Le manque de sommeil réduit les niveaux de leptine (hormone de satiété) et augmente le cortisol, ce qui peut ralentir le métabolisme et favoriser le stockage des graisses. Visez 7-9 heures de sommeil.",
            },
          ].map(({ num, title, desc }) => (
            <li key={num} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center font-bold text-sm">{num}</span>
              <div>
                <strong className="text-gray-900">{title} :</strong>{" "}
                <span className="text-gray-700 text-sm">{desc}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Section FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">FAQ — Métabolisme de base</h2>
        <div className="space-y-5">
          {[
            {
              q: "Qu'est-ce que le métabolisme de base ?",
              a: "C'est la quantité d'énergie minimale que votre corps dépense au repos pour ses fonctions vitales. Il représente 60 à 75% de votre dépense énergétique totale.",
            },
            {
              q: "Quelle formule pour calculer le BMR ?",
              a: "La formule Mifflin-St Jeor est la plus précise : Homme : (10 × poids) + (6,25 × taille) − (5 × âge) + 5. Femme : même formule − 161.",
            },
            {
              q: "Comment augmenter son métabolisme naturellement ?",
              a: "Développer la masse musculaire (musculation), pratiquer le HIIT, augmenter les protéines alimentaires, bien dormir et éviter les déficits caloriques trop agressifs.",
            },
            {
              q: "Quelle différence entre BMR et TDEE ?",
              a: "Le BMR est la dépense au repos strict. Le TDEE inclut toutes les activités quotidiennes. TDEE = BMR × facteur d'activité physique.",
            },
            {
              q: "Mon métabolisme ralentit-il avec l'âge ?",
              a: "Oui, il diminue d'environ 1 à 2% par décennie après 30 ans à cause de la perte de masse musculaire. La musculation régulière permet de contrer ce phénomène.",
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-gray-50 rounded-lg p-5 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">{q}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Maillage interne */}
      <div className="bg-purple-50 border border-purple-200 rounded-xl p-5 mb-6">
        <p className="font-semibold text-purple-900 mb-3">Calculateurs et guides liés</p>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/calculateur-metabolisme-de-base" className="text-purple-700 hover:underline font-medium">
              → Calculateur métabolisme de base
            </Link>{" "}
            — Calculez votre BMR avec la formule Mifflin-St Jeor
          </li>
          <li>
            <Link href="/calculateur-calories-journalieres" className="text-purple-700 hover:underline font-medium">
              → Calculateur calories journalières (TDEE)
            </Link>{" "}
            — De votre BMR à votre dépense totale journalière
          </li>
          <li>
            <Link href="/guide-calories-perte-poids" className="text-purple-700 hover:underline font-medium">
              → Guide calories pour perdre du poids
            </Link>{" "}
            — Déficit calorique, macros et stratégies de perte de poids
          </li>
        </ul>
      </div>

      <p className="text-sm text-gray-500 border-t pt-4">
        Les informations de cet article sont fournies à titre éducatif uniquement et ne constituent pas un avis médical. Consultez un médecin ou un nutritionniste pour toute question relative à votre santé métabolique.
      </p>
    </main>
  );
}

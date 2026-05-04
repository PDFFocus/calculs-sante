import type { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Comment calculer ses calories pour perdre du poids | calculs-sante.fr",
  },
  description:
    "Déficit calorique, TDEE, macros : guide complet pour calculer vos calories et perdre du poids durablement sans se priver.",
  alternates: {
    canonical: "https://calculs-sante.fr/guide-calories-perte-poids/",
  },
  openGraph: {
    title: "Comment calculer ses calories pour perdre du poids efficacement",
    description:
      "Déficit calorique, TDEE, macros : guide complet pour calculer vos calories et perdre du poids durablement sans se priver.",
    url: "https://calculs-sante.fr/guide-calories-perte-poids/",
    type: "article",
  },
};

const articleSchema = generateArticleSchema({
  title: "Comment calculer ses calories pour perdre du poids efficacement",
  description:
    "Guide complet sur le calcul calorique pour la perte de poids : déficit calorique, TDEE, macronutriments et erreurs à éviter pour maigrir durablement.",
  url: "/guide-calories-perte-poids/",
  datePublished: "2025-01-01",
  dateModified: "2025-05-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Quel est le déficit calorique idéal pour perdre du poids ?",
    answer:
      "Un déficit de 300 à 500 kcal par jour est généralement recommandé pour une perte de poids progressive et durable (0,3 à 0,5 kg par semaine). Un déficit plus important peut entraîner une perte de masse musculaire et un effet yo-yo.",
  },
  {
    question: "Comment calculer son TDEE (dépense énergétique totale) ?",
    answer:
      "Le TDEE se calcule en multipliant le métabolisme de base (BMR) par un facteur d'activité physique. BMR × 1,2 pour sédentaire, × 1,375 pour légèrement actif, × 1,55 pour modérément actif, × 1,725 pour très actif.",
  },
  {
    question: "Combien de calories par jour pour maigrir pour une femme ?",
    answer:
      "Cela dépend du BMR et du niveau d'activité de chaque femme. En règle générale, ne pas descendre en dessous de 1 200 kcal/jour. Notre calculateur de calories journalières fournit une estimation personnalisée.",
  },
  {
    question: "Faut-il compter les calories pour perdre du poids ?",
    answer:
      "Compter les calories est efficace pour créer un déficit contrôlé, mais ce n'est pas la seule méthode. Améliorer la qualité des aliments (protéines, fibres, légumes) peut créer un déficit naturel sans comptage précis.",
  },
  {
    question: "Les macronutriments importent-ils pour maigrir ?",
    answer:
      "Oui. Les protéines (1,6–2 g/kg de poids) préservent la masse musculaire pendant le déficit calorique. Les glucides complexes et les graisses saines complètent l'alimentation. Une répartition typique pour la perte de poids : 30% protéines, 40% glucides, 30% lipides.",
  },
]);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "/" },
  { name: "Guide calories perte de poids", url: "/guide-calories-perte-poids/" },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [articleSchema, faqSchema, breadcrumbSchema],
};

export default function GuideCaloriesPage() {
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
          <li className="text-gray-900 font-medium">Guide calories perte de poids</li>
        </ol>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
        Comment calculer ses calories pour perdre du poids efficacement
      </h1>

      <p className="text-base text-gray-600 leading-relaxed mb-8">
        Perdre du poids de façon durable repose sur un principe simple : dépenser plus de calories qu&apos;on en consomme. Mais calculer ce déficit calorique correctement, sans se priver excessivement, est un art que ce guide vous enseigne étape par étape.
      </p>

      {/* CTA principal */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-10">
        <p className="text-green-800 font-medium mb-3">Calculez vos besoins caloriques personnalisés</p>
        <Link
          href="/calculateur-calories-journalieres"
          className="inline-block bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Calculer mes calories →
        </Link>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          1. Le déficit calorique : principe fondamental
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>déficit calorique</strong> est la différence entre les calories que vous brûlez chaque jour (dépense énergétique totale) et celles que vous consommez. Pour perdre du poids, il faut consommer moins de calories que vous n&apos;en dépensez.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          En théorie, 1 kg de graisse corporelle représente environ 7 700 kcal. Donc, pour perdre 1 kg de graisse par semaine, il faudrait un déficit journalier de 1 100 kcal — ce qui est trop agressif pour la majorité des gens. <strong>Un déficit de 300 à 500 kcal/jour</strong> est bien plus soutenable et correspond à une perte de 0,3 à 0,5 kg par semaine.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800 text-sm font-medium">
            ⚠️ Évitez les déficits excessifs (&gt; 1 000 kcal/jour) : ils entraînent une perte de masse musculaire, une fatigue importante et souvent un effet rebond après l&apos;arrêt du régime.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          2. Comment calculer ses besoins en calories (TDEE)
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le <strong>TDEE</strong> (Total Daily Energy Expenditure — Dépense Énergétique Totale Journalière) représente le nombre de calories que vous brûlez chaque jour en comptant votre activité physique. C&apos;est votre point de référence pour créer un déficit.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le TDEE se calcule en deux étapes :
        </p>
        <ol className="list-decimal list-inside space-y-3 mb-4 text-gray-700">
          <li>
            <strong>Calculer le BMR</strong> (métabolisme de base) — le nombre de calories brûlées au repos. Utilisez notre{" "}
            <Link href="/calculateur-metabolisme-de-base" className="text-blue-600 hover:underline">
              calculateur de métabolisme de base
            </Link>
            .
          </li>
          <li>
            <strong>Multiplier par le facteur d&apos;activité</strong> :
          </li>
        </ol>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Niveau d&apos;activité</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Facteur</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Sédentaire</td>
                <td className="border border-gray-300 px-4 py-2">× 1,2</td>
                <td className="border border-gray-300 px-4 py-2">Peu ou pas d&apos;exercice, travail de bureau</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Légèrement actif</td>
                <td className="border border-gray-300 px-4 py-2">× 1,375</td>
                <td className="border border-gray-300 px-4 py-2">Sport léger 1–3 jours/semaine</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Modérément actif</td>
                <td className="border border-gray-300 px-4 py-2">× 1,55</td>
                <td className="border border-gray-300 px-4 py-2">Sport modéré 3–5 jours/semaine</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Très actif</td>
                <td className="border border-gray-300 px-4 py-2">× 1,725</td>
                <td className="border border-gray-300 px-4 py-2">Sport intensif 6–7 jours/semaine</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Athlète</td>
                <td className="border border-gray-300 px-4 py-2">× 1,9</td>
                <td className="border border-gray-300 px-4 py-2">Entraînement très intensif, travail physique</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          <strong>Exemple :</strong> Une femme de 65 kg, 1,65 m, 35 ans avec un BMR de 1 420 kcal et un niveau modérément actif aura un TDEE de 1 420 × 1,55 = <strong>2 201 kcal/jour</strong>.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          3. Combien de calories réduire ?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          À partir de votre TDEE, soustrayez votre déficit calorique cible pour obtenir votre objectif calorique journalier.
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4 font-mono text-center">
          Objectif calorique = TDEE − Déficit (300 à 500 kcal)
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          Pour l&apos;exemple précédent : 2 201 − 400 = <strong>1 801 kcal/jour</strong> pour une perte de poids progressive.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>Règles de sécurité :</strong> Ne jamais descendre en dessous de <strong>1 200 kcal/jour pour les femmes</strong> et <strong>1 500 kcal/jour pour les hommes</strong> sans supervision médicale.
          </p>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          4. Macronutriments et perte de poids
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Atteindre son objectif calorique est essentiel, mais la <strong>répartition des macronutriments</strong> influence aussi la qualité de la perte de poids (préservation musculaire, satiété, énergie).
        </p>
        <ul className="space-y-4 mb-4">
          <li className="flex gap-3">
            <span className="text-green-600 font-bold mt-0.5">P</span>
            <div>
              <strong>Protéines (1,6–2 g/kg de poids corporel) :</strong> Indispensables pour préserver la masse musculaire pendant le déficit. Les protéines augmentent aussi la satiété et ont un effet thermique élevé (le corps brûle plus d&apos;énergie pour les digérer).
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold mt-0.5">G</span>
            <div>
              <strong>Glucides complexes (40–50% des calories) :</strong> Privilégier les légumineuses, céréales complètes, légumes et fruits. Ils fournissent de l&apos;énergie soutenue et des fibres pour la satiété.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-amber-600 font-bold mt-0.5">L</span>
            <div>
              <strong>Lipides (25–35% des calories) :</strong> Les graisses saines (huile d&apos;olive, avocats, noix, poissons gras) sont essentielles pour les hormones et l&apos;absorption des vitamines liposolubles. Ne pas les supprimer.
            </div>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Vérifiez votre{" "}
          <Link href="/calculateur-imc" className="text-blue-600 hover:underline">
            IMC actuel
          </Link>{" "}
          pour contextualiser votre objectif de perte de poids.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          5. Erreurs courantes à éviter
        </h2>
        <ul className="space-y-3">
          {[
            {
              title: "Sous-estimer les calories liquides",
              desc: "Les boissons sucrées, jus de fruits, alcool et café crémes peuvent représenter 400–600 kcal/jour sans créer de satiété.",
            },
            {
              title: "Sauter le petit-déjeuner systématiquement",
              desc: "Cela peut entraîner des fringales le soir et une surcompensation calorique. Le jeûne intermittent peut fonctionner mais doit être bien planifié.",
            },
            {
              title: "Ne pas ajuster les apports avec le temps",
              desc: "En perdant du poids, votre BMR diminue. Il faut recalculer vos besoins tous les 5 kg perdus pour continuer à progresser.",
            },
            {
              title: "Trop réduire les protéines",
              desc: "Un apport insuffisant en protéines accélère la perte de masse musculaire, ralentit le métabolisme et favorise l'effet yo-yo.",
            },
            {
              title: "Ignorer le stress et le sommeil",
              desc: "Un sommeil insuffisant augmente le cortisol, favorise le stockage des graisses abdominales et augmente les fringales. Dormez 7–9h par nuit.",
            },
          ].map(({ title, desc }) => (
            <li key={title} className="flex gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
              <span className="text-red-500 mt-0.5">✗</span>
              <div>
                <strong className="text-gray-900">{title} :</strong>{" "}
                <span className="text-gray-700 text-sm">{desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Section FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">FAQ — Questions fréquentes sur les calories et la perte de poids</h2>
        <div className="space-y-5">
          {[
            {
              q: "Quel est le déficit calorique idéal pour perdre du poids ?",
              a: "Un déficit de 300 à 500 kcal par jour permet une perte de 0,3 à 0,5 kg/semaine, progressive et durable sans perte de masse musculaire excessive.",
            },
            {
              q: "Comment calculer son TDEE ?",
              a: "Calculez d'abord votre BMR (métabolisme de base), puis multipliez-le par votre facteur d'activité physique (1,2 à 1,9 selon le niveau).",
            },
            {
              q: "Combien de calories par jour pour maigrir pour une femme ?",
              a: "Cela varie selon la morphologie et l'activité. En général entre 1 400 et 1 800 kcal/jour. Ne pas descendre sous 1 200 kcal sans avis médical.",
            },
            {
              q: "Faut-il compter les calories pour perdre du poids ?",
              a: "C'est une méthode efficace mais pas obligatoire. Améliorer la qualité alimentaire (plus de protéines, fibres, légumes) peut créer un déficit naturel sans comptage.",
            },
            {
              q: "Les macronutriments importent-ils pour maigrir ?",
              a: "Oui, notamment les protéines (1,6–2 g/kg) qui préservent la masse musculaire. Glucides complexes et graisses saines complètent une alimentation équilibrée en déficit.",
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
      <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-6">
        <p className="font-semibold text-green-900 mb-3">Calculateurs et guides liés</p>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/calculateur-calories-journalieres" className="text-green-700 hover:underline font-medium">
              → Calculateur calories journalières
            </Link>{" "}
            — Obtenez votre TDEE personnalisé
          </li>
          <li>
            <Link href="/calculateur-metabolisme-de-base" className="text-green-700 hover:underline font-medium">
              → Calculateur métabolisme de base
            </Link>{" "}
            — Calculez votre BMR avec la formule Mifflin-St Jeor
          </li>
          <li>
            <Link href="/calculateur-imc" className="text-green-700 hover:underline font-medium">
              → Calculateur IMC
            </Link>{" "}
            — Évaluez votre indice de masse corporelle
          </li>
          <li>
            <Link href="/guide-imc" className="text-green-700 hover:underline font-medium">
              → Guide IMC complet
            </Link>{" "}
            — Comprendre l&apos;IMC, ses limites et son interprétation
          </li>
        </ul>
      </div>

      <p className="text-sm text-gray-500 border-t pt-4">
        Les informations de cet article sont fournies à titre éducatif uniquement et ne constituent pas un avis médical ou nutritionnel. Consultez un diététicien ou un médecin avant de modifier significativement votre alimentation.
      </p>
    </main>
  );
}

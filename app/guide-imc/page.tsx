import type { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Qu'est-ce que l'IMC ? Calcul, interprétation et limites | calculs-sante.fr",
  },
  description:
    "Comprenez l'Indice de Masse Corporelle : formule de calcul, tableau OMS, limites et ce que votre IMC révèle sur votre santé.",
  alternates: {
    canonical: "https://calculs-sante.fr/guide-imc/",
  },
  openGraph: {
    title: "Qu'est-ce que l'IMC ? Calcul, interprétation et limites",
    description:
      "Comprenez l'Indice de Masse Corporelle : formule de calcul, tableau OMS, limites et ce que votre IMC révèle sur votre santé.",
    url: "https://calculs-sante.fr/guide-imc/",
    type: "article",
  },
};

const articleSchema = generateArticleSchema({
  title: "Qu'est-ce que l'IMC ? Calcul, interprétation et limites",
  description:
    "Guide complet sur l'Indice de Masse Corporelle : formule officielle, tableau de catégories OMS, limites de l'indicateur et lien avec la santé cardiovasculaire.",
  url: "/guide-imc/",
  datePublished: "2025-01-01",
  dateModified: "2025-05-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Qu'est-ce que l'IMC exactement ?",
    answer:
      "L'IMC (Indice de Masse Corporelle) est un indicateur numérique calculé à partir du poids et de la taille. Il permet d'évaluer si une personne est en sous-poids, en poids normal, en surpoids ou en obésité selon les seuils définis par l'Organisation Mondiale de la Santé.",
  },
  {
    question: "Comment calculer son IMC rapidement ?",
    answer:
      "Divisez votre poids en kilogrammes par le carré de votre taille en mètres. Exemple : pour 70 kg et 1,75 m, IMC = 70 ÷ (1,75 × 1,75) = 22,9. Utilisez notre calculateur IMC pour obtenir le résultat instantanément.",
  },
  {
    question: "Un IMC de 25 est-il en surpoids ?",
    answer:
      "Oui, un IMC de 25 marque la limite supérieure de la catégorie « poids normal » selon l'OMS. À partir de 25, on entre dans la catégorie surpoids. L'obésité commence à 30.",
  },
  {
    question: "L'IMC est-il fiable pour les sportifs ?",
    answer:
      "Non, l'IMC est peu fiable pour les sportifs à forte masse musculaire. Le muscle étant plus dense que la graisse, un athlète peut afficher un IMC élevé sans excès de masse grasse. D'autres mesures comme le tour de taille ou le DEXA sont plus pertinentes dans ce cas.",
  },
  {
    question: "Quel IMC est considéré comme dangereux ?",
    answer:
      "Un IMC inférieur à 16 (dénutrition sévère) ou supérieur à 40 (obésité morbide) est associé à des risques médicaux significatifs. Consultez un médecin si vous vous situez dans ces plages.",
  },
]);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "/" },
  { name: "Guide IMC", url: "/guide-imc/" },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [articleSchema, faqSchema, breadcrumbSchema],
};

export default function GuideIMCPage() {
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
          <li className="text-gray-900 font-medium">Guide IMC</li>
        </ol>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
        Qu&apos;est-ce que l&apos;IMC ? Calcul, interprétation et limites
      </h1>

      <p className="text-base text-gray-600 leading-relaxed mb-8">
        L&apos;Indice de Masse Corporelle est l&apos;outil de référence mondial pour évaluer le statut pondéral d&apos;un adulte. Ce guide explique sa formule, son interprétation selon les normes OMS et ses limites importantes à connaître.
      </p>

      {/* CTA principal */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-10">
        <p className="text-blue-800 font-medium mb-3">Calculez votre IMC maintenant</p>
        <Link
          href="/calculateur-imc"
          className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Calculer mon IMC →
        </Link>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          1. Qu&apos;est-ce que l&apos;IMC ?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;<strong>Indice de Masse Corporelle (IMC)</strong>, également appelé BMI (<em>Body Mass Index</em> en anglais), est un indicateur numérique simple qui permet d&apos;évaluer la corpulence d&apos;une personne adulte en mettant en rapport son poids et sa taille. Il a été développé par le mathématicien belge Adolphe Quételet au XIX<sup>e</sup> siècle et reste aujourd&apos;hui l&apos;outil standard utilisé par l&apos;Organisation Mondiale de la Santé (OMS) pour classer le statut pondéral des populations.
        </p>
        <p className="text-gray-700 leading-relaxed">
          L&apos;IMC n&apos;est pas un outil de diagnostic médical à lui seul. Il sert de premier indicateur de dépistage pour identifier les individus susceptibles de présenter des risques liés au surpoids ou à la dénutrition. Il doit toujours être interprété dans un contexte clinique plus large.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          2. Comment calculer son IMC ?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La formule de l&apos;IMC est universelle et s&apos;applique de la même manière pour les hommes et les femmes adultes :
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4 text-center font-mono text-lg">
          IMC = Poids (kg) ÷ Taille² (m)
        </div>
        <p className="text-gray-700 leading-relaxed mb-3">
          <strong>Exemple concret :</strong> Une personne de 75 kg mesurant 1,78 m aura un IMC de :
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4 text-center font-mono">
          IMC = 75 ÷ (1,78 × 1,78) = 75 ÷ 3,1684 ≈ <strong>23,7</strong>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Ce résultat se situe dans la catégorie &laquo; poids normal &raquo; selon les seuils OMS. Pour éviter les erreurs de calcul, utilisez notre{" "}
          <Link href="/calculateur-imc" className="text-blue-600 hover:underline">
            calculateur IMC en ligne
          </Link>{" "}
          qui effectue le calcul automatiquement.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          3. Interprétation des résultats : le tableau OMS
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          L&apos;OMS a défini 6 catégories de statut pondéral pour les adultes à partir de l&apos;IMC :
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Catégorie</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">IMC (kg/m²)</th>
                <th className="border border-gray-300 px-4 py-2 text-left font-semibold">Risque de santé</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Dénutrition sévère</td>
                <td className="border border-gray-300 px-4 py-2">&lt; 16,0</td>
                <td className="border border-gray-300 px-4 py-2 text-red-700">Très élevé</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Insuffisance pondérale</td>
                <td className="border border-gray-300 px-4 py-2">16,0 – 18,4</td>
                <td className="border border-gray-300 px-4 py-2 text-orange-700">Élevé</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Poids normal</td>
                <td className="border border-gray-300 px-4 py-2 font-medium">18,5 – 24,9</td>
                <td className="border border-gray-300 px-4 py-2 text-green-700">Faible</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Surpoids</td>
                <td className="border border-gray-300 px-4 py-2">25,0 – 29,9</td>
                <td className="border border-gray-300 px-4 py-2 text-yellow-700">Modéré</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Obésité modérée (classe I)</td>
                <td className="border border-gray-300 px-4 py-2">30,0 – 34,9</td>
                <td className="border border-gray-300 px-4 py-2 text-orange-700">Élevé</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">Obésité sévère (classe II)</td>
                <td className="border border-gray-300 px-4 py-2">35,0 – 39,9</td>
                <td className="border border-gray-300 px-4 py-2 text-red-700">Très élevé</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Obésité morbide (classe III)</td>
                <td className="border border-gray-300 px-4 py-2">≥ 40,0</td>
                <td className="border border-gray-300 px-4 py-2 text-red-800 font-semibold">Extrêmement élevé</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-500">
          Source : Organisation Mondiale de la Santé (OMS), 2024.
        </p>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          4. Les limites de l&apos;IMC
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Malgré sa popularité, l&apos;IMC présente des <strong>limites importantes</strong> que tout utilisateur doit connaître :
        </p>
        <ul className="space-y-3 mb-4">
          <li className="flex gap-3">
            <span className="text-blue-600 mt-0.5">▸</span>
            <div>
              <strong>Masse musculaire vs masse grasse :</strong> L&apos;IMC ne distingue pas la masse musculaire de la masse graisseuse. Un sportif très musclé peut avoir un IMC de 27 (surpoids) sans être en excès de graisse corporelle.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 mt-0.5">▸</span>
            <div>
              <strong>Âge :</strong> Avec l&apos;âge, la composition corporelle évolue — moins de muscle, plus de graisse — sans que l&apos;IMC le reflète nécessairement. Les personnes âgées peuvent avoir un IMC &laquo; normal &raquo; mais présenter une obésité sarcopénique.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 mt-0.5">▸</span>
            <div>
              <strong>Origine ethnique :</strong> Des études montrent que les personnes d&apos;origine asiatique présentent des risques métaboliques à des IMC plus bas. L&apos;OMS recommande des seuils ajustés (23 pour le surpoids, 27,5 pour l&apos;obésité) pour ces populations.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 mt-0.5">▸</span>
            <div>
              <strong>Grossesse :</strong> L&apos;IMC ne s&apos;applique pas aux femmes enceintes. Pendant la grossesse, d&apos;autres indicateurs de suivi pondéral sont utilisés par les professionnels de santé.
            </div>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 mt-0.5">▸</span>
            <div>
              <strong>Répartition des graisses :</strong> L&apos;IMC ne tient pas compte de la localisation des graisses. La graisse abdominale (viscérale) est plus dangereuse que la graisse sous-cutanée, mais l&apos;IMC n&apos;en tient pas compte.
            </div>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Pour une évaluation plus complète, il est conseillé de mesurer aussi le{" "}
          <Link href="/calculateur-poids-ideal" className="text-blue-600 hover:underline">
            poids idéal
          </Link>
          , le tour de taille et, si possible, le pourcentage de masse grasse.
        </p>
      </section>

      {/* Section 5 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          5. IMC et santé cardiovasculaire
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Des centaines d&apos;études épidémiologiques ont établi un lien entre l&apos;IMC et le risque cardiovasculaire. Un IMC supérieur à 25 est associé à une augmentation de la pression artérielle, du taux de cholestérol LDL et de la résistance à l&apos;insuline — trois facteurs majeurs de risque coronarien.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Cependant, la relation n&apos;est pas linéaire. Une méta-analyse publiée dans le <em>JAMA</em> en 2013 a montré que les personnes en légère surpoids (IMC 25-30) avaient en réalité une mortalité légèrement inférieure à celles avec un IMC &laquo; normal &raquo;, phénomène connu sous le nom de &laquo; paradoxe de l&apos;obésité &raquo;.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Pour gérer efficacement son poids en relation avec la santé cardiovasculaire, il est essentiel de connaître aussi ses{" "}
          <Link href="/calculateur-calories-journalieres" className="text-blue-600 hover:underline">
            besoins caloriques journaliers
          </Link>
          . Consultez également notre{" "}
          <Link href="/guide-calories-perte-poids" className="text-blue-600 hover:underline">
            guide calories pour perdre du poids
          </Link>
          .
        </p>
      </section>

      {/* Section FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">FAQ — Questions fréquentes sur l&apos;IMC</h2>
        <div className="space-y-5">
          {[
            {
              q: "Qu'est-ce que l'IMC exactement ?",
              a: "L'IMC (Indice de Masse Corporelle) est un indicateur numérique calculé à partir du poids et de la taille. Il permet d'évaluer si une personne est en sous-poids, en poids normal, en surpoids ou en obésité selon les seuils définis par l'OMS.",
            },
            {
              q: "Comment calculer son IMC rapidement ?",
              a: "Divisez votre poids (kg) par le carré de votre taille (m). Exemple : 70 kg / (1,75 m)² = 22,9. Utilisez notre calculateur IMC pour un résultat instantané.",
            },
            {
              q: "Un IMC de 25 est-il en surpoids ?",
              a: "Oui, à partir de 25 on entre dans la catégorie surpoids selon l'OMS. La catégorie poids normal s'arrête à 24,9.",
            },
            {
              q: "L'IMC est-il fiable pour les sportifs ?",
              a: "Non, l'IMC est peu fiable pour les sportifs très musclés. Un athlète peut afficher un IMC élevé sans excès de masse grasse réelle.",
            },
            {
              q: "Quel IMC est considéré comme dangereux ?",
              a: "Un IMC inférieur à 16 (dénutrition sévère) ou supérieur à 40 (obésité morbide) est associé à des risques médicaux significatifs nécessitant un suivi médical.",
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
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">
        <p className="font-semibold text-blue-900 mb-3">Calculateurs liés</p>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/calculateur-imc" className="text-blue-700 hover:underline font-medium">
              → Calculateur IMC
            </Link>{" "}
            — Calculez votre IMC en quelques secondes
          </li>
          <li>
            <Link href="/calculateur-poids-ideal" className="text-blue-700 hover:underline font-medium">
              → Calculateur poids idéal
            </Link>{" "}
            — Estimez votre poids de forme selon votre morphologie
          </li>
          <li>
            <Link href="/calculateur-calories-journalieres" className="text-blue-700 hover:underline font-medium">
              → Calculateur calories journalières
            </Link>{" "}
            — Calculez vos besoins énergétiques quotidiens
          </li>
        </ul>
      </div>

      <p className="text-sm text-gray-500 border-t pt-4">
        Les informations de cet article sont fournies à titre éducatif uniquement et ne constituent pas un avis médical. Consultez un professionnel de santé pour toute question relative à votre santé.
      </p>
    </main>
  );
}

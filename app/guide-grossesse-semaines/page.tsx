import type { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    absolute: "Calcul semaines de grossesse : SA, trimestres et date de terme | calculs-sante.fr",
  },
  description:
    "Comment calculer les semaines de grossesse (SA) depuis la DDR ? Différence SA vs semaines réelles, 3 trimestres, règle de Naegele. Avec disclaimer médical.",
  alternates: {
    canonical: "https://calculs-sante.fr/guide-grossesse-semaines/",
  },
  openGraph: {
    title: "Calcul semaines de grossesse : SA, trimestres et date de terme",
    description:
      "Tout comprendre sur le calcul des semaines de grossesse : SA, DDR, 3 trimestres et règle de Naegele pour estimer la date d'accouchement.",
    url: "https://calculs-sante.fr/guide-grossesse-semaines/",
    type: "article",
  },
};

const articleSchema = generateArticleSchema({
  title: "Calcul des semaines de grossesse : SA, trimestres et date de terme",
  description:
    "Guide complet sur le calcul des semaines de grossesse : différence entre SA et semaines réelles, calcul depuis la DDR, les 3 trimestres et la règle de Naegele pour estimer la date d'accouchement.",
  url: "/guide-grossesse-semaines/",
  datePublished: "2025-01-01",
  dateModified: "2025-05-01",
});

const faqSchema = generateFAQSchema([
  {
    question: "Quelle différence entre semaines d'aménorrhée (SA) et semaines de grossesse réelles ?",
    answer:
      "Les semaines d'aménorrhée (SA) se comptent depuis le premier jour des dernières règles (DDR), tandis que les semaines de grossesse réelles se comptent depuis la conception (environ 2 semaines plus tard). Une grossesse dure 41 SA (ou environ 39 semaines de grossesse réelles). En France, le suivi médical utilise exclusivement les SA.",
  },
  {
    question: "Comment calculer les SA depuis la date de mes dernières règles ?",
    answer:
      "Soustrayez la date de vos dernières règles (DDR) à la date d'aujourd'hui pour obtenir le nombre de jours, puis divisez par 7. Par exemple, si votre DDR était il y a 70 jours, vous êtes à 10 SA. Notre calculateur de semaines de grossesse fait ce calcul automatiquement.",
  },
  {
    question: "Comment calculer la date d'accouchement prévue ?",
    answer:
      "Avec la règle de Naegele : ajoutez 1 an et 7 jours au premier jour de vos dernières règles, puis reculez de 3 mois. Ou plus simplement : ajoutez 280 jours (40 semaines) à votre DDR. Cette date n'est qu'une estimation — seulement 5% des bébés naissent exactement à la date prévue.",
  },
  {
    question: "Quand se terminent les 3 trimestres de grossesse ?",
    answer:
      "1er trimestre : de 0 à 14 SA (jusqu'à la fin du 3e mois). 2e trimestre : de 14 à 28 SA (du 4e au 6e mois). 3e trimestre : de 28 SA jusqu'à l'accouchement (du 7e au 9e mois). Ces délimitations peuvent varier légèrement selon les sources.",
  },
  {
    question: "Que faire si je ne connais pas la date de mes dernières règles ?",
    answer:
      "L'échographie du 1er trimestre (entre 11 et 13 SA + 6 jours) permet de dater la grossesse avec précision à ±5 jours en mesurant la longueur crânio-caudale (LCC) du fœtus. C'est la méthode de référence quand la DDR est inconnue ou incertaine.",
  },
]);

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Accueil", url: "/" },
  { name: "Guide semaines de grossesse", url: "/guide-grossesse-semaines/" },
]);

const combinedSchema = {
  "@context": "https://schema.org",
  "@graph": [articleSchema, faqSchema, breadcrumbSchema],
};

export default function GuideGrossessePage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />

      {/* Disclaimer médical */}
      <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mb-6 text-sm text-amber-800">
        <strong>Information médicale :</strong> Les informations de cet article sont fournies à titre éducatif uniquement. Le suivi de grossesse doit être réalisé par un médecin ou une sage-femme qualifiés. Consultez systématiquement un professionnel de santé pour toute question relative à votre grossesse.
      </div>

      {/* Fil d'Ariane */}
      <nav aria-label="Fil d'Ariane" className="mb-6 text-sm text-gray-500">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-blue-600">Accueil</Link></li>
          <li aria-hidden="true">›</li>
          <li className="text-gray-900 font-medium">Guide semaines de grossesse</li>
        </ol>
      </nav>

      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-4">
        Calcul des semaines de grossesse : SA, trimestres et date de terme
      </h1>

      <p className="text-base text-gray-600 leading-relaxed mb-8">
        Comprendre comment sont calculées les semaines de grossesse est essentiel pour suivre l&apos;évolution de votre bébé et préparer votre date d&apos;accouchement prévue. Ce guide explique la différence entre SA et semaines réelles, comment calculer depuis la DDR et les étapes clés des 3 trimestres.
      </p>

      {/* CTA principal */}
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 mb-10">
        <p className="text-rose-800 font-medium mb-3">Calculez vos semaines de grossesse</p>
        <Link
          href="/calculateur-semaines-grossesse"
          className="inline-block bg-rose-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-rose-700 transition-colors"
        >
          Calculer mes semaines de grossesse →
        </Link>
      </div>

      {/* Section 1 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          1. SA vs semaines de grossesse réelles : quelle différence ?
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          En France, la médecine utilise les <strong>semaines d&apos;aménorrhée (SA)</strong> pour dater une grossesse. Ce système peut prêter à confusion car il ne part pas de la conception, mais du premier jour des <strong>dernières règles (DDR)</strong>.
        </p>
        <div className="overflow-x-auto mb-4">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Système</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Point de départ</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Durée totale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-medium">Semaines d&apos;aménorrhée (SA)</td>
                <td className="border border-gray-300 px-4 py-2">1er jour des dernières règles (DDR)</td>
                <td className="border border-gray-300 px-4 py-2">41 SA</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-2 font-medium">Semaines de grossesse réelles</td>
                <td className="border border-gray-300 px-4 py-2">Date de conception (ovulation)</td>
                <td className="border border-gray-300 px-4 py-2">39 semaines</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-gray-700 leading-relaxed">
          La différence est d&apos;environ <strong>2 semaines</strong> : quand votre médecin dit &laquo; vous êtes à 10 SA &raquo;, votre bébé a en réalité environ 8 semaines de développement embryonnaire. En France, toutes les communications médicales (ordonnances, échographies, certificats) utilisent les SA — ne les confondez pas avec les mois calendaires.
        </p>
      </section>

      {/* Section 2 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          2. Comment calculer les SA depuis la DDR
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Le calcul est simple : comptez le nombre de jours entre le premier jour de vos dernières règles et la date du jour, puis divisez par 7.
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4 font-mono text-center">
          SA = (Date du jour − DDR) ÷ 7 jours
        </div>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Exemple :</strong> Si votre DDR était le 1er mars 2025 et que nous sommes le 15 mai 2025 :
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4 font-mono text-sm text-center">
          75 jours ÷ 7 = <strong>10 SA + 5 jours</strong>
        </div>
        <p className="text-gray-700 leading-relaxed">
          Notre{" "}
          <Link href="/calculateur-semaines-grossesse" className="text-blue-600 hover:underline">
            calculateur de semaines de grossesse
          </Link>{" "}
          effectue ce calcul automatiquement et vous indique aussi la date de terme estimée.
        </p>
      </section>

      {/* Section 3 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          3. Les 3 trimestres : dates clés et développement du bébé
        </h2>
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-bold text-blue-900 mb-2">1er trimestre : 0 à 14 SA (mois 1 à 3)</h3>
            <ul className="text-blue-800 text-sm space-y-1">
              <li>• Semaine 4–5 SA : implantation de l&apos;embryon, test de grossesse positif</li>
              <li>• Semaine 6–8 SA : formation du cœur, premières pulsations</li>
              <li>• Semaine 10–12 SA : tous les organes principaux sont formés</li>
              <li>• Semaine 11–13 SA + 6j : 1ère échographie (datation, dépistage T21)</li>
              <li>• Risque de fausse couche diminue fortement après 12 SA</li>
            </ul>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-bold text-green-900 mb-2">2e trimestre : 14 à 28 SA (mois 4 à 6)</h3>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Semaine 16–18 SA : premiers mouvements perçus par la mère</li>
              <li>• Semaine 20–24 SA : 2ème échographie morphologique</li>
              <li>• Semaine 22 SA : seuil de viabilité fœtale (grande prématurité)</li>
              <li>• Semaine 25–28 SA : le fœtus entend les sons, réagit à la lumière</li>
            </ul>
          </div>
          <div className="bg-rose-50 border border-rose-200 rounded-lg p-5">
            <h3 className="font-bold text-rose-900 mb-2">3e trimestre : 28 SA à l&apos;accouchement (mois 7 à 9)</h3>
            <ul className="text-rose-800 text-sm space-y-1">
              <li>• Semaine 30–32 SA : 3ème échographie (croissance, présentation)</li>
              <li>• Semaine 36–37 SA : maturation pulmonaire achevée</li>
              <li>• Semaine 37 SA : terme &laquo; à terme précoce &raquo; — naissance possible sans risque</li>
              <li>• Semaine 41 SA : terme théorique — déclenchement souvent proposé</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 4 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          4. Calcul de la date de terme : la règle de Naegele
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          La <strong>règle de Naegele</strong> est la méthode classique pour estimer la date prévue d&apos;accouchement (DPA). Elle est basée sur une grossesse standard de 40 semaines (280 jours) depuis la DDR.
        </p>
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <p className="font-semibold text-gray-900 mb-2">Règle de Naegele :</p>
          <ol className="text-gray-700 text-sm space-y-1">
            <li>1. Prenez le 1er jour de vos dernières règles</li>
            <li>2. Ajoutez 1 an</li>
            <li>3. Reculez de 3 mois</li>
            <li>4. Ajoutez 7 jours</li>
          </ol>
          <p className="mt-3 text-sm text-gray-600">
            <em>Exemple :</em> DDR = 1er mars 2025 → +1 an = 1er mars 2026 → -3 mois = 1er décembre 2025 → +7 jours = <strong>8 décembre 2025</strong>
          </p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
          <p className="text-amber-800 text-sm">
            <strong>Important :</strong> La date de terme est une <em>estimation</em>. Seulement 5% des bébés naissent exactement à la date prévue. Un accouchement entre 37 et 42 SA est considéré comme normal. L&apos;échographie du 1er trimestre est plus précise que la règle de Naegele pour dater la grossesse.
          </p>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">FAQ — Questions fréquentes sur le calcul de grossesse</h2>
        <div className="space-y-5">
          {[
            {
              q: "Quelle différence entre SA et semaines de grossesse réelles ?",
              a: "Les SA partent de la DDR (dernières règles), les semaines réelles de la conception. Différence d'environ 2 semaines. La médecine française utilise les SA.",
            },
            {
              q: "Comment calculer les SA depuis mes dernières règles ?",
              a: "Comptez les jours depuis le 1er jour de vos dernières règles et divisez par 7. Notre calculateur le fait automatiquement.",
            },
            {
              q: "Comment calculer ma date d'accouchement prévue ?",
              a: "Règle de Naegele : DDR + 1 an − 3 mois + 7 jours. Ou plus simplement : DDR + 280 jours.",
            },
            {
              q: "Quand se terminent les trimestres ?",
              a: "1er trimestre : 0–14 SA. 2e trimestre : 14–28 SA. 3e trimestre : 28 SA jusqu'à l'accouchement.",
            },
            {
              q: "Et si je ne connais pas ma DDR ?",
              a: "L'échographie du 1er trimestre (11–13 SA + 6j) permet de dater la grossesse précisément (±5 jours) en mesurant la longueur crânio-caudale du fœtus.",
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
      <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 mb-6">
        <p className="font-semibold text-rose-900 mb-3">Calculateurs liés</p>
        <ul className="space-y-2 text-sm">
          <li>
            <Link href="/calculateur-semaines-grossesse" className="text-rose-700 hover:underline font-medium">
              → Calculateur semaines de grossesse
            </Link>{" "}
            — Calculez vos SA et date de terme depuis votre DDR
          </li>
          <li>
            <Link href="/date-accouchement" className="text-rose-700 hover:underline font-medium">
              → Calculateur date d&apos;accouchement
            </Link>{" "}
            — Estimez votre DPA avec plusieurs méthodes
          </li>
          <li>
            <Link href="/calculateur-cycles-menstruels" className="text-rose-700 hover:underline font-medium">
              → Calculateur cycles menstruels
            </Link>{" "}
            — Suivez vos cycles et identifiez vos dates d&apos;ovulation
          </li>
        </ul>
      </div>

      <p className="text-sm text-gray-500 border-t pt-4">
        <strong>Disclaimer médical :</strong> Les informations de cet article sont fournies à titre éducatif uniquement et ne remplacent pas un suivi médical professionnel. Toute question relative à votre grossesse doit être adressée à votre médecin ou votre sage-femme.
      </p>
    </main>
  );
}

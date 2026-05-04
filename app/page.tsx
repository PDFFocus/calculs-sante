import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calculateurs de santé gratuits — Calculs Santé",
  description:
    "5 calculateurs de santé gratuits : IMC, métabolisme de base, poids idéal, calories journalières, date d'accouchement. Résultats instantanés.",
  alternates: {
    canonical: "/",
  },
};

const calculateurs = [
  {
    href: "/calculateur-imc/",
    title: "Calculateur IMC",
    description: "Calculez votre Indice de Masse Corporelle et interprétez votre résultat.",
    icon: "⚖️",
  },
  {
    href: "/calculateur-metabolisme-de-base/",
    title: "Métabolisme de base (BMR)",
    description: "Estimez votre dépense énergétique au repos avec la formule Mifflin-St Jeor.",
    icon: "🔥",
  },
  {
    href: "/calculateur-poids-ideal/",
    title: "Poids idéal",
    description: "Calculez votre poids idéal selon votre taille et votre sexe.",
    icon: "🎯",
  },
  {
    href: "/calculateur-calories-journalieres/",
    title: "Calories journalières",
    description: "Calculez vos besoins caloriques quotidiens selon votre niveau d'activité.",
    icon: "🥗",
  },
  {
    href: "/date-accouchement/",
    title: "Date d'accouchement",
    description: "Estimez la date prévue d'accouchement à partir de la date des dernières règles.",
    icon: "🤰",
  },
];

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://calculs-sante.fr";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calculs Santé",
  url: siteUrl,
  description:
    "Calculateurs de santé gratuits : IMC, métabolisme de base, poids idéal, calories journalières, date d'accouchement.",
  inLanguage: "fr-FR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function HomePage() {
  return (
    <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
          Calculateurs de santé gratuits
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Des outils simples et fiables pour calculer votre IMC, vos besoins caloriques, votre
          poids idéal et plus encore.
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
        {calculateurs.map(({ href, title, description, icon }) => (
          <li key={href}>
            <Link
              href={href}
              className="flex flex-col h-full bg-white border border-gray-200 rounded-xl p-6 hover:border-emerald-400 hover:shadow-md transition-all group"
            >
              <span className="text-3xl mb-4" aria-hidden="true">
                {icon}
              </span>
              <h2 className="text-base font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors mb-2">
                {title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{description}</p>
              <span className="mt-4 text-sm font-medium text-emerald-700 group-hover:text-emerald-800 transition-colors">
                Calculer →
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12 p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
        <strong>Avertissement médical :</strong> Les résultats de ces calculateurs sont fournis à
        titre indicatif uniquement et ne remplacent pas un avis médical professionnel. Consultez un
        médecin ou un professionnel de santé pour tout conseil personnalisé.
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Calculateurs de santé gratuits — Calculs Santé",
  description:
    "Calculateurs de santé gratuits et validés : IMC, métabolisme de base, poids idéal, calories journalières, date d'accouchement. Résultats instantanés, aucune inscription.",
  alternates: { canonical: "/" },
};

const calculateurs = [
  {
    href: "/calculateur-imc/",
    title: "Calculateur IMC",
    description: "Calculez votre Indice de Masse Corporelle et obtenez une interprétation détaillée selon les normes OMS.",
    icon: "⚖️",
    tag: "IMC & Poids",
    color: "green",
    popular: true,
    time: "30 secondes",
  },
  {
    href: "/calculateur-metabolisme-de-base/",
    title: "Métabolisme de base (BMR)",
    description: "Estimez votre dépense énergétique au repos avec la formule scientifique Mifflin-St Jeor.",
    icon: "🔥",
    tag: "Nutrition",
    color: "orange",
    popular: false,
    time: "1 minute",
  },
  {
    href: "/calculateur-poids-ideal/",
    title: "Poids idéal",
    description: "Découvrez votre poids de forme selon votre morphologie, votre taille et votre sexe.",
    icon: "🎯",
    tag: "IMC & Poids",
    color: "blue",
    popular: false,
    time: "30 secondes",
  },
  {
    href: "/calculateur-calories-journalieres/",
    title: "Calories journalières",
    description: "Calculez vos besoins caloriques quotidiens selon votre niveau d'activité physique et vos objectifs.",
    icon: "🥗",
    tag: "Nutrition",
    color: "teal",
    popular: false,
    time: "2 minutes",
  },
  {
    href: "/date-accouchement/",
    title: "Date d'accouchement",
    description: "Estimez votre date prévue d'accouchement à partir de la date de vos dernières règles.",
    icon: "🤰",
    tag: "Grossesse",
    color: "rose",
    popular: false,
    time: "30 secondes",
  },
];

const colorMap: Record<string, { border: string; icon: string; tag: string; btn: string }> = {
  green:  { border: "border-t-teal-500",  icon: "bg-teal-50",  tag: "text-teal-700 bg-teal-50",  btn: "text-teal-700 hover:text-teal-800" },
  orange: { border: "border-t-orange-400", icon: "bg-orange-50", tag: "text-orange-700 bg-orange-50", btn: "text-orange-600 hover:text-orange-700" },
  blue:   { border: "border-t-blue-500",  icon: "bg-blue-50",  tag: "text-blue-700 bg-blue-50",  btn: "text-blue-700 hover:text-blue-800" },
  teal:   { border: "border-t-cyan-500",  icon: "bg-cyan-50",  tag: "text-cyan-700 bg-cyan-50",  btn: "text-cyan-700 hover:text-cyan-800" },
  rose:   { border: "border-t-rose-400",  icon: "bg-rose-50",  tag: "text-rose-700 bg-rose-50",  btn: "text-rose-700 hover:text-rose-800" },
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://calculs-sante.fr";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Calculs Santé",
  url: siteUrl,
  description: "Calculateurs de santé gratuits : IMC, métabolisme de base, poids idéal, calories journalières, date d'accouchement.",
  inLanguage: "fr-FR",
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />

      {/* HERO */}
      <section className="bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 px-6 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full mb-6 uppercase tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse inline-block" />
              Outils validés médicalement
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight mb-5">
              Vos calculs <span className="text-teal-700">santé</span><br />
              en quelques secondes
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Des calculateurs médicaux gratuits, précis et expliqués. IMC, calories, grossesse — résultats instantanés, sans inscription.
            </p>
            <div className="flex items-center gap-8 justify-center lg:justify-start">
              {[
                { n: "50K+", l: "utilisateurs/mois" },
                { n: "5", l: "calculateurs" },
                { n: "100%", l: "gratuit" },
              ].map(({ n, l }) => (
                <div key={l} className="text-center">
                  <div className="text-2xl font-extrabold text-teal-700">{n}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-56 h-56 lg:w-72 lg:h-72 rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center text-8xl shadow-2xl flex-shrink-0">
            🩺
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {[
            { icon: "🏥", title: "Validé médicalement", desc: "Formules OMS & HAS" },
            { icon: "🔒", title: "100% confidentiel", desc: "Aucune donnée collectée" },
            { icon: "⚡", title: "Résultat instantané", desc: "Sans inscription" },
            { icon: "📱", title: "Tous appareils", desc: "Mobile, tablette, PC" },
          ].map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <span className="text-2xl">{icon}</span>
              <div>
                <div className="text-sm font-700 font-semibold text-slate-800">{title}</div>
                <div className="text-xs text-slate-500 mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALCULATEURS */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="mb-8">
          <p className="text-xs font-bold text-teal-700 uppercase tracking-widest mb-2">Nos outils</p>
          <h2 className="text-3xl font-extrabold text-slate-900">Calculateurs populaires</h2>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
          {calculateurs.map(({ href, title, description, icon, tag, color, popular, time }) => {
            const c = colorMap[color];
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative flex flex-col h-full bg-white rounded-2xl p-6 border-t-4 ${c.border} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all group border border-slate-100`}
                >
                  {popular && (
                    <span className="absolute top-4 right-4 bg-amber-100 text-amber-800 text-[11px] font-bold px-2 py-0.5 rounded-md">
                      ⭐ Populaire
                    </span>
                  )}
                  <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-2xl mb-4`}>
                    {icon}
                  </div>
                  <span className={`text-[11px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-md w-fit mb-2 ${c.tag}`}>
                    {tag}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed flex-1">{description}</p>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                    <span className="text-xs text-slate-400">⏱ {time}</span>
                    <span className={`text-sm font-semibold ${c.btn} transition-colors`}>
                      Calculer →
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      {/* FEATURED */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="bg-gradient-to-r from-teal-700 to-cyan-600 rounded-3xl p-10 sm:p-12 flex flex-col sm:flex-row items-center gap-8 text-white shadow-xl">
          <div className="flex-1 text-center sm:text-left">
            <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
              ⭐ Le plus utilisé
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Calculateur IMC complet</h3>
            <p className="text-white/80 leading-relaxed mb-6 max-w-md">
              Notre outil phare. Obtenez votre IMC, votre catégorie OMS, des conseils personnalisés et une interprétation détaillée en 30 secondes.
            </p>
            <Link
              href="/calculateur-imc/"
              className="inline-flex items-center gap-2 bg-white text-teal-700 font-bold px-6 py-3 rounded-xl hover:bg-teal-50 transition-colors shadow-sm"
            >
              Calculer mon IMC →
            </Link>
          </div>
          <div className="text-8xl flex-shrink-0 opacity-90">⚖️</div>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="max-w-6xl mx-auto px-6 pb-14">
        <div className="p-5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
          <strong>⚠️ Avertissement médical :</strong> Les résultats de ces calculateurs sont fournis à titre indicatif uniquement et ne remplacent pas un avis médical professionnel. Consultez un médecin pour tout conseil personnalisé.
        </div>
      </section>
    </main>
  );
}

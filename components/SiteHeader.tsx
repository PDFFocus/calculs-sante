import Link from "next/link";

const calculateurs = [
  { href: "/calculateur-imc/", label: "IMC" },
  { href: "/calculateur-metabolisme-de-base/", label: "Métabolisme" },
  { href: "/calculateur-poids-ideal/", label: "Poids idéal" },
  { href: "/calculateur-calories-journalieres/", label: "Calories" },
  { href: "/calculateur-glycemie/", label: "Glycémie" },
  { href: "/calculateur-tension-arterielle/", label: "Tension" },
  { href: "/calculateur-cycles-menstruels/", label: "Cycles" },
  { href: "/calculateur-semaines-grossesse/", label: "Grossesse SA" },
  { href: "/date-accouchement/", label: "Accouchement" },
  { href: "/calculateur-consommation-eau/", label: "Hydratation" },
];

export default function SiteHeader() {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center text-white text-lg shadow-sm">
              🩺
            </div>
            <span className="text-lg font-bold text-slate-800 group-hover:text-teal-700 transition-colors">
              Calculs Santé
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {calculateurs.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-sm text-slate-600 hover:text-teal-700 hover:bg-teal-50 px-3 py-2 rounded-lg transition-colors font-medium"
              >
                {label}
              </Link>
            ))}
          </nav>

          <Link
            href="/calculateur-imc/"
            className="hidden md:inline-flex items-center gap-1.5 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
          >
            Tous les outils →
          </Link>

          <details className="md:hidden">
            <summary className="list-none cursor-pointer p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Ouvrir le menu">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </summary>
            <ul className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg px-4 py-3 flex flex-col gap-1">
              {calculateurs.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="block text-sm text-slate-700 hover:text-teal-700 py-2 px-3 rounded-lg hover:bg-teal-50 transition-colors font-medium">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </div>
    </header>
  );
}

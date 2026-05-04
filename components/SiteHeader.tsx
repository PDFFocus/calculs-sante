import Link from "next/link";

const calculateurs = [
  { href: "/calculateur-imc/", label: "Calculateur IMC" },
  { href: "/calculateur-metabolisme-de-base/", label: "Métabolisme de base" },
  { href: "/calculateur-poids-ideal/", label: "Poids idéal" },
  { href: "/calculateur-calories-journalieres/", label: "Calories journalières" },
  { href: "/date-accouchement/", label: "Date d'accouchement" },
];

export default function SiteHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-lg font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
          >
            Calculs Santé
          </Link>

          <nav aria-label="Navigation principale">
            <ul className="hidden md:flex items-center gap-1">
              {calculateurs.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 px-3 py-2 rounded-md transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile nav — hamburger toggling via CSS only for SSG compatibility */}
            <details className="md:hidden">
              <summary
                className="list-none cursor-pointer p-2 rounded-md hover:bg-gray-100"
                aria-label="Ouvrir le menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </summary>
              <ul className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-md px-4 py-2 flex flex-col gap-1">
                {calculateurs.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block text-sm text-gray-700 hover:text-emerald-700 py-2 px-2 rounded-md hover:bg-emerald-50 transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>
          </nav>
        </div>
      </div>
    </header>
  );
}

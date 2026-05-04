import Link from "next/link";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 mb-10">
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-600 to-cyan-500 flex items-center justify-center text-white text-lg">
                🩺
              </div>
              <span className="text-white font-bold text-lg">Calculs Santé</span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Des calculateurs médicaux gratuits, précis et accessibles à tous. Conçus pour vous aider à mieux comprendre votre santé.
            </p>
          </div>

          <div>
            <h5 className="text-white font-semibold text-sm mb-4">Calculateurs</h5>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/calculateur-imc/" className="hover:text-teal-400 transition-colors">Calculateur IMC</Link></li>
              <li><Link href="/calculateur-metabolisme-de-base/" className="hover:text-teal-400 transition-colors">Métabolisme de base</Link></li>
              <li><Link href="/calculateur-poids-ideal/" className="hover:text-teal-400 transition-colors">Poids idéal</Link></li>
              <li><Link href="/calculateur-calories-journalieres/" className="hover:text-teal-400 transition-colors">Calories journalières</Link></li>
              <li><Link href="/date-accouchement/" className="hover:text-teal-400 transition-colors">Date d&apos;accouchement</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-semibold text-sm mb-4">Informations</h5>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/mentions-legales/" className="hover:text-teal-400 transition-colors">Mentions légales</Link></li>
              <li><Link href="/politique-de-confidentialite/" className="hover:text-teal-400 transition-colors">Politique de confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span>© {currentYear} Calculs Santé — Tous droits réservés</span>
          <span className="text-slate-500">⚠️ Ces outils ne remplacent pas un avis médical professionnel</span>
        </div>
      </div>
    </footer>
  );
}

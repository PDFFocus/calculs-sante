import Link from "next/link";

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} Calculs Santé — Informations à titre indicatif uniquement.
          </p>
          <nav aria-label="Liens légaux">
            <ul className="flex items-center gap-4">
              <li>
                <Link
                  href="/mentions-legales/"
                  className="text-sm text-gray-500 hover:text-emerald-700 transition-colors underline underline-offset-2"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-de-confidentialite/"
                  className="text-sm text-gray-500 hover:text-emerald-700 transition-colors underline underline-offset-2"
                >
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mt-4 text-xs text-gray-400 text-center sm:text-left">
          Les résultats fournis par ce site sont des estimations et ne remplacent pas un avis
          médical professionnel. Consultez un professionnel de santé pour tout conseil médical.
        </p>
      </div>
    </footer>
  );
}

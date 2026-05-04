import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales | Calculs Santé',
  description: 'Mentions légales du site calculs-sante.fr conformes à la loi LCEN.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function MentionsLegalesPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Éditeur du site</h2>
        <p>
          Le site calculs-sante.fr est édité par un particulier :<br />
          <strong>[NOM PRÉNOM]</strong><br />
          Adresse : [ADRESSE COMPLÈTE]<br />
          Contact : <a href="mailto:[EMAIL CONTACT]" className="text-blue-600 hover:underline">[EMAIL CONTACT]</a>
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Conformément à l&apos;article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
          l&apos;économie numérique (LCEN).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Hébergeur</h2>
        <p>
          Vercel Inc.<br />
          340 Pine Street Suite 701<br />
          San Francisco, CA 94104<br />
          États-Unis<br />
          <a
            href="https://vercel.com"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://vercel.com
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble des contenus présents sur ce site (textes, calculs, algorithmes, mise en page)
          est protégé par le droit d&apos;auteur. Toute reproduction, représentation ou diffusion,
          totale ou partielle, sans autorisation écrite préalable de l&apos;éditeur est interdite.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Limitation de responsabilité</h2>
        <p>
          Les calculs proposés sur calculs-sante.fr sont fournis à titre informatif et indicatif
          uniquement. Ils ne constituent en aucun cas un avis médical, un diagnostic ou une
          recommandation thérapeutique. L&apos;éditeur décline toute responsabilité pour les décisions
          prises sur la base des résultats affichés.
        </p>
        <p className="mt-2 font-semibold text-red-700">
          Consultez toujours un professionnel de santé qualifié pour tout conseil médical personnalisé.
        </p>
        <p className="mt-2">
          L&apos;éditeur s&apos;efforce de maintenir des informations exactes et à jour mais ne garantit
          pas l&apos;exactitude, l&apos;exhaustivité ou la pertinence des résultats produits par les
          outils de calcul.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Données personnelles et RGPD</h2>
        <p>
          Ce site collecte un minimum de données. Aucune donnée personnelle n&apos;est transmise à des
          tiers sans consentement préalable. Pour plus d&apos;informations, consultez notre{' '}
          <Link href="/politique-de-confidentialite" className="text-blue-600 hover:underline">
            Politique de confidentialité
          </Link>
          .
        </p>
        <p className="mt-2">
          Responsable du traitement :{' '}
          <a href="mailto:[EMAIL CONTACT]" className="text-blue-600 hover:underline">
            [EMAIL CONTACT]
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Cookies</h2>
        <p>
          Ce site utilise uniquement le localStorage de votre navigateur pour mémoriser votre choix
          de consentement aux cookies analytiques. Aucun cookie tiers n&apos;est déposé sans votre
          accord explicite. Consultez notre{' '}
          <Link href="/politique-de-confidentialite" className="text-blue-600 hover:underline">
            Politique de confidentialité
          </Link>{' '}
          pour le détail.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Liens hypertextes</h2>
        <p>
          Ce site peut contenir des liens vers des sites tiers. L&apos;éditeur n&apos;assume aucune
          responsabilité quant au contenu de ces sites externes.
        </p>
      </section>

      <p className="text-sm text-gray-400 mt-10">Dernière mise à jour : mai 2026</p>
    </main>
  )
}

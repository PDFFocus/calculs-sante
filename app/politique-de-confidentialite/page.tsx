import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Calculs Santé',
  description:
    'Politique de confidentialité et traitement des données personnelles de calculs-sante.fr — conformité RGPD.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Politique de confidentialité</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données personnelles collectées sur calculs-sante.fr
          est :<br />
          <strong>[NOM PRÉNOM]</strong><br />
          Contact RGPD :{' '}
          <a href="mailto:[EMAIL DPO]" className="text-blue-600 hover:underline">
            [EMAIL DPO]
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Données collectées</h2>

        <h3 className="font-semibold mt-4 mb-1">Données saisies dans les calculateurs</h3>
        <p>
          Les valeurs numériques saisies (poids, taille, âge, etc.) sont traitées{' '}
          <strong>localement dans votre navigateur</strong> pour produire le résultat affiché.
          Ces données ne sont jamais transmises à nos serveurs ni stockées de façon persistante.
        </p>

        <h3 className="font-semibold mt-4 mb-1">Données de navigation (avec consentement)</h3>
        <p>
          Si vous y consentez, des données anonymes de navigation (pages visitées, durée de
          session) peuvent être collectées via un outil d&apos;analyse d&apos;audience. Ces
          données ne permettent pas de vous identifier personnellement.
        </p>

        <h3 className="font-semibold mt-4 mb-1">Préférence de consentement</h3>
        <p>
          Votre choix concernant les cookies analytiques est sauvegardé dans le{' '}
          <strong>localStorage</strong> de votre navigateur uniquement (clé :{' '}
          <code className="bg-gray-100 px-1 rounded">consent_choice</code>). Cette information
          reste sur votre appareil et n&apos;est jamais transmise à des tiers.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">3. Finalités et bases légales</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Finalité</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Base légale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">
                  Fonctionnement des calculateurs (traitement local, sans transmission)
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  Intérêt légitime — art. 6.1.f RGPD (prestation du service demandé)
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">
                  Mémorisation du choix de consentement (localStorage)
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  Intérêt légitime — art. 6.1.f RGPD (fonctionnement de la bannière)
                </td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-3 py-2">
                  Analyse d&apos;audience anonymisée
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  Consentement — art. 6.1.a RGPD
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">4. Durée de conservation</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            Données de calcul saisies : <strong>non conservées</strong> — traitement en temps
            réel dans le navigateur, aucun stockage côté serveur.
          </li>
          <li>
            Préférence de consentement (localStorage) : jusqu&apos;à suppression manuelle par
            l&apos;utilisateur ou expiration du stockage navigateur.
          </li>
          <li>
            Données d&apos;analyse anonymisées : 13 mois maximum (recommandations CNIL).
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">5. Vos droits (RGPD)</h2>
        <p>Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants :</p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>
            <strong>Accès</strong> : obtenir confirmation et copie des données vous concernant.
          </li>
          <li>
            <strong>Rectification</strong> : corriger des données inexactes.
          </li>
          <li>
            <strong>Effacement</strong> : demander la suppression (« droit à l&apos;oubli »).
          </li>
          <li>
            <strong>Portabilité</strong> : recevoir vos données dans un format structuré.
          </li>
          <li>
            <strong>Opposition</strong> : vous opposer aux traitements fondés sur l&apos;intérêt légitime.
          </li>
          <li>
            <strong>Retrait du consentement</strong> : retirer votre accord à tout moment, sans
            remettre en cause la licéité des traitements antérieurs.
          </li>
        </ul>
        <p className="mt-3">
          Pour exercer ces droits :{' '}
          <a href="mailto:[EMAIL DPO]" className="text-blue-600 hover:underline">
            [EMAIL DPO]
          </a>
          .
        </p>
        <p className="mt-2 text-sm text-gray-600">
          Vous pouvez également introduire une réclamation auprès de la{' '}
          <a
            href="https://www.cnil.fr"
            className="text-blue-600 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            CNIL
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">6. Transferts hors Union Européenne</h2>
        <p>
          Aucune donnée de contenu utilisateur n&apos;est transférée hors de l&apos;Union
          Européenne. Les logs d&apos;infrastructure sont gérés par Vercel Inc. (États-Unis)
          dans le cadre de son contrat de sous-traitance, couverts par des clauses contractuelles
          types (DPA Vercel disponible sur vercel.com/legal/dpa).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">7. Politique cookies et localStorage</h2>

        <h3 className="font-semibold mt-3 mb-1">Cookies strictement nécessaires</h3>
        <p>Aucun cookie technique n&apos;est déposé par défaut sur ce site.</p>

        <h3 className="font-semibold mt-3 mb-1">localStorage — préférence de consentement</h3>
        <p>
          Nous stockons votre réponse à la bannière de consentement sous la clé{' '}
          <code className="bg-gray-100 px-1 rounded">consent_choice</code> dans le localStorage
          de votre navigateur. Cette valeur reste sur votre appareil et n&apos;est pas transmise
          à des tiers. Vous pouvez la supprimer à tout moment dans les paramètres de votre
          navigateur (rubrique « Données de site » ou équivalent).
        </p>

        <h3 className="font-semibold mt-3 mb-1">Cookies analytiques (avec consentement)</h3>
        <p>
          Si vous acceptez les cookies analytiques via la bannière, un outil de mesure
          d&apos;audience peut activer des traceurs. Ces traceurs sont inactifs par défaut et
          peuvent être désactivés à tout moment en refusant ou retirant votre consentement.
        </p>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-3 py-2 text-left">Nom / Clé</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Type</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Finalité</th>
                <th className="border border-gray-300 px-3 py-2 text-left">Durée</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-3 py-2">
                  <code>consent_choice</code>
                </td>
                <td className="border border-gray-300 px-3 py-2">localStorage</td>
                <td className="border border-gray-300 px-3 py-2">
                  Mémorisation du choix de consentement
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  Jusqu&apos;à suppression manuelle
                </td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-3 py-2">Traceurs analytiques</td>
                <td className="border border-gray-300 px-3 py-2">Cookie(s) tiers</td>
                <td className="border border-gray-300 px-3 py-2">
                  Mesure d&apos;audience anonymisée (avec consentement)
                </td>
                <td className="border border-gray-300 px-3 py-2">13 mois max.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Sécurité</h2>
        <p>
          Ce site est hébergé sur l&apos;infrastructure Vercel avec HTTPS obligatoire. Les données
          de calcul ne transitant pas par nos serveurs, le risque de fuite de données personnelles
          de santé est nul par conception (<em>privacy by design</em>).
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Mises à jour de la présente politique</h2>
        <p>
          Cette politique peut être mise à jour. La date de dernière modification est indiquée
          ci-dessous. Toute modification substantielle fera l&apos;objet d&apos;une information
          visible sur le site.
        </p>
      </section>

      <p className="text-sm text-gray-400 mt-10">Dernière mise à jour : mai 2026</p>
    </main>
  )
}

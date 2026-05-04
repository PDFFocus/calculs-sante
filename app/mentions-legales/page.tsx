import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Calculs Santé.",
  alternates: {
    canonical: "/mentions-legales/",
  },
  robots: {
    index: false,
  },
};

export default function MentionsLegalesPage() {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Mentions légales</h1>
      <p className="text-gray-500 text-sm">Contenu à renseigner par l&apos;équipe Legal.</p>
    </main>
  );
}

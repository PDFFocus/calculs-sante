import { ReactNode } from "react";

interface CalculatorShellProps {
  title: string;
  description: string;
  jsonLd?: Record<string, unknown>;
  children: ReactNode;
}

export default function CalculatorShell({
  title,
  description,
  jsonLd,
  children,
}: CalculatorShellProps) {
  return (
    <main className="flex-1 max-w-3xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12">
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}

      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight">{title}</h1>
        <p className="mt-3 text-base text-gray-600 leading-relaxed">{description}</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8">
        {children}
      </div>

      <p className="mt-6 text-xs text-gray-400 text-center">
        Résultats à titre indicatif uniquement — ne remplace pas un avis médical professionnel.
      </p>
    </main>
  );
}

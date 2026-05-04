"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "calculs-sante-consent";

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (!stored) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) — don't show banner
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "accepted");
    } catch {
      // silently ignore if localStorage is unavailable
    }
    setVisible(false);
  };

  const decline = () => {
    try {
      localStorage.setItem(CONSENT_KEY, "declined");
    } catch {
      // silently ignore
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Bandeau de consentement RGPD"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-sm text-gray-600 flex-1">
          Ce site n&apos;utilise pas de cookies tiers. Des données sont enregistrées localement
          (localStorage) pour mémoriser vos préférences.{" "}
          <a
            href="/politique-de-confidentialite/"
            className="underline hover:text-emerald-700 transition-colors"
          >
            En savoir plus
          </a>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="text-sm text-gray-500 hover:text-gray-700 underline underline-offset-2 transition-colors"
          >
            Refuser
          </button>
          <button
            onClick={accept}
            className="text-sm bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}

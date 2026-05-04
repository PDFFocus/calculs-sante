"use client";

import { useState } from "react";
import { calculerCycles } from "@/lib/calculators/cycles";
import Link from "next/link";

interface Errors {
  ddr?: string;
  dureeCycle?: string;
}

export default function CyclesCalculateur() {
  const [ddr, setDdr] = useState("");
  const [dureeCycle, setDureeCycle] = useState(28);
  const [result, setResult] = useState<ReturnType<typeof calculerCycles> | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    if (!ddr) {
      e.ddr = "Veuillez saisir la date de vos dernières règles.";
    } else {
      const d = new Date(ddr);
      const today = new Date();
      const maxPast = new Date();
      maxPast.setDate(today.getDate() - 90);
      if (isNaN(d.getTime())) e.ddr = "Date invalide.";
      else if (d > today) e.ddr = "La date ne peut pas être dans le futur.";
      else if (d < maxPast) e.ddr = "La date semble trop ancienne (plus de 90 jours).";
    }
    if (dureeCycle < 21 || dureeCycle > 35) {
      e.dureeCycle = "La durée du cycle doit être entre 21 et 35 jours.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleCalculer() {
    if (!validate()) return;
    setResult(calculerCycles(new Date(ddr), dureeCycle, 3));
  }

  return (
    <div className="space-y-6">
      {/* Disclaimer médical fort */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>⚠️ Avertissement médical :</strong> Ce calculateur est un outil indicatif basé
        sur des cycles théoriques. Les cycles réels varient. Ne pas utiliser pour la contraception.
        Consultez un gynécologue pour un suivi personnalisé.
      </div>

      {/* DDR */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="ddr-cycles">
          Date des dernières règles (DDR)
        </label>
        <input
          id="ddr-cycles"
          type="date"
          value={ddr}
          onChange={(e) => setDdr(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
          className="w-full sm:w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        {errors.ddr && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.ddr}</p>
        )}
      </div>

      {/* Durée du cycle */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="duree-cycle">
          Durée du cycle ({dureeCycle} jours)
        </label>
        <div className="flex items-center gap-4">
          <input
            id="duree-cycle"
            type="range"
            min={21}
            max={35}
            value={dureeCycle}
            onChange={(e) => setDureeCycle(Number(e.target.value))}
            className="flex-1 accent-emerald-600"
          />
          <input
            type="number"
            min={21}
            max={35}
            value={dureeCycle}
            onChange={(e) => setDureeCycle(Number(e.target.value))}
            className="w-20 rounded-md border border-gray-300 px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Durée du cycle en jours"
          />
        </div>
        {errors.dureeCycle && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.dureeCycle}</p>
        )}
      </div>

      <button
        onClick={handleCalculer}
        className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Calculer mes cycles
      </button>

      {/* Résultats */}
      <div className="min-h-[200px]">
        {result ? (
          <div className="space-y-5">
            {/* Prochain cycle */}
            <div className="rounded-lg border-2 border-emerald-300 bg-emerald-50 p-5">
              <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-1">
                Prochaines règles
              </p>
              <p className="text-xl font-bold text-emerald-900">
                {result.cycles[0].prochaines_regles_formatted}
              </p>
              <p className="text-sm text-emerald-700 mt-1">
                Dans {result.joursAvantProchaines} jour{result.joursAvantProchaines > 1 ? "s" : ""}
              </p>
            </div>

            {/* Ovulation */}
            <div className="rounded-lg border-2 border-rose-300 bg-rose-50 p-5">
              <p className="text-xs font-semibold text-rose-600 uppercase tracking-wide mb-1">
                Ovulation probable
              </p>
              <p className="text-lg font-bold text-rose-900">
                {result.cycles[0].ovulation_formatted}
              </p>
              <p className="text-sm text-rose-700 mt-1">
                Fenêtre fertile : {result.cycles[0].fenetre_fertile_formatted}
              </p>
            </div>

            {/* 3 cycles suivants */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">3 prochains cycles</h3>
              <div className="space-y-3">
                {result.cycles.map((cycle, i) => (
                  <div key={i} className="rounded-lg border border-gray-200 bg-white p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase">Cycle {i + 1}</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                      <div>
                        <span className="text-gray-500">Règles : </span>
                        <span className="font-medium text-gray-800">{cycle.prochaines_regles.toLocaleDateString("fr-FR")}</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Ovulation : </span>
                        <span className="font-medium text-rose-700">{cycle.ovulation.toLocaleDateString("fr-FR")}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/calculateur-semaines-grossesse/" className="text-emerald-700 underline hover:text-emerald-900">
                Semaines de grossesse
              </Link>
              {" · "}
              <Link href="/date-accouchement/" className="text-emerald-700 underline hover:text-emerald-900">
                Date d&apos;accouchement
              </Link>
            </p>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-5 text-center text-sm text-gray-400">
            Renseignez la date de vos dernières règles et cliquez sur « Calculer »
          </div>
        )}
      </div>
    </div>
  );
}

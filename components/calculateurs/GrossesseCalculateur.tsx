"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import { calculerDPA } from "@/lib/calculators/grossesse";
import Link from "next/link";

interface Errors {
  ddr?: string;
  dureeCycle?: string;
}

export default function GrossesseCalculateur() {
  const [ddr, setDdr] = useState("");
  const [dureeCycle, setDureeCycle] = useState(28);
  const [result, setResult] = useState<ReturnType<typeof calculerDPA> | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    if (!ddr) {
      e.ddr = "Veuillez saisir la date de vos dernières règles.";
    } else {
      const d = new Date(ddr);
      const today = new Date();
      const maxPast = new Date();
      maxPast.setDate(today.getDate() - 300);
      if (isNaN(d.getTime())) e.ddr = "Date invalide.";
      else if (d > today) e.ddr = "La date des dernières règles ne peut pas être dans le futur.";
      else if (d < maxPast) e.ddr = "La date semble trop ancienne (plus de 10 mois).";
    }
    if (dureeCycle < 20 || dureeCycle > 45)
      e.dureeCycle = "La durée du cycle doit être entre 20 et 45 jours.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleCalculer() {
    if (!validate()) return;
    setResult(calculerDPA(new Date(ddr), dureeCycle));
  }

  const trimestreColors: Record<1 | 2 | 3, "info" | "warning" | "success"> = {
    1: "info",
    2: "warning",
    3: "success",
  };

  return (
    <div className="space-y-6">
      {/* Date des dernières règles */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="ddr">
          Date des dernières règles (DDR)
        </label>
        <input
          id="ddr"
          type="date"
          value={ddr}
          onChange={(e) => setDdr(e.target.value)}
          max={new Date().toISOString().split("T")[0]}
          className="w-full sm:w-64 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        {errors.ddr && <p className="mt-1 text-xs text-red-600" role="alert">{errors.ddr}</p>}
      </div>

      {/* Durée du cycle */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="cycle">
          Durée du cycle menstruel (jours)
        </label>
        <div className="flex items-center gap-4">
          <input
            id="cycle"
            type="range"
            min={20}
            max={45}
            value={dureeCycle}
            onChange={(e) => setDureeCycle(Number(e.target.value))}
            className="flex-1 accent-emerald-600"
          />
          <input
            type="number"
            min={20}
            max={45}
            value={dureeCycle}
            onChange={(e) => setDureeCycle(Number(e.target.value))}
            className="w-20 rounded-md border border-gray-300 px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <span className="text-sm text-gray-500 w-8">jours</span>
        </div>
        {dureeCycle !== 28 && (
          <p className="mt-1 text-xs text-amber-600">
            Ajustement de {dureeCycle - 28 > 0 ? "+" : ""}{dureeCycle - 28} jours par rapport à 28 jours.
          </p>
        )}
        {errors.dureeCycle && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.dureeCycle}</p>
        )}
      </div>

      <button
        onClick={handleCalculer}
        className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Calculer la date d&apos;accouchement
      </button>

      {/* Zone résultat — hauteur fixe pour éviter le CLS */}
      <div className="min-h-[220px]">
        {result ? (
          <div className="space-y-4">
            <ResultCard
              label="Date prévue d'accouchement (DPA)"
              value={result.dpaFormatted}
              interpretation={result.trimestreLabel}
              status={trimestreColors[result.trimestre]}
            />

            {/* Détails grossesse */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-center">
                <p className="text-2xl font-bold text-emerald-700">{result.semainesActuelles}</p>
                <p className="text-xs text-gray-500 mt-1">Semaines de grossesse</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-center">
                <p className="text-2xl font-bold text-blue-700">{result.joursRestants}</p>
                <p className="text-xs text-gray-500 mt-1">Jours avant le terme</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-center col-span-2 sm:col-span-1">
                <p className="text-2xl font-bold text-amber-700">T{result.trimestre}</p>
                <p className="text-xs text-gray-500 mt-1">{result.trimestre}er trimestre</p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/calculateur-imc/" className="text-emerald-700 underline hover:text-emerald-900">
                Calculateur IMC
              </Link>
              {" · "}
              <Link href="/calculateur-calories-journalieres/" className="text-emerald-700 underline hover:text-emerald-900">
                Besoins Caloriques
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

"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import { calculerSemainesGrossesse, InputMode } from "@/lib/calculators/semaines-grossesse";
import Link from "next/link";

interface Errors {
  date?: string;
}

export default function SemainesGrossesseCalculateur() {
  const [mode, setMode] = useState<InputMode>("ddr");
  const [date, setDate] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculerSemainesGrossesse> | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  const today = new Date().toISOString().split("T")[0];

  function validate(): boolean {
    const e: Errors = {};
    if (!date) {
      e.date = mode === "ddr"
        ? "Veuillez saisir la date de vos dernières règles."
        : "Veuillez saisir la date de conception.";
    } else {
      const d = new Date(date);
      const todayDate = new Date();
      const maxPast = new Date();
      maxPast.setDate(todayDate.getDate() - 300);
      if (isNaN(d.getTime())) e.date = "Date invalide.";
      else if (d > todayDate) e.date = "La date ne peut pas être dans le futur.";
      else if (d < maxPast) e.date = "La date semble trop ancienne (plus de 10 mois).";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleCalculer() {
    if (!validate()) return;
    setResult(calculerSemainesGrossesse(new Date(date), mode));
  }

  const trimestreColors: Record<1 | 2 | 3, "info" | "warning" | "success"> = {
    1: "info",
    2: "warning",
    3: "success",
  };

  return (
    <div className="space-y-6">
      {/* Mode de calcul */}
      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 mb-2">Mode de calcul</legend>
        <div className="flex flex-col sm:flex-row gap-3">
          {(
            [
              { value: "ddr", label: "Dernières règles", desc: "DDR — le plus courant" },
              { value: "conception", label: "Date de conception", desc: "Si connue précisément" },
            ] as { value: InputMode; label: string; desc: string }[]
          ).map(({ value, label, desc }) => (
            <label
              key={value}
              className={`flex-1 flex items-start gap-3 rounded-lg border-2 p-3 cursor-pointer transition-colors ${
                mode === value
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="mode"
                value={value}
                checked={mode === value}
                onChange={() => { setMode(value); setResult(null); setDate(""); }}
                className="mt-0.5 accent-emerald-600"
              />
              <span>
                <span className="block text-sm font-medium text-gray-800">{label}</span>
                <span className="text-xs text-gray-500">{desc}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="date-grossesse">
          {mode === "ddr" ? "Date des dernières règles (DDR)" : "Date de conception"}
        </label>
        <input
          id="date-grossesse"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          max={today}
          className="w-full sm:w-56 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        {errors.date && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.date}</p>
        )}
      </div>

      <button
        onClick={handleCalculer}
        className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Calculer les semaines de grossesse
      </button>

      {/* Résultats */}
      <div className="min-h-[250px]">
        {result ? (
          <div className="space-y-4">
            <ResultCard
              label={`${result.sa} SA + ${result.joursSupplementaires} j`}
              value={result.trimestreLabel}
              interpretation={`Date de terme estimée : ${result.dateTermeFormatted}`}
              status={trimestreColors[result.trimestre]}
            />

            {/* Progression */}
            <div className="rounded-lg bg-white border border-gray-200 p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Progression</span>
                <span className="text-sm font-bold text-emerald-700">{result.pourcentageAccompli}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-emerald-500 h-3 rounded-full transition-all"
                  style={{ width: `${result.pourcentageAccompli}%` }}
                  role="progressbar"
                  aria-valuenow={result.pourcentageAccompli}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">{result.joursRestants} jours avant le terme</p>
            </div>

            {/* Infos résumé */}
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 text-center">
                <p className="text-xl font-bold text-emerald-700">{result.sa}</p>
                <p className="text-xs text-gray-500 mt-0.5">Semaines (SA)</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 text-center">
                <p className="text-xl font-bold text-blue-700">T{result.trimestre}</p>
                <p className="text-xs text-gray-500 mt-0.5">Trimestre</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-3 text-center">
                <p className="text-xl font-bold text-amber-700">{result.joursRestants}</p>
                <p className="text-xs text-gray-500 mt-0.5">Jours restants</p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/date-accouchement/" className="text-emerald-700 underline hover:text-emerald-900">
                Date d&apos;accouchement
              </Link>
              {" · "}
              <Link href="/calculateur-cycles-menstruels/" className="text-emerald-700 underline hover:text-emerald-900">
                Cycles menstruels
              </Link>
            </p>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-5 text-center text-sm text-gray-400">
            Renseignez une date et cliquez sur « Calculer »
          </div>
        )}
      </div>
    </div>
  );
}

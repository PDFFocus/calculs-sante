"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import {
  calculerGlycemie,
  GlycemieUnite,
  GlycemieContexte,
} from "@/lib/calculators/glycemie";
import Link from "next/link";

interface Errors {
  valeur?: string;
}

export default function GlycemieCalculateur() {
  const [valeur, setValeur] = useState("");
  const [unite, setUnite] = useState<GlycemieUnite>("mmol/L");
  const [contexte, setContexte] = useState<GlycemieContexte>("jeun");
  const [result, setResult] = useState<ReturnType<typeof calculerGlycemie> | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    const v = parseFloat(valeur);
    if (!valeur || isNaN(v)) {
      e.valeur = "Veuillez saisir une valeur numérique.";
    } else if (unite === "mmol/L" && (v < 1 || v > 35)) {
      e.valeur = "Valeur hors plage normale (1–35 mmol/L).";
    } else if (unite === "mg/dL" && (v < 18 || v > 630)) {
      e.valeur = "Valeur hors plage normale (18–630 mg/dL).";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleCalculer() {
    if (!validate()) return;
    setResult(calculerGlycemie(parseFloat(valeur), unite, contexte));
  }

  return (
    <div className="space-y-6">
      {/* Disclaimer médical */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>⚠️ Important :</strong> Ce calculateur est un outil d&apos;information uniquement.
        Seul un médecin peut poser un diagnostic de diabète.
      </div>

      {/* Valeur */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="glycemie-valeur">
          Valeur de glycémie
        </label>
        <div className="flex items-center gap-3">
          <input
            id="glycemie-valeur"
            type="number"
            step="0.1"
            min="0"
            value={valeur}
            onChange={(e) => setValeur(e.target.value)}
            placeholder={unite === "mmol/L" ? "Ex : 5.5" : "Ex : 99"}
            className="w-40 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <select
            value={unite}
            onChange={(e) => {
              setUnite(e.target.value as GlycemieUnite);
              setResult(null);
              setValeur("");
            }}
            className="rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Unité de mesure"
          >
            <option value="mmol/L">mmol/L</option>
            <option value="mg/dL">mg/dL</option>
          </select>
        </div>
        {errors.valeur && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.valeur}</p>
        )}
      </div>

      {/* Contexte */}
      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 mb-2">Contexte de mesure</legend>
        <div className="flex flex-col sm:flex-row gap-3">
          {(
            [
              { value: "jeun", label: "À jeun", desc: "8h sans manger" },
              { value: "postprandial", label: "Post-prandial", desc: "2h après un repas" },
            ] as { value: GlycemieContexte; label: string; desc: string }[]
          ).map(({ value, label, desc }) => (
            <label
              key={value}
              className={`flex-1 flex items-start gap-3 rounded-lg border-2 p-3 cursor-pointer transition-colors ${
                contexte === value
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="contexte"
                value={value}
                checked={contexte === value}
                onChange={() => { setContexte(value); setResult(null); }}
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

      <button
        onClick={handleCalculer}
        className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Analyser ma glycémie
      </button>

      {/* Résultats */}
      <div className="min-h-[200px]">
        {result ? (
          <div className="space-y-4">
            <ResultCard
              label={result.categorieLabel}
              value={`${result.valeurMmol} mmol/L`}
              unit={`(${result.valeurMgdl} mg/dL)`}
              interpretation={result.interpretation}
              status={result.status}
            />

            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 text-sm text-blue-800">
              <strong>Conseil :</strong> {result.conseil}
            </div>

            {/* Conversion rapide */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-center">
                <p className="text-xl font-bold text-gray-800">{result.valeurMmol}</p>
                <p className="text-xs text-gray-500 mt-1">mmol/L</p>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-200 p-4 text-center">
                <p className="text-xl font-bold text-gray-800">{result.valeurMgdl}</p>
                <p className="text-xs text-gray-500 mt-1">mg/dL</p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/calculateur-tension-arterielle/" className="text-emerald-700 underline hover:text-emerald-900">
                Tension artérielle
              </Link>
              {" · "}
              <Link href="/calculateur-imc/" className="text-emerald-700 underline hover:text-emerald-900">
                Calculateur IMC
              </Link>
            </p>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-5 text-center text-sm text-gray-400">
            Renseignez votre valeur de glycémie et cliquez sur « Analyser »
          </div>
        )}
      </div>
    </div>
  );
}

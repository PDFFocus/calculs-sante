"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import { calculerPoidsIdeal } from "@/lib/calculators/poids-ideal";
import type { Sexe } from "@/lib/calculators/bmr";
import Link from "next/link";

interface Errors {
  taille?: string;
  poidsActuel?: string;
}

export default function PoidsIdealCalculateur() {
  const [taille, setTaille] = useState(170);
  const [sexe, setSexe] = useState<Sexe>("homme");
  const [poidsActuel, setPoidsActuel] = useState<string>("");
  const [result, setResult] = useState<ReturnType<typeof calculerPoidsIdeal> | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    if (taille < 100 || taille > 250) e.taille = "La taille doit être entre 100 et 250 cm.";
    if (poidsActuel !== "") {
      const v = Number(poidsActuel);
      if (isNaN(v) || v < 10 || v > 300) e.poidsActuel = "Le poids doit être entre 10 et 300 kg.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleCalculer() {
    if (!validate()) return;
    const pActuel = poidsActuel !== "" ? Number(poidsActuel) : undefined;
    setResult(calculerPoidsIdeal(taille, sexe, pActuel));
  }

  return (
    <div className="space-y-6">
      {/* Sexe */}
      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 mb-2">Sexe</legend>
        <div className="flex gap-4">
          {(["homme", "femme"] as Sexe[]).map((s) => (
            <label key={s} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="pi-sexe"
                value={s}
                checked={sexe === s}
                onChange={() => setSexe(s)}
                className="accent-emerald-600"
              />
              <span className="text-sm text-gray-700 capitalize">{s}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Taille */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="pi-taille">
          Taille (cm)
        </label>
        <div className="flex items-center gap-4">
          <input
            id="pi-taille"
            type="range"
            min={100}
            max={220}
            value={taille}
            onChange={(e) => setTaille(Number(e.target.value))}
            className="flex-1 accent-emerald-600"
          />
          <input
            type="number"
            min={100}
            max={250}
            value={taille}
            onChange={(e) => setTaille(Number(e.target.value))}
            className="w-20 rounded-md border border-gray-300 px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <span className="text-sm text-gray-500 w-6">cm</span>
        </div>
        {errors.taille && <p className="mt-1 text-xs text-red-600" role="alert">{errors.taille}</p>}
      </div>

      {/* Poids actuel (optionnel) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="pi-poids-actuel">
          Poids actuel (kg) — <span className="font-normal text-gray-500">optionnel</span>
        </label>
        <input
          id="pi-poids-actuel"
          type="number"
          min={10}
          max={300}
          value={poidsActuel}
          onChange={(e) => setPoidsActuel(e.target.value)}
          placeholder="Ex : 75"
          className="w-40 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
        {errors.poidsActuel && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.poidsActuel}</p>
        )}
      </div>

      <button
        onClick={handleCalculer}
        className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Calculer mon poids idéal
      </button>

      {/* Zone résultat — hauteur fixe pour éviter le CLS */}
      <div className="min-h-[220px]">
        {result ? (
          <div className="space-y-4">
            <ResultCard
              label="Poids idéal (Lorentz)"
              value={result.lorentz}
              unit="kg"
              interpretation={
                result.delta !== null
                  ? result.delta > 0
                    ? `Vous êtes ${result.delta} kg au-dessus de votre poids idéal.`
                    : result.delta < 0
                    ? `Vous êtes ${Math.abs(result.delta)} kg en dessous de votre poids idéal.`
                    : "Vous êtes exactement à votre poids idéal !"
                  : "Poids idéal selon la formule de Lorentz"
              }
              status={
                result.delta === null || result.delta === 0
                  ? "success"
                  : Math.abs(result.delta) <= 5
                  ? "warning"
                  : "danger"
              }
            />

            {/* Tableau comparatif */}
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="w-full text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-600">Méthode</th>
                    <th className="px-4 py-2 text-right font-medium text-gray-600">Poids idéal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-2 text-gray-700">Lorentz</td>
                    <td className="px-4 py-2 text-right font-semibold text-emerald-700">{result.lorentz} kg</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-700">
                      Creff <span className="text-xs text-gray-400">(morphologie standard)</span>
                    </td>
                    <td className="px-4 py-2 text-right font-semibold text-gray-700">{result.creff} kg</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-gray-700">
                      Monnerot-Dumaine <span className="text-xs text-gray-400">(poignet 18 cm)</span>
                    </td>
                    <td className="px-4 py-2 text-right font-semibold text-gray-700">{result.monnerotDumaine} kg</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/calculateur-imc/" className="text-emerald-700 underline hover:text-emerald-900">
                Calculateur IMC
              </Link>
              {" · "}
              <Link href="/calculateur-calories-journalieres/" className="text-emerald-700 underline hover:text-emerald-900">
                Calories Journalières
              </Link>
            </p>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-5 text-center text-sm text-gray-400">
            Renseignez votre taille et votre sexe, puis cliquez sur « Calculer »
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import { calculerIMC, imcCouleurBarre, imcPositionBarre } from "@/lib/calculators/imc";
import Link from "next/link";

interface Errors {
  poids?: string;
  taille?: string;
}

export default function IMCCalculateur() {
  const [poids, setPoids] = useState(70);
  const [taille, setTaille] = useState(170);
  const [result, setResult] = useState<ReturnType<typeof calculerIMC> | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    if (poids < 10 || poids > 300) e.poids = "Le poids doit être entre 10 et 300 kg.";
    if (taille < 50 || taille > 250) e.taille = "La taille doit être entre 50 et 250 cm.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleCalculer() {
    if (!validate()) return;
    setResult(calculerIMC(poids, taille));
  }

  const posBarre = result ? imcPositionBarre(result.valeur) : null;
  const couleurBarre = result ? imcCouleurBarre(result.valeur) : null;

  return (
    <div className="space-y-6">
      {/* Poids */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="poids">
          Poids (kg)
        </label>
        <div className="flex items-center gap-4">
          <input
            id="poids"
            type="range"
            min={10}
            max={200}
            value={poids}
            onChange={(e) => setPoids(Number(e.target.value))}
            className="flex-1 accent-emerald-600"
            aria-label="Poids en kilogrammes"
          />
          <input
            type="number"
            min={10}
            max={300}
            value={poids}
            onChange={(e) => setPoids(Number(e.target.value))}
            className="w-20 rounded-md border border-gray-300 px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Valeur du poids"
          />
          <span className="text-sm text-gray-500 w-6">kg</span>
        </div>
        {errors.poids && <p className="mt-1 text-xs text-red-600" role="alert">{errors.poids}</p>}
      </div>

      {/* Taille */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="taille">
          Taille (cm)
        </label>
        <div className="flex items-center gap-4">
          <input
            id="taille"
            type="range"
            min={50}
            max={220}
            value={taille}
            onChange={(e) => setTaille(Number(e.target.value))}
            className="flex-1 accent-emerald-600"
            aria-label="Taille en centimètres"
          />
          <input
            type="number"
            min={50}
            max={250}
            value={taille}
            onChange={(e) => setTaille(Number(e.target.value))}
            className="w-20 rounded-md border border-gray-300 px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
            aria-label="Valeur de la taille"
          />
          <span className="text-sm text-gray-500 w-6">cm</span>
        </div>
        {errors.taille && <p className="mt-1 text-xs text-red-600" role="alert">{errors.taille}</p>}
      </div>

      <button
        onClick={handleCalculer}
        className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Calculer mon IMC
      </button>

      {/* Zone résultat — hauteur fixe pour éviter le CLS */}
      <div className="min-h-[180px]">
        {result ? (
          <div className="space-y-4">
            <ResultCard
              label="Votre IMC"
              value={result.valeur}
              unit="kg/m²"
              interpretation={`${result.categorie.charAt(0).toUpperCase() + result.categorie.slice(1)} — ${result.interpretation}`}
              status={result.status}
            />

            {/* Barre couleur IMC */}
            <div aria-hidden="true">
              <div className="relative h-4 rounded-full overflow-hidden bg-gradient-to-r from-blue-400 via-emerald-400 via-amber-400 to-red-500">
                {posBarre !== null && (
                  <div
                    className="absolute top-0 w-3 h-4 bg-white border-2 border-gray-700 rounded-sm -translate-x-1/2"
                    style={{ left: `${posBarre}%` }}
                  />
                )}
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>Dénutrition</span>
                <span>Normal</span>
                <span>Surpoids</span>
                <span>Obésité</span>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/calculateur-poids-ideal/" className="text-emerald-700 underline hover:text-emerald-900">
                Calculateur Poids Idéal
              </Link>
              {" · "}
              <Link href="/calculateur-calories-journalieres/" className="text-emerald-700 underline hover:text-emerald-900">
                Calories Journalières
              </Link>
            </p>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-5 text-center text-sm text-gray-400">
            Renseignez vos données et cliquez sur « Calculer mon IMC »
          </div>
        )}
      </div>
    </div>
  );
}

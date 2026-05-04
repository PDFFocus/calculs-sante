"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import { calculerTension } from "@/lib/calculators/tension";
import Link from "next/link";

interface Errors {
  systolique?: string;
  diastolique?: string;
}

export default function TensionCalculateur() {
  const [systolique, setSystolique] = useState("");
  const [diastolique, setDiastolique] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculerTension> | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    const sys = parseInt(systolique, 10);
    const dia = parseInt(diastolique, 10);

    if (!systolique || isNaN(sys)) {
      e.systolique = "Veuillez saisir la pression systolique.";
    } else if (sys < 60 || sys > 300) {
      e.systolique = "Valeur hors plage (60–300 mmHg).";
    }

    if (!diastolique || isNaN(dia)) {
      e.diastolique = "Veuillez saisir la pression diastolique.";
    } else if (dia < 30 || dia > 200) {
      e.diastolique = "Valeur hors plage (30–200 mmHg).";
    }

    if (!e.systolique && !e.diastolique && sys <= dia) {
      e.systolique = "La pression systolique doit être supérieure à la diastolique.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleCalculer() {
    if (!validate()) return;
    setResult(calculerTension(parseInt(systolique, 10), parseInt(diastolique, 10)));
  }

  return (
    <div className="space-y-6">
      {/* Disclaimer médical */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-sm text-amber-800">
        <strong>⚠️ Important :</strong> Ce calculateur est basé sur la classification ESC 2018.
        Seul un médecin peut diagnostiquer une hypertension artérielle.
      </div>

      {/* Inputs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="systolique">
            Pression systolique
            <span className="text-gray-400 font-normal ml-1">(chiffre du haut)</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              id="systolique"
              type="number"
              min={60}
              max={300}
              value={systolique}
              onChange={(e) => setSystolique(e.target.value)}
              placeholder="Ex : 120"
              className="w-28 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <span className="text-sm text-gray-500">mmHg</span>
          </div>
          {errors.systolique && (
            <p className="mt-1 text-xs text-red-600" role="alert">{errors.systolique}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="diastolique">
            Pression diastolique
            <span className="text-gray-400 font-normal ml-1">(chiffre du bas)</span>
          </label>
          <div className="flex items-center gap-2">
            <input
              id="diastolique"
              type="number"
              min={30}
              max={200}
              value={diastolique}
              onChange={(e) => setDiastolique(e.target.value)}
              placeholder="Ex : 80"
              className="w-28 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <span className="text-sm text-gray-500">mmHg</span>
          </div>
          {errors.diastolique && (
            <p className="mt-1 text-xs text-red-600" role="alert">{errors.diastolique}</p>
          )}
        </div>
      </div>

      {/* Aide visuelle */}
      <div className="rounded-lg bg-slate-50 border border-slate-200 p-4 text-center">
        <p className="text-4xl font-bold text-slate-700">
          {systolique || "–"} <span className="text-2xl text-slate-400">/</span> {diastolique || "–"}
        </p>
        <p className="text-xs text-slate-500 mt-1">mmHg</p>
      </div>

      <button
        onClick={handleCalculer}
        className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Analyser ma tension
      </button>

      {/* Résultats */}
      <div className="min-h-[220px]">
        {result ? (
          <div className="space-y-4">
            <ResultCard
              label={result.categorieLabel}
              value={`${result.systolique} / ${result.diastolique}`}
              unit="mmHg"
              interpretation={result.interpretation}
              status={result.status}
            />

            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 text-sm text-blue-800">
              <strong>Quand consulter :</strong> {result.quandConsulter}
            </div>

            {/* Tableau de référence */}
            <details className="rounded-lg border border-gray-200 overflow-hidden">
              <summary className="cursor-pointer px-4 py-3 text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors">
                Tableau de classification ESC 2018
              </summary>
              <div className="overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="text-left px-3 py-2 text-gray-600">Catégorie</th>
                      <th className="text-center px-3 py-2 text-gray-600">Systolique</th>
                      <th className="text-center px-3 py-2 text-gray-600">Diastolique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Optimale", "< 120", "< 80"],
                      ["Normale", "120–129", "80–84"],
                      ["Normale haute", "130–139", "85–89"],
                      ["HTA Grade 1", "140–159", "90–99"],
                      ["HTA Grade 2", "160–179", "100–109"],
                      ["HTA Grade 3", "≥ 180", "≥ 110"],
                    ].map(([cat, sys, dia]) => (
                      <tr key={cat} className={`border-t border-gray-100 ${result.categorieLabel === cat ? "bg-emerald-50 font-semibold" : ""}`}>
                        <td className="px-3 py-2 text-gray-700">{cat}</td>
                        <td className="text-center px-3 py-2 text-gray-600">{sys}</td>
                        <td className="text-center px-3 py-2 text-gray-600">{dia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>

            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/calculateur-glycemie/" className="text-emerald-700 underline hover:text-emerald-900">
                Glycémie
              </Link>
              {" · "}
              <Link href="/calculateur-imc/" className="text-emerald-700 underline hover:text-emerald-900">
                Calculateur IMC
              </Link>
            </p>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-5 text-center text-sm text-gray-400">
            Renseignez vos valeurs de tension et cliquez sur « Analyser »
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import { calculerEau, NiveauActivite, Temperature } from "@/lib/calculators/eau";
import Link from "next/link";

interface Errors {
  poids?: string;
}

export default function EauCalculateur() {
  const [poids, setPoids] = useState("");
  const [activite, setActivite] = useState<NiveauActivite>("sedentaire");
  const [temperature, setTemperature] = useState<Temperature>("normale");
  const [result, setResult] = useState<ReturnType<typeof calculerEau> | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    const p = parseFloat(poids);
    if (!poids || isNaN(p)) {
      e.poids = "Veuillez saisir votre poids.";
    } else if (p < 20 || p > 300) {
      e.poids = "Poids hors plage (20–300 kg).";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleCalculer() {
    if (!validate()) return;
    setResult(calculerEau(parseFloat(poids), activite, temperature));
  }

  return (
    <div className="space-y-6">
      {/* Poids */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="eau-poids">
          Poids corporel
        </label>
        <div className="flex items-center gap-2">
          <input
            id="eau-poids"
            type="number"
            step="0.5"
            min={20}
            max={300}
            value={poids}
            onChange={(e) => setPoids(e.target.value)}
            placeholder="Ex : 70"
            className="w-28 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <span className="text-sm text-gray-500">kg</span>
        </div>
        {errors.poids && (
          <p className="mt-1 text-xs text-red-600" role="alert">{errors.poids}</p>
        )}
      </div>

      {/* Niveau d'activité */}
      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 mb-2">Niveau d&apos;activité physique</legend>
        <div className="flex flex-col sm:flex-row gap-3">
          {(
            [
              { value: "sedentaire", label: "Sédentaire", desc: "Peu ou pas d'exercice", extra: "+0 mL" },
              { value: "moderee", label: "Modérée", desc: "2–4 séances/semaine", extra: "+500 mL" },
              { value: "intense", label: "Intense", desc: "Sport quotidien", extra: "+1 000 mL" },
            ] as { value: NiveauActivite; label: string; desc: string; extra: string }[]
          ).map(({ value, label, desc, extra }) => (
            <label
              key={value}
              className={`flex-1 flex items-start gap-3 rounded-lg border-2 p-3 cursor-pointer transition-colors ${
                activite === value
                  ? "border-emerald-500 bg-emerald-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="activite"
                value={value}
                checked={activite === value}
                onChange={() => setActivite(value)}
                className="mt-0.5 accent-emerald-600"
              />
              <span>
                <span className="block text-sm font-medium text-gray-800">{label}</span>
                <span className="text-xs text-gray-500">{desc}</span>
                <span className="block text-xs text-emerald-600 font-semibold mt-0.5">{extra}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Température */}
      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 mb-2">Température ambiante</legend>
        <div className="flex gap-3">
          {(
            [
              { value: "normale", label: "Normale (≤ 25 °C)", extra: "+0 mL" },
              { value: "chaude", label: "Chaude (> 25 °C)", extra: "+300 mL" },
            ] as { value: Temperature; label: string; extra: string }[]
          ).map(({ value, label, extra }) => (
            <label
              key={value}
              className={`flex-1 flex items-start gap-3 rounded-lg border-2 p-3 cursor-pointer transition-colors ${
                temperature === value
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <input
                type="radio"
                name="temperature"
                value={value}
                checked={temperature === value}
                onChange={() => setTemperature(value)}
                className="mt-0.5 accent-blue-600"
              />
              <span>
                <span className="block text-sm font-medium text-gray-800">{label}</span>
                <span className="block text-xs text-blue-600 font-semibold">{extra}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <button
        onClick={handleCalculer}
        className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Calculer mes besoins en eau
      </button>

      {/* Résultats */}
      <div className="min-h-[200px]">
        {result ? (
          <div className="space-y-4">
            <ResultCard
              label="Apport quotidien recommandé"
              value={result.litresJour}
              unit="litres / jour"
              interpretation={`Soit environ ${result.verresJour} verres de 250 mL par jour`}
              status="info"
            />

            {/* Répartition */}
            <div className="rounded-lg border border-gray-200 p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Répartition</h3>
              <div className="space-y-2">
                {[
                  { label: "Base (poids × 35 mL)", val: result.repartition.base, color: "bg-blue-400" },
                  { label: "Activité physique", val: result.repartition.activite, color: "bg-emerald-400" },
                  { label: "Ajustement chaleur", val: result.repartition.chaleur, color: "bg-orange-400" },
                ].map(({ label, val, color }) => (
                  <div key={label} className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <div className={`w-2.5 h-2.5 rounded-full ${color}`} />
                      <span className="text-gray-600">{label}</span>
                    </div>
                    <span className="font-semibold text-gray-800">+{val} L</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Équivalences verres */}
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-3">
                <p className="text-xl font-bold text-blue-700">{result.litresJour} L</p>
                <p className="text-xs text-gray-500">par jour</p>
              </div>
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-3">
                <p className="text-xl font-bold text-blue-700">{result.verresJour}</p>
                <p className="text-xs text-gray-500">verres (250 mL)</p>
              </div>
              <div className="rounded-lg bg-blue-50 border border-blue-200 p-3">
                <p className="text-xl font-bold text-blue-700">{Math.round(result.litresJour / 8 * 10) / 10} L</p>
                <p className="text-xs text-gray-500">toutes les 2h</p>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/calculateur-calories-journalieres/" className="text-emerald-700 underline hover:text-emerald-900">
                Calories journalières
              </Link>
              {" · "}
              <Link href="/calculateur-metabolisme-de-base/" className="text-emerald-700 underline hover:text-emerald-900">
                Métabolisme de base
              </Link>
            </p>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-5 text-center text-sm text-gray-400">
            Renseignez votre poids et vos habitudes, puis cliquez sur « Calculer »
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import ResultCard from "@/components/ResultCard";
import { calculerBMR, type Sexe } from "@/lib/calculators/bmr";
import Link from "next/link";

interface Errors {
  poids?: string;
  taille?: string;
  age?: string;
}

export default function BMRCalculateur() {
  const [poids, setPoids] = useState(70);
  const [taille, setTaille] = useState(170);
  const [age, setAge] = useState(30);
  const [sexe, setSexe] = useState<Sexe>("homme");
  const [result, setResult] = useState<ReturnType<typeof calculerBMR> | null>(null);
  const [errors, setErrors] = useState<Errors>({});

  function validate(): boolean {
    const e: Errors = {};
    if (poids < 10 || poids > 300) e.poids = "Le poids doit être entre 10 et 300 kg.";
    if (taille < 50 || taille > 250) e.taille = "La taille doit être entre 50 et 250 cm.";
    if (age < 1 || age > 120) e.age = "L'âge doit être entre 1 et 120 ans.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleCalculer() {
    if (!validate()) return;
    setResult(calculerBMR(poids, taille, age, sexe));
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
                name="sexe"
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

      {/* Poids */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bmr-poids">
          Poids (kg)
        </label>
        <div className="flex items-center gap-4">
          <input
            id="bmr-poids"
            type="range"
            min={10}
            max={200}
            value={poids}
            onChange={(e) => setPoids(Number(e.target.value))}
            className="flex-1 accent-emerald-600"
          />
          <input
            type="number"
            min={10}
            max={300}
            value={poids}
            onChange={(e) => setPoids(Number(e.target.value))}
            className="w-20 rounded-md border border-gray-300 px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <span className="text-sm text-gray-500 w-6">kg</span>
        </div>
        {errors.poids && <p className="mt-1 text-xs text-red-600" role="alert">{errors.poids}</p>}
      </div>

      {/* Taille */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bmr-taille">
          Taille (cm)
        </label>
        <div className="flex items-center gap-4">
          <input
            id="bmr-taille"
            type="range"
            min={50}
            max={220}
            value={taille}
            onChange={(e) => setTaille(Number(e.target.value))}
            className="flex-1 accent-emerald-600"
          />
          <input
            type="number"
            min={50}
            max={250}
            value={taille}
            onChange={(e) => setTaille(Number(e.target.value))}
            className="w-20 rounded-md border border-gray-300 px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <span className="text-sm text-gray-500 w-6">cm</span>
        </div>
        {errors.taille && <p className="mt-1 text-xs text-red-600" role="alert">{errors.taille}</p>}
      </div>

      {/* Âge */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="bmr-age">
          Âge (ans)
        </label>
        <div className="flex items-center gap-4">
          <input
            id="bmr-age"
            type="range"
            min={1}
            max={100}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="flex-1 accent-emerald-600"
          />
          <input
            type="number"
            min={1}
            max={120}
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
            className="w-20 rounded-md border border-gray-300 px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <span className="text-sm text-gray-500 w-6">ans</span>
        </div>
        {errors.age && <p className="mt-1 text-xs text-red-600" role="alert">{errors.age}</p>}
      </div>

      <button
        onClick={handleCalculer}
        className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Calculer mon métabolisme de base
      </button>

      {/* Zone résultat — hauteur fixe pour éviter le CLS */}
      <div className="min-h-[160px]">
        {result ? (
          <div className="space-y-4">
            <ResultCard
              label="Métabolisme de base (BMR)"
              value={result.bmr}
              unit="kcal/jour"
              interpretation={result.explication}
              status="info"
            />
            <p className="text-sm text-gray-500">
              Voir aussi :{" "}
              <Link href="/calculateur-calories-journalieres/" className="text-emerald-700 underline hover:text-emerald-900">
                Calories Journalières (TDEE)
              </Link>
              {" · "}
              <Link href="/calculateur-imc/" className="text-emerald-700 underline hover:text-emerald-900">
                Calculateur IMC
              </Link>
            </p>
          </div>
        ) : (
          <div className="rounded-lg border-2 border-dashed border-gray-200 p-5 text-center text-sm text-gray-400">
            Renseignez vos données et cliquez sur « Calculer »
          </div>
        )}
      </div>
    </div>
  );
}

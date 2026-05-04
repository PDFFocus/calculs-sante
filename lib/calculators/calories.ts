import { calculerBMR, type Sexe } from "./bmr";

export type NiveauActivite =
  | "sedentaire"
  | "leger"
  | "modere"
  | "actif"
  | "tres_actif";

export const NIVEAUX_ACTIVITE: Record<
  NiveauActivite,
  { label: string; coefficient: number; description: string }
> = {
  sedentaire: {
    label: "Sédentaire",
    coefficient: 1.2,
    description: "Peu ou pas d'exercice, travail de bureau",
  },
  leger: {
    label: "Légèrement actif",
    coefficient: 1.375,
    description: "Exercice léger 1–3 jours/semaine",
  },
  modere: {
    label: "Modérément actif",
    coefficient: 1.55,
    description: "Exercice modéré 3–5 jours/semaine",
  },
  actif: {
    label: "Très actif",
    coefficient: 1.725,
    description: "Exercice intense 6–7 jours/semaine",
  },
  tres_actif: {
    label: "Extrêmement actif",
    coefficient: 1.9,
    description: "Travail physique intense ou entraînement 2×/jour",
  },
};

export interface CaloriesResult {
  tdee: number;
  bmr: number;
  glucides_g: number;
  proteines_g: number;
  lipides_g: number;
}

export function calculerCalories(
  poids: number,
  taille_cm: number,
  age: number,
  sexe: Sexe,
  niveauActivite: NiveauActivite
): CaloriesResult {
  const { bmr } = calculerBMR(poids, taille_cm, age, sexe);
  const coeff = NIVEAUX_ACTIVITE[niveauActivite].coefficient;
  const tdee = Math.round(bmr * coeff);

  // Répartition macronutriments : glucides 50%, protéines 20%, lipides 30%
  const glucides_g = Math.round((tdee * 0.5) / 4);   // 4 kcal/g
  const proteines_g = Math.round((tdee * 0.2) / 4);  // 4 kcal/g
  const lipides_g = Math.round((tdee * 0.3) / 9);    // 9 kcal/g

  return { tdee, bmr, glucides_g, proteines_g, lipides_g };
}

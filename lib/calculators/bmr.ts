export type Sexe = "homme" | "femme";

export interface BMRResult {
  bmr: number;
  explication: string;
}

/**
 * Formule Mifflin-St Jeor
 * Homme : 10×poids + 6.25×taille − 5×age + 5
 * Femme : 10×poids + 6.25×taille − 5×age − 161
 */
export function calculerBMR(
  poids: number,
  taille_cm: number,
  age: number,
  sexe: Sexe
): BMRResult {
  const base = 10 * poids + 6.25 * taille_cm - 5 * age;
  const bmr = Math.round(sexe === "homme" ? base + 5 : base - 161);

  const explication =
    sexe === "homme"
      ? `Un homme de ${age} ans, ${taille_cm} cm et ${poids} kg brûle environ ${bmr} kcal par jour au repos complet.`
      : `Une femme de ${age} ans, ${taille_cm} cm et ${poids} kg brûle environ ${bmr} kcal par jour au repos complet.`;

  return { bmr, explication };
}

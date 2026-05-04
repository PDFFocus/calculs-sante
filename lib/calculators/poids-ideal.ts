import type { Sexe } from "./bmr";

export interface PoidsIdealResult {
  lorentz: number;
  creff: number;
  monnerotDumaine: number;
  delta: number | null;
}

/**
 * Lorentz (formule principale)
 * Homme : taille − 100 − (taille − 150) / 4
 * Femme : taille − 100 − (taille − 150) / 2.5
 */
export function calculerLorentz(taille_cm: number, sexe: Sexe): number {
  const base = taille_cm - 100;
  const correction =
    sexe === "homme"
      ? (taille_cm - 150) / 4
      : (taille_cm - 150) / 2.5;
  return Math.round((base - correction) * 10) / 10;
}

/**
 * Creff (morphologie standard — sans âge)
 * (taille − 100) × 0.9
 */
export function calculerCreff(taille_cm: number): number {
  return Math.round((taille_cm - 100) * 0.9 * 10) / 10;
}

/**
 * Monnerot-Dumaine (poignet moyen 18 cm)
 * taille/2.5 + poignet/4 − 108/4   (avec poignet = 18 cm par défaut)
 */
export function calculerMonnerotDumaine(taille_cm: number): number {
  const poignet = 18;
  return Math.round((taille_cm / 2.5 + poignet / 4 - 108 / 4) * 10) / 10;
}

export function calculerPoidsIdeal(
  taille_cm: number,
  sexe: Sexe,
  poidsActuel?: number
): PoidsIdealResult {
  const lorentz = calculerLorentz(taille_cm, sexe);
  const creff = calculerCreff(taille_cm);
  const monnerotDumaine = calculerMonnerotDumaine(taille_cm);
  const delta =
    poidsActuel != null
      ? Math.round((poidsActuel - lorentz) * 10) / 10
      : null;

  return { lorentz, creff, monnerotDumaine, delta };
}

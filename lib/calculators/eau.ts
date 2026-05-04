export type NiveauActivite = "sedentaire" | "moderee" | "intense";
export type Temperature = "normale" | "chaude";

export interface EauResult {
  litresJour: number;
  verresJour: number;
  repartition: {
    base: number;
    activite: number;
    chaleur: number;
  };
}

/**
 * Formule de base : poids(kg) × 35 mL
 * Ajustements :
 *   - Activité modérée  : +500 mL
 *   - Activité intense  : +1 000 mL
 *   - Chaleur (> 25 °C) : +300 mL
 */
export function calculerEau(
  poids: number,
  activite: NiveauActivite,
  temperature: Temperature
): EauResult {
  const baseML = poids * 35;

  const activiteML =
    activite === "moderee" ? 500 : activite === "intense" ? 1000 : 0;

  const chaleurML = temperature === "chaude" ? 300 : 0;

  const totalML = baseML + activiteML + chaleurML;
  const litresJour = Math.round((totalML / 1000) * 10) / 10;
  const verresJour = Math.round(totalML / 250);

  return {
    litresJour,
    verresJour,
    repartition: {
      base: Math.round((baseML / 1000) * 10) / 10,
      activite: Math.round((activiteML / 1000) * 10) / 10,
      chaleur: Math.round((chaleurML / 1000) * 10) / 10,
    },
  };
}

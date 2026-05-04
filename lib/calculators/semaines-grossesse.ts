export type InputMode = "ddr" | "conception";

export interface SemainesGrossesseResult {
  sa: number;
  joursSupplementaires: number;
  trimestre: 1 | 2 | 3;
  trimestreLabel: string;
  dateTerme: Date;
  dateTermeFormatted: string;
  pourcentageAccompli: number;
  joursRestants: number;
}

/**
 * Calcule les semaines d'aménorrhée (SA) et la date de terme
 * à partir de la DDR (règle de Naegele) ou de la date de conception.
 *
 * Règle de Naegele : terme = DDR + 280 jours
 * Date de conception : DDR estimée = conception - 14 jours
 */
export function calculerSemainesGrossesse(
  date: Date,
  mode: InputMode
): SemainesGrossesseResult {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Convertir en DDR si besoin
  let ddr: Date;
  if (mode === "ddr") {
    ddr = new Date(date);
    ddr.setHours(0, 0, 0, 0);
  } else {
    // date de conception → DDR estimée = conception - 14 jours
    ddr = new Date(date);
    ddr.setHours(0, 0, 0, 0);
    ddr.setDate(ddr.getDate() - 14);
  }

  // Date de terme (Naegele)
  const dateTerme = new Date(ddr);
  dateTerme.setDate(dateTerme.getDate() + 280);

  // SA = jours depuis DDR / 7
  const msDepuisDDR = today.getTime() - ddr.getTime();
  const joursDepuisDDR = Math.max(0, Math.floor(msDepuisDDR / (1000 * 60 * 60 * 24)));
  const sa = Math.floor(joursDepuisDDR / 7);
  const joursSupplementaires = joursDepuisDDR % 7;

  // Trimestre selon l'issue (SA 1-14 = T1, 15-28 = T2, 29+ = T3)
  let trimestre: 1 | 2 | 3;
  let trimestreLabel: string;
  if (sa <= 14) {
    trimestre = 1;
    trimestreLabel = "1er trimestre (SA 1–14)";
  } else if (sa <= 28) {
    trimestre = 2;
    trimestreLabel = "2e trimestre (SA 15–28)";
  } else {
    trimestre = 3;
    trimestreLabel = "3e trimestre (SA 29+)";
  }

  // Pourcentage accompli (sur 40 SA)
  const pourcentageAccompli = Math.min(100, Math.round((sa / 40) * 100));

  // Jours restants avant terme
  const msRestants = dateTerme.getTime() - today.getTime();
  const joursRestants = Math.max(0, Math.ceil(msRestants / (1000 * 60 * 60 * 24)));

  const dateTermeFormatted = dateTerme.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return {
    sa,
    joursSupplementaires,
    trimestre,
    trimestreLabel,
    dateTerme,
    dateTermeFormatted,
    pourcentageAccompli,
    joursRestants,
  };
}

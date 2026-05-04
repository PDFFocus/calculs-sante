export interface GrossesseResult {
  dpa: Date;
  dpaFormatted: string;
  semainesActuelles: number;
  joursRestants: number;
  trimestre: 1 | 2 | 3;
  trimestreLabel: string;
}

/**
 * Règle de Naegele avec ajustement pour cycles atypiques
 * DPA = DDR + 280 jours + (duree_cycle − 28)
 */
export function calculerDPA(ddr: Date, dureeCycle: number): GrossesseResult {
  const ajustement = dureeCycle - 28;
  const dpa = new Date(ddr);
  dpa.setDate(dpa.getDate() + 280 + ajustement);

  const aujourd_hui = new Date();
  aujourd_hui.setHours(0, 0, 0, 0);

  const msDiff = aujourd_hui.getTime() - ddr.getTime();
  const joursDepuisDDR = Math.floor(msDiff / (1000 * 60 * 60 * 24));
  const semainesActuelles = Math.max(0, Math.floor(joursDepuisDDR / 7));

  const msRestants = dpa.getTime() - aujourd_hui.getTime();
  const joursRestants = Math.max(0, Math.ceil(msRestants / (1000 * 60 * 60 * 24)));

  let trimestre: 1 | 2 | 3;
  let trimestreLabel: string;
  if (semainesActuelles <= 12) {
    trimestre = 1;
    trimestreLabel = "1er trimestre (semaines 1–12)";
  } else if (semainesActuelles <= 28) {
    trimestre = 2;
    trimestreLabel = "2e trimestre (semaines 13–28)";
  } else {
    trimestre = 3;
    trimestreLabel = "3e trimestre (semaines 29–42)";
  }

  const dpaFormatted = dpa.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return {
    dpa,
    dpaFormatted,
    semainesActuelles,
    joursRestants,
    trimestre,
    trimestreLabel,
  };
}

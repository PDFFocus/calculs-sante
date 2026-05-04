export interface JourCycle {
  date: Date;
  dateFormatted: string;
  type: "regles" | "fertile" | "ovulation" | "neutre";
}

export interface CycleInfo {
  prochaines_regles: Date;
  prochaines_regles_formatted: string;
  ovulation: Date;
  ovulation_formatted: string;
  fenetre_fertile_debut: Date;
  fenetre_fertile_fin: Date;
  fenetre_fertile_formatted: string;
}

export interface CyclesResult {
  ddr: Date;
  dureeCycle: number;
  cycles: CycleInfo[];
  joursAvantProchaines: number;
}

function formatDate(date: Date): string {
  return date.toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function calculerCycles(
  ddr: Date,
  dureeCycle: number,
  nbCycles: number = 3
): CyclesResult {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const cycles: CycleInfo[] = [];

  for (let i = 1; i <= nbCycles; i++) {
    const debutCycle = addDays(ddr, dureeCycle * i);
    const ovulation = addDays(ddr, dureeCycle * i - 14);
    const fenetreDebut = addDays(ovulation, -2);
    const fenetreFin = addDays(ovulation, 2);

    cycles.push({
      prochaines_regles: debutCycle,
      prochaines_regles_formatted: formatDate(debutCycle),
      ovulation,
      ovulation_formatted: formatDate(ovulation),
      fenetre_fertile_debut: fenetreDebut,
      fenetre_fertile_fin: fenetreFin,
      fenetre_fertile_formatted: `${fenetreDebut.toLocaleDateString("fr-FR", { day: "numeric", month: "long" })} – ${formatDate(fenetreFin)}`,
    });
  }

  const prochaines = cycles[0].prochaines_regles;
  const msRestants = prochaines.getTime() - today.getTime();
  const joursAvantProchaines = Math.max(0, Math.ceil(msRestants / (1000 * 60 * 60 * 24)));

  return {
    ddr,
    dureeCycle,
    cycles,
    joursAvantProchaines,
  };
}

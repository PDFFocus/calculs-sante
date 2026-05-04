export type TensionCategorie =
  | "optimale"
  | "normale"
  | "normale_haute"
  | "hta1"
  | "hta2"
  | "hta3"
  | "systolique_isolee";

export type ResultStatus = "success" | "warning" | "danger" | "info";

export interface TensionResult {
  systolique: number;
  diastolique: number;
  categorie: TensionCategorie;
  categorieLabel: string;
  interpretation: string;
  quandConsulter: string;
  status: ResultStatus;
}

/**
 * Classification ESC/ESH 2018 (European Society of Cardiology)
 * Source : 2018 ESC/ESH Guidelines for the management of arterial hypertension
 */
export function calculerTension(
  systolique: number,
  diastolique: number
): TensionResult {
  // HTA Grade 3
  if (systolique >= 180 || diastolique >= 110) {
    return {
      systolique,
      diastolique,
      categorie: "hta3",
      categorieLabel: "HTA Grade 3 (sévère)",
      interpretation:
        "Hypertension artérielle sévère (≥ 180/110 mmHg). Risque cardiovasculaire très élevé.",
      quandConsulter:
        "Consultez un médecin en urgence. Un traitement médicamenteux est généralement nécessaire.",
      status: "danger",
    };
  }

  // HTA Grade 2
  if (
    (systolique >= 160 && systolique <= 179) ||
    (diastolique >= 100 && diastolique <= 109)
  ) {
    return {
      systolique,
      diastolique,
      categorie: "hta2",
      categorieLabel: "HTA Grade 2 (modérée)",
      interpretation:
        "Hypertension artérielle modérée (160–179 / 100–109 mmHg).",
      quandConsulter:
        "Consultez votre médecin rapidement pour un traitement adapté.",
      status: "danger",
    };
  }

  // HTA Grade 1
  if (
    (systolique >= 140 && systolique <= 159) ||
    (diastolique >= 90 && diastolique <= 99)
  ) {
    return {
      systolique,
      diastolique,
      categorie: "hta1",
      categorieLabel: "HTA Grade 1 (légère)",
      interpretation:
        "Hypertension artérielle légère (140–159 / 90–99 mmHg).",
      quandConsulter:
        "Consultez un médecin pour confirmer et évaluer un traitement.",
      status: "warning",
    };
  }

  // Normale haute
  if (
    (systolique >= 130 && systolique <= 139) ||
    (diastolique >= 85 && diastolique <= 89)
  ) {
    return {
      systolique,
      diastolique,
      categorie: "normale_haute",
      categorieLabel: "Normale haute",
      interpretation:
        "Tension artérielle dans la zone normale haute (130–139 / 85–89 mmHg).",
      quandConsulter:
        "Pas d'urgence, mais un suivi annuel est recommandé. Adoptez un mode de vie sain.",
      status: "warning",
    };
  }

  // Normale
  if (
    (systolique >= 120 && systolique <= 129) ||
    (diastolique >= 80 && diastolique <= 84)
  ) {
    return {
      systolique,
      diastolique,
      categorie: "normale",
      categorieLabel: "Normale",
      interpretation:
        "Tension artérielle normale (120–129 / 80–84 mmHg).",
      quandConsulter:
        "Pas de consultation urgente nécessaire. Maintenez un suivi régulier.",
      status: "success",
    };
  }

  // Optimale
  return {
    systolique,
    diastolique,
    categorie: "optimale",
    categorieLabel: "Optimale",
    interpretation:
      "Tension artérielle optimale (< 120/80 mmHg). Excellent niveau.",
    quandConsulter:
      "Aucune action requise. Continuez votre mode de vie sain.",
    status: "success",
  };
}

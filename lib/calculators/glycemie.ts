export type GlycemieUnite = "mmol/L" | "mg/dL";
export type GlycemieContexte = "jeun" | "postprandial";
export type GlycemieCategorie =
  | "normal"
  | "prediabete"
  | "diabete"
  | "hypoglycemie";

export type ResultStatus = "success" | "warning" | "danger" | "info";

export interface GlycemieResult {
  valeurMmol: number;
  valeurMgdl: number;
  categorie: GlycemieCategorie;
  categorieLabel: string;
  interpretation: string;
  conseil: string;
  status: ResultStatus;
}

const FACTEUR_CONVERSION = 18.0182;

export function convertirGlycemie(
  valeur: number,
  unite: GlycemieUnite
): { mmol: number; mgdl: number } {
  if (unite === "mmol/L") {
    return {
      mmol: Math.round(valeur * 100) / 100,
      mgdl: Math.round(valeur * FACTEUR_CONVERSION * 10) / 10,
    };
  } else {
    return {
      mmol: Math.round((valeur / FACTEUR_CONVERSION) * 100) / 100,
      mgdl: Math.round(valeur * 10) / 10,
    };
  }
}

export function calculerGlycemie(
  valeur: number,
  unite: GlycemieUnite,
  contexte: GlycemieContexte
): GlycemieResult {
  const { mmol, mgdl } = convertirGlycemie(valeur, unite);

  if (contexte === "jeun") {
    if (mmol < 3.9) {
      return {
        valeurMmol: mmol,
        valeurMgdl: mgdl,
        categorie: "hypoglycemie",
        categorieLabel: "Hypoglycémie",
        interpretation: "Glycémie à jeun inférieure à la normale (< 3,9 mmol/L).",
        conseil:
          "Une hypoglycémie peut être dangereuse. Consultez un médecin rapidement.",
        status: "danger",
      };
    } else if (mmol < 6.1) {
      return {
        valeurMmol: mmol,
        valeurMgdl: mgdl,
        categorie: "normal",
        categorieLabel: "Normal",
        interpretation:
          "Glycémie à jeun dans la plage normale (3,9 – 6,0 mmol/L).",
        conseil:
          "Votre glycémie à jeun est normale. Maintenez une alimentation équilibrée.",
        status: "success",
      };
    } else if (mmol < 7.0) {
      return {
        valeurMmol: mmol,
        valeurMgdl: mgdl,
        categorie: "prediabete",
        categorieLabel: "Prédiabète",
        interpretation:
          "Glycémie à jeun élevée (6,1 – 6,9 mmol/L) : zone de prédiabète.",
        conseil:
          "Un bilan médical est recommandé. Des ajustements alimentaires peuvent aider.",
        status: "warning",
      };
    } else {
      return {
        valeurMmol: mmol,
        valeurMgdl: mgdl,
        categorie: "diabete",
        categorieLabel: "Diabète probable",
        interpretation:
          "Glycémie à jeun ≥ 7,0 mmol/L : critère diagnostic du diabète.",
        conseil:
          "Consultez un médecin pour confirmer le diagnostic et initier un suivi.",
        status: "danger",
      };
    }
  } else {
    // post-prandial (2h après repas)
    if (mmol < 7.8) {
      return {
        valeurMmol: mmol,
        valeurMgdl: mgdl,
        categorie: "normal",
        categorieLabel: "Normal",
        interpretation:
          "Glycémie post-prandiale normale (< 7,8 mmol/L à 2h après le repas).",
        conseil: "Votre glycémie après repas est dans la plage normale.",
        status: "success",
      };
    } else if (mmol < 11.1) {
      return {
        valeurMmol: mmol,
        valeurMgdl: mgdl,
        categorie: "prediabete",
        categorieLabel: "Prédiabète",
        interpretation:
          "Glycémie post-prandiale élevée (7,8 – 11,0 mmol/L) : intolérance au glucose.",
        conseil:
          "Un suivi médical est recommandé. Réduisez les sucres rapides dans votre alimentation.",
        status: "warning",
      };
    } else {
      return {
        valeurMmol: mmol,
        valeurMgdl: mgdl,
        categorie: "diabete",
        categorieLabel: "Diabète probable",
        interpretation:
          "Glycémie post-prandiale ≥ 11,1 mmol/L : critère diagnostic du diabète.",
        conseil:
          "Consultez un médecin pour un bilan complet et un suivi adapté.",
        status: "danger",
      };
    }
  }
}

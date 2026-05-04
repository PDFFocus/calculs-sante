export type IMCCategorie =
  | "dénutrition"
  | "normal"
  | "surpoids"
  | "obésité modérée"
  | "obésité sévère"
  | "obésité morbide";

export type IMCStatus = "danger" | "success" | "warning";

export interface IMCResult {
  valeur: number;
  categorie: IMCCategorie;
  interpretation: string;
  status: IMCStatus;
}

export function calculerIMC(poids: number, taille_cm: number): IMCResult {
  const taille_m = taille_cm / 100;
  const valeur = Math.round((poids / (taille_m * taille_m)) * 10) / 10;

  if (valeur < 18.5) {
    return {
      valeur,
      categorie: "dénutrition",
      interpretation: "Votre IMC est inférieur à la normale. Consultez un médecin.",
      status: "danger",
    };
  } else if (valeur < 25) {
    return {
      valeur,
      categorie: "normal",
      interpretation: "Votre poids est dans la plage normale selon l'OMS.",
      status: "success",
    };
  } else if (valeur < 30) {
    return {
      valeur,
      categorie: "surpoids",
      interpretation: "Votre IMC indique un léger surpoids. Un suivi médical peut être bénéfique.",
      status: "warning",
    };
  } else if (valeur < 35) {
    return {
      valeur,
      categorie: "obésité modérée",
      interpretation: "Obésité de classe I. Un accompagnement médical est recommandé.",
      status: "danger",
    };
  } else if (valeur < 40) {
    return {
      valeur,
      categorie: "obésité sévère",
      interpretation: "Obésité de classe II. Consultez un professionnel de santé.",
      status: "danger",
    };
  } else {
    return {
      valeur,
      categorie: "obésité morbide",
      interpretation: "Obésité de classe III. Une prise en charge médicale est nécessaire.",
      status: "danger",
    };
  }
}

export function imcCouleurBarre(valeur: number): string {
  if (valeur < 18.5) return "bg-blue-500";
  if (valeur < 25) return "bg-emerald-500";
  if (valeur < 30) return "bg-amber-500";
  return "bg-red-500";
}

/** Position en % sur la barre (échelle 10-45) */
export function imcPositionBarre(valeur: number): number {
  const min = 10;
  const max = 45;
  return Math.min(100, Math.max(0, ((valeur - min) / (max - min)) * 100));
}

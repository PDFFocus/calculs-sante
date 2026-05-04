type ResultStatus = "success" | "warning" | "danger" | "info" | "neutral";

interface ResultCardProps {
  label: string;
  value: string | number;
  unit?: string;
  interpretation?: string;
  status?: ResultStatus;
}

const statusStyles: Record<ResultStatus, { border: string; bg: string; badge: string; text: string }> =
  {
    success: {
      border: "border-emerald-300",
      bg: "bg-emerald-50",
      badge: "bg-emerald-100 text-emerald-800",
      text: "text-emerald-900",
    },
    warning: {
      border: "border-amber-300",
      bg: "bg-amber-50",
      badge: "bg-amber-100 text-amber-800",
      text: "text-amber-900",
    },
    danger: {
      border: "border-red-300",
      bg: "bg-red-50",
      badge: "bg-red-100 text-red-800",
      text: "text-red-900",
    },
    info: {
      border: "border-blue-300",
      bg: "bg-blue-50",
      badge: "bg-blue-100 text-blue-800",
      text: "text-blue-900",
    },
    neutral: {
      border: "border-gray-200",
      bg: "bg-gray-50",
      badge: "bg-gray-100 text-gray-700",
      text: "text-gray-800",
    },
  };

export default function ResultCard({
  label,
  value,
  unit,
  interpretation,
  status = "neutral",
}: ResultCardProps) {
  const styles = statusStyles[status];

  return (
    <div
      className={`rounded-lg border-2 ${styles.border} ${styles.bg} p-5`}
      role="region"
      aria-label={`Résultat : ${label}`}
    >
      <p className="text-sm font-medium text-gray-500 mb-1">{label}</p>
      <div className="flex items-baseline gap-2 flex-wrap">
        <span className={`text-3xl font-bold ${styles.text}`}>{value}</span>
        {unit && <span className="text-base text-gray-500 font-medium">{unit}</span>}
      </div>
      {interpretation && (
        <p className={`mt-3 text-sm font-medium ${styles.text}`}>
          <span
            className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold mr-2 ${styles.badge}`}
          >
            Interprétation
          </span>
          {interpretation}
        </p>
      )}
    </div>
  );
}

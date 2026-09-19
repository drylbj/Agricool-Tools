export default function Metric({
  label,
  value,
  hint,
  tone,
}: {
  label: string;
  value: string;
  hint?: string;
  tone?: "accent" | "warn" | "danger";
}) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong className={tone ? tone : ""}>{value}</strong>
      {hint && <em className={tone ? tone : ""}>{hint}</em>}
    </div>
  );
}

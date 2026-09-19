import type { Tone } from "../types";

const toneClass: Record<Tone, string> = {
  green: "pill-green",
  orange: "pill-orange",
  red: "pill-red",
};

export default function StatusPill({
  label,
  tone,
}: {
  label: string;
  tone: Tone;
}) {
  return <span className={`status-pill ${toneClass[tone]}`}>{label}</span>;
}

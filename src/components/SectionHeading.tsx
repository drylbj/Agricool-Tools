import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  action,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <div className="heading-row">
        <div>
          <h1>{title}</h1>
          {subtitle && <p className="heading-subtitle">{subtitle}</p>}
        </div>
        {action}
      </div>
    </div>
  );
}

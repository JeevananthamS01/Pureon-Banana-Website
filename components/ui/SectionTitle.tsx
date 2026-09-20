import type { ReactNode } from "react";

type SectionTitleProps = {
  subtitle: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionTitle({
  subtitle,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div
      className={`section-title ${align === "center" ? "section-title--center" : ""}`}
    >
      <span className="text-subtitle">{subtitle}</span>
      <h2 className="text-title">{title}</h2>
      {description ? (
        <p className="text-para section-title__description">{description}</p>
      ) : null}
    </div>
  );
}

import React from "react";
import { classNames } from "../utils/classNames";

interface HomeIntroSectionProps {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const HomeIntroSection: React.FC<HomeIntroSectionProps> = ({
  title,
  subtitle,
  actions,
  style,
  className = "",
}) => (
  <section
    className={classNames("text-center mb-xl", className)}
    style={{ alignItems: "center", ...style }}
    role="banner"
    aria-label="Página principal: introducción"
  >
    <h1 className="home-title mb-sm" style={{ fontWeight: 700 }}>{title}</h1>
    {subtitle && (
      <h2 className="text-lg mb-lg" style={{ fontWeight: 400 }}>{subtitle}</h2>
    )}
    {actions && (
      <div className="flex gap-md flex-center mb-xl">{actions}</div>
    )}
  </section>
);

export default HomeIntroSection; 
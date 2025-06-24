import React from "react";
import { classNames } from "../utils/classNames";

/**
 * Section component with accessibility support for aria-labelledby and aria-label.
 * Use aria-labelledby to associate the section with a heading by id, or aria-label for a descriptive label.
 */
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  "aria-labelledby"?: string;
  "aria-label"?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = "",
  "aria-labelledby": ariaLabelledBy,
  "aria-label": ariaLabel,
  ...props
}) => {
  return (
    <section
      className={classNames("section", className)}
      aria-labelledby={ariaLabelledBy}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section; 
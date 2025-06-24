import React from "react";
import { classNames } from "../utils/classNames";

/**
 * Accessible Button component.
 * - Always provide a clear label (children or aria-label).
 * - For icon-only buttons, aria-label is required.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  "aria-label": ariaLabel,
  ...props
}) => {
  const variantClass = variant === "secondary" ? "button secondary" : "button";

  // Warn in development if icon-only button has no aria-label
  if (process.env.NODE_ENV !== "production" &&
      (typeof children !== "string" && typeof children !== "number") &&
      !ariaLabel) {
    // eslint-disable-next-line no-console
    console.warn(
      "[Button] Icon-only buttons must have an aria-label for accessibility."
    );
  }

  return (
    <button className={classNames(variantClass, className)} aria-label={ariaLabel} {...props}>
      {children}
    </button>
  );
};

export default Button; 
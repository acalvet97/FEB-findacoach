import React from "react";
import { classNames } from "../utils/classNames";

/**
 * Card component. By default, uses role="region" for accessibility.
 * If interactive, pass role and tabIndex as needed.
 */
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  role?: string;
  tabIndex?: number;
}

const Card: React.FC<CardProps> = ({ children, className = "", role = "region", tabIndex, ...props }) => {
  return (
    <div className={classNames("card", className)} role={role} tabIndex={tabIndex} {...props}>
      {children}
    </div>
  );
};

export default Card; 
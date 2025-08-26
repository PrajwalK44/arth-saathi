import { cn } from "../../lib/utils";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface CTAButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "accent" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
}

export const CTAButton = ({
  children,
  to,
  onClick,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
}: CTAButtonProps) => {
  const variants = {
    primary:
      "bg-primary hover:bg-primary/90 text-primary-foreground shadow-soft hover:shadow-medium",
    accent:
      "bg-accent hover:bg-accent/90 text-accent-foreground shadow-soft hover:shadow-medium",
    secondary:
      "bg-secondary hover:bg-secondary/90 text-secondary-foreground border border-border shadow-soft hover:shadow-medium",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className
  );

  if (to && !disabled) {
    return (
      <Link to={to} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} disabled={disabled} className={baseClasses}>
      {children}
    </button>
  );
};

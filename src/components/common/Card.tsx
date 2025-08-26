import { cn } from "../../lib/utils";
import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'interactive';
}

export const Card = ({ children, className, variant = 'default' }: CardProps) => {
  const variants = {
    default: 'bg-card border border-card-border',
    elevated: 'bg-card border border-card-border shadow-medium',
    interactive: 'bg-card border border-card-border shadow-soft hover:shadow-medium transition-smooth cursor-pointer hover:-translate-y-1'
  };

  return (
    <div className={cn(
      'rounded-lg p-6 text-card-foreground',
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardHeaderProps) => (
  <div className={cn('mb-4', className)}>
    {children}
  </div>
);

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export const CardTitle = ({ children, className }: CardTitleProps) => (
  <h3 className={cn('text-xl font-semibold text-text-primary mb-2', className)}>
    {children}
  </h3>
);

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className }: CardContentProps) => (
  <div className={cn('text-text-secondary', className)}>
    {children}
  </div>
);
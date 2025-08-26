import { cn } from "../../lib/utils";

interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
  showLabel?: boolean;
  label?: string;
  variant?: 'default' | 'accent' | 'success' | 'warning';
}

export const ProgressBar = ({ 
  value, 
  className, 
  showLabel = true, 
  label = "Progress",
  variant = 'default'
}: ProgressBarProps) => {
  const variants = {
    default: 'bg-primary',
    accent: 'bg-accent',
    success: 'bg-success',
    warning: 'bg-warning'
  };

  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-text-secondary">{label}</span>
          <span className="text-sm text-text-secondary">
            {Math.round(clampedValue)}%
          </span>
        </div>
      )}
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div
          className={cn(
            'h-full rounded-full transition-smooth',
            variants[variant]
          )}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
    </div>
  );
};
import { cn } from "../../lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const LoadingSpinner = ({
  size = "md",
  className,
}: LoadingSpinnerProps) => {
  const sizes = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
  };

  return (
    <div
      className={cn(
        "animate-spin rounded-full border-2 border-current border-t-transparent",
        sizes[size],
        className
      )}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

interface PageLoaderProps {
  isLoading: boolean;
}

export const PageLoader = ({ isLoading }: PageLoaderProps) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="flex flex-col items-center space-y-4">
        <LoadingSpinner size="lg" className="text-primary" />
        <p className="text-text-secondary">Loading your financial journey...</p>
      </div>
    </div>
  );
};

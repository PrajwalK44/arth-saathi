import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
  fullHeight?: boolean;
}

export const PageLayout = ({
  children,
  className,
  fullHeight = true,
}: PageLayoutProps) => {
  return (
    <div
      className={cn(
        "pt-24", // Account for fixed navbar height + margin (16px navbar + 16px top margin + 16px buffer)
        fullHeight && "min-h-screen",
        className
      )}
    >
      {children}
    </div>
  );
};

export default PageLayout;

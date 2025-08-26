import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CTAButton } from "../components/common/CTAButton";
import PageLayout from "../components/layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout className="flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-text-primary mb-4">
          Page Not Found
        </h2>
        <p className="text-text-secondary mb-8">
          Oops! The page you're looking for doesn't exist. It might have been
          moved, deleted, or you entered the wrong URL.
        </p>
        <div className="space-x-4">
          <CTAButton to="/" variant="primary">
            Return to Home
          </CTAButton>
          <CTAButton to="/onboarding" variant="outline">
            Start Simulation
          </CTAButton>
        </div>
      </div>
    </PageLayout>
  );
};

export default NotFound;

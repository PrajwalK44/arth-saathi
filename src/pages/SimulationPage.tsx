import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSimulationStore } from "../store/simulationStore";
import { SimulationEventCard } from "../components/simulation/SimulationEventCard";
import { CTAButton } from "../components/common/CTAButton";
import PageLayout from "../components/layout/PageLayout";
import type { PersonaType } from "../lib/simulationData";
import type { Choice } from "../store/simulationStore";
import { ArrowLeft, User, Calendar, TrendingUp } from "lucide-react";

const SimulationPage = () => {
  const { personaId } = useParams<{ personaId: string }>();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  const {
    persona,
    currentMonth,
    totalMonths,
    currentNetWorth,
    isComplete,
    startSimulation,
    makeChoice,
    advanceMonth,
    getCurrentEvent,
  } = useSimulationStore();

  const currentEvent = getCurrentEvent();

  useEffect(() => {
    if (personaId && !persona) {
      startSimulation(personaId as PersonaType);
    }
  }, [personaId, persona, startSimulation]);

  useEffect(() => {
    if (isComplete) {
      navigate(`/results/${personaId}`);
    }
  }, [isComplete, navigate, personaId]);

  const handleChoiceSelect = (choice: Choice) => {
    if (currentEvent) {
      setIsTransitioning(true);
      makeChoice(currentEvent.id, choice);

      // Add animation delay before advancing to next question
      setTimeout(() => {
        advanceMonth();
        setAnimationKey((prev) => prev + 1);
        setIsTransitioning(false);
      }, 600); // Animation duration
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const progressPercentage = (currentMonth / totalMonths) * 100;

  if (!persona || !currentEvent) {
    return (
      <PageLayout className="bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
          <p className="text-text-secondary">Loading your simulation...</p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout className="bg-background min-h-screen">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Sidebar - Player Stats */}
        <div className="w-full lg:w-80 bg-card shadow-lg border-b lg:border-r lg:border-b-0 border-border flex flex-col overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-border flex-shrink-0">
            <CTAButton
              to="/"
              variant="outline"
              size="sm"
              className="flex items-center space-x-2 mb-3"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Exit</span>
            </CTAButton>
            <h1 className="text-lg font-bold text-text-primary">
              Financial Simulation
            </h1>
          </div>

          {/* Player Stats - Compact */}
          <div className="flex-1 p-4 space-y-3 overflow-y-auto">
            {/* Persona */}
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <User className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-text-secondary">
                  Playing as
                </span>
              </div>
              <h3 className="text-sm font-bold text-text-primary">
                {persona.name}
              </h3>
            </div>

            {/* Current Period */}
            <div className="bg-muted/50 rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-2">
                <Calendar className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-text-secondary">
                  Current Period
                </span>
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                Month {currentMonth}
              </h3>
              <p className="text-xs text-text-secondary">
                {totalMonths - currentMonth} remaining
              </p>
            </div>

            {/* Net Worth */}
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-lg p-3 border border-accent/20">
              <div className="flex items-center space-x-2 mb-2">
                <TrendingUp className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-text-secondary">
                  Net Worth
                </span>
              </div>
              <h3 className="text-lg font-bold text-accent">
                {formatCurrency(currentNetWorth)}
              </h3>
              <p className="text-xs text-text-secondary">
                Start: {formatCurrency(persona.startingNetWorth || 0)}
              </p>
            </div>
          </div>
        </div>

        {/* Right Content - Progress at top, Questions below */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Progress Bar at Top */}
          <div className="p-3 lg:p-4 bg-card/50 border-b border-border flex-shrink-0">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm text-text-secondary">Progress</span>
                <span className="text-sm font-medium text-text-primary">
                  Month {currentMonth} of {totalMonths} •{" "}
                  {Math.round(progressPercentage)}% Complete
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-accent h-2 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Questions Area */}
          <div className="flex-1 flex items-center justify-center p-2 lg:p-4 overflow-hidden relative">
            <div
              key={animationKey}
              className={`w-full max-w-4xl transition-all duration-600 ease-in-out transform ${
                isTransitioning
                  ? "translate-x-full opacity-0 scale-95"
                  : "translate-x-0 opacity-100 scale-100"
              }`}
              style={{
                animation: isTransitioning
                  ? "slideOutRight 0.6s ease-in-out forwards"
                  : "slideInLeft 0.6s ease-in-out",
              }}
            >
              <SimulationEventCard
                event={currentEvent}
                onChoiceSelect={handleChoiceSelect}
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default SimulationPage;

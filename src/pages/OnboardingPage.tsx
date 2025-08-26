import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CTAButton } from "../components/common/CTAButton";
import PageLayout from "../components/layout/PageLayout";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  Target,
  AlertTriangle,
} from "lucide-react";
import { useSimulationStore } from "../store/simulationStore";
import type { PersonaType } from "../lib/simulationData";

const OnboardingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const navigate = useNavigate();
  const startSimulation = useSimulationStore((state) => state.startSimulation);

  const questions = [
    {
      id: "income-type",
      title: "What is your primary income type?",
      icon: Users,
      options: [
        {
          id: "freelancer",
          label: "Freelancer",
          description: "Independent contractor with project-based income",
        },
        {
          id: "gigworker",
          label: "Gig Worker",
          description: "Platform-based work (delivery, rideshare, etc.)",
        },
        {
          id: "smallbusiness",
          label: "Small Business Owner",
          description: "Running your own business or startup",
        },
      ],
    },
    {
      id: "savings-goal",
      title: "What is your biggest savings goal?",
      icon: Target,
      options: [
        {
          id: "emergency",
          label: "Emergency Fund",
          description: "3-6 months of expenses for unexpected situations",
        },
        {
          id: "home",
          label: "Buying a Home",
          description: "Saving for down payment and home purchase",
        },
        {
          id: "retirement",
          label: "Retirement Planning",
          description: "Long-term wealth building for the future",
        },
      ],
    },
    {
      id: "financial-worry",
      title: "What is your biggest financial worry?",
      icon: AlertTriangle,
      options: [
        {
          id: "unstable-income",
          label: "Unstable Income",
          description: "Irregular or unpredictable earnings",
        },
        {
          id: "high-debt",
          label: "High Debt",
          description: "Managing loans, credit cards, or other debts",
        },
        {
          id: "unexpected-expenses",
          label: "Unexpected Expenses",
          description: "Fear of financial emergencies",
        },
      ],
    },
  ];

  const totalSteps = questions.length;

  const handleAnswer = (questionId: string, answerId: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerId }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getPersonaType = (): PersonaType => {
    const incomeType = answers["income-type"];
    switch (incomeType) {
      case "freelancer":
        return "freelancer";
      case "gigworker":
        return "gigworker";
      case "smallbusiness":
        return "smallbusiness";
      default:
        return "default";
    }
  };

  const handleBuildSimulation = () => {
    const personaType = getPersonaType();
    startSimulation(personaType);
    navigate(`/simulation/${personaType}`);
  };

  const currentQuestion = questions[currentStep - 1];
  const canProceed = answers[currentQuestion.id];
  const isLastStep = currentStep === totalSteps;

  return (
    <PageLayout className="bg-background min-h-screen">
      <div className="flex flex-col lg:flex-row h-screen">
        {/* Left Sidebar - Header */}
        <div className="w-full lg:w-80 bg-card shadow-lg border-b lg:border-r lg:border-b-0 border-border flex flex-col overflow-hidden">
          {/* Header Content */}
          <div className="flex-1 p-6 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-text-primary mb-4">
              Let's Create Your Profile
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed">
              Answer a few questions to generate a personalized financial
              simulation tailored to your goals and situation.
            </p>
          </div>

          {/* Back to Home */}
          <div className="p-6 border-t border-border">
            <CTAButton to="/" variant="outline" size="sm" className="w-full">
              Back to Home
            </CTAButton>
          </div>
        </div>

        {/* Right Content - Progress and Questions */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Progress Bar */}
          <div className="p-4 lg:p-6 bg-card/50 border-b border-border flex-shrink-0">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-text-secondary">Progress</span>
                <span className="text-sm text-text-secondary">
                  Step {currentStep} of {totalSteps}
                </span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div
                  className="bg-accent h-2 rounded-full transition-smooth"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Questions Area */}
          <div className="flex-1 flex flex-col justify-center p-4 lg:p-6 overflow-hidden">
            <div className="max-w-4xl mx-auto w-full">
              {/* Question Header */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <currentQuestion.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold text-text-primary">
                    {currentQuestion.title}
                  </h2>
                </div>
              </div>

              {/* Options Grid - 2x2 Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
                {currentQuestion.options.map((option) => (
                  <div
                    key={option.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-smooth h-full flex flex-col min-h-[120px] ${
                      answers[currentQuestion.id] === option.id
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/50 hover:bg-accent/5"
                    }`}
                    onClick={() => handleAnswer(currentQuestion.id, option.id)}
                  >
                    <div className="flex items-start space-x-3 h-full">
                      <div
                        className={`w-4 h-4 rounded-full border-2 mt-1 transition-smooth flex-shrink-0 ${
                          answers[currentQuestion.id] === option.id
                            ? "border-accent bg-accent"
                            : "border-border"
                        }`}
                      ></div>
                      <div className="flex-1 flex flex-col">
                        <h4 className="font-semibold text-text-primary mb-2">
                          {option.label}
                        </h4>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {option.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <CTAButton
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </CTAButton>

                {isLastStep ? (
                  <CTAButton
                    variant="accent"
                    onClick={handleBuildSimulation}
                    disabled={!canProceed}
                    size="lg"
                    className="flex items-center space-x-2"
                  >
                    <span>Build My Simulation</span>
                    <ArrowRight className="h-4 w-4" />
                  </CTAButton>
                ) : (
                  <CTAButton
                    variant="primary"
                    onClick={handleNext}
                    disabled={!canProceed}
                    className="flex items-center space-x-2"
                  >
                    <span>Next</span>
                    <ArrowRight className="h-4 w-4" />
                  </CTAButton>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default OnboardingPage;

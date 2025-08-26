import {  useNavigate } from "react-router-dom";
import { useSimulationStore } from "../store/simulationStore";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../components/common/Card";
import { CTAButton } from "../components/common/CTAButton";
import { NetWorthChart } from "../components/dashboard/NetWorthChart";
import { KeyMetrics } from "../components/dashboard/KeyMetrics";
import { DecisionPath } from "../components/dashboard/DecisionPath";
import PageLayout from "../components/layout/PageLayout";
import { Play, RotateCcw, Home, Award, TrendingUp } from "lucide-react";

const ResultsPage = () => {
  // const { simulationId } = useParams<{ simulationId: string }>();
  const navigate = useNavigate();

  const {
    persona,
    netWorthHistory,
    ledger,
    events,
    currentNetWorth,
    resetSimulation,
  } = useSimulationStore();

  if (!persona || netWorthHistory.length === 0) {
    return (
      <PageLayout className="bg-background flex items-center justify-center">
        <Card variant="elevated" className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">No Simulation Data Found</h2>
          <p className="text-text-secondary mb-6">
            It looks like you haven't completed a simulation yet.
          </p>
          <CTAButton to="/" variant="primary">
            Start a Simulation
          </CTAButton>
        </Card>
      </PageLayout>
    );
  }

  const totalChoicesValue = ledger.reduce(
    (sum, entry) => sum + entry.effect,
    0
  );
  const initialNetWorth = netWorthHistory[0];
  const finalNetWorth = currentNetWorth;
  const netChange = finalNetWorth - initialNetWorth;

  const getPerformanceLevel = () => {
    if (netChange >= 50000)
      return { level: "Excellent", color: "text-success", icon: Award };
    if (netChange >= 20000)
      return { level: "Good", color: "text-accent", icon: TrendingUp };
    if (netChange >= 0)
      return { level: "Fair", color: "text-warning", icon: TrendingUp };
    return {
      level: "Needs Improvement",
      color: "text-destructive",
      icon: TrendingUp,
    };
  };

  const performance = getPerformanceLevel();

  const handleNewSimulation = () => {
    resetSimulation();
    navigate("/");
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <PageLayout className="bg-background">
      {/* Header */}
      <div className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <performance.icon className={`h-8 w-8 ${performance.color}`} />
              <h1 className="text-4xl font-bold">Simulation Complete!</h1>
            </div>
            <p className="text-xl text-primary-foreground/80 mb-6">
              Here's your personalized financial analysis for {persona.name}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="text-primary-foreground/60 text-sm">
                  Net Worth Change
                </p>
                <p
                  className={`text-2xl font-bold ${
                    netChange >= 0 ? "text-accent" : "text-destructive"
                  }`}
                >
                  {netChange >= 0 ? "+" : ""}
                  {formatCurrency(netChange)}
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="text-primary-foreground/60 text-sm">
                  Performance
                </p>
                <p className={`text-2xl font-bold ${performance.color}`}>
                  {performance.level}
                </p>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="text-primary-foreground/60 text-sm">
                  Final Net Worth
                </p>
                <p className="text-2xl font-bold text-primary-foreground">
                  {formatCurrency(finalNetWorth)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* AI Coach Video Placeholder */}
        <Card variant="elevated" className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Play className="h-5 w-5 text-accent" />
              <span>Here's Your Personalized Analysis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-muted rounded-lg aspect-video flex items-center justify-center mb-6">
              <div className="text-center">
                <Play className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-semibold text-text-primary mb-2">
                  AI Coach Analysis Video
                </p>
                <p className="text-text-secondary">
                  Your personalized financial coaching video would appear here
                </p>
              </div>
            </div>

            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Key Insights from Your Journey:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    Strengths:
                  </h4>
                  <ul className="space-y-1 text-text-secondary">
                    <li>• Completed all 12 months of scenarios</li>
                    <li>
                      • Made {ledger.length} important financial decisions
                    </li>
                    <li>
                      • {netChange >= 0 ? "Increased" : "Managed"} net worth
                      during challenging times
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary mb-2">
                    Areas for Growth:
                  </h4>
                  <ul className="space-y-1 text-text-secondary">
                    <li>• Emergency fund planning</li>
                    <li>• Investment diversification</li>
                    <li>• Risk management strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Key Metrics */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-text-primary mb-8 text-center">
            Your Financial Dashboard
          </h2>
          <KeyMetrics
            finalNetWorth={finalNetWorth}
            initialNetWorth={initialNetWorth}
            totalChoicesValue={totalChoicesValue}
            monthlyIncome={persona.monthlyIncome}
            monthlyExpenses={persona.monthlyExpenses}
          />
        </div>

        {/* Net Worth Chart */}
        <Card variant="elevated" className="mb-12">
          <CardHeader>
            <CardTitle>Net Worth Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <NetWorthChart data={netWorthHistory} />
          </CardContent>
        </Card>

        {/* Decision Path */}
        <div className="mb-12">
          <DecisionPath ledger={ledger} events={events} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButton
            onClick={handleNewSimulation}
            variant="primary"
            size="lg"
            className="flex items-center space-x-2"
          >
            <RotateCcw className="h-5 w-5" />
            <span>Try Another Simulation</span>
          </CTAButton>

          <CTAButton
            to="/analyze"
            variant="accent"
            size="lg"
            className="flex items-center space-x-2"
          >
            <TrendingUp className="h-5 w-5" />
            <span>Analyze Real Portfolio</span>
          </CTAButton>

          <CTAButton
            to="/"
            variant="outline"
            size="lg"
            className="flex items-center space-x-2"
          >
            <Home className="h-5 w-5" />
            <span>Back to Home</span>
          </CTAButton>
        </div>
      </div>
    </PageLayout>
  );
};

export default ResultsPage;

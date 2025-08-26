import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../../components/common/Card";
import type { Event, Choice } from "../../store/simulationStore";
import { TrendingDown, TrendingUp, Minus } from "lucide-react";

interface SimulationEventCardProps {
  event: Event;
  onChoiceSelect: (choice: Choice) => void;
}

export const SimulationEventCard = ({
  event,
  onChoiceSelect,
}: SimulationEventCardProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(Math.abs(amount));
  };

  const getEffectIcon = (effect: number) => {
    if (effect > 0) return <TrendingUp className="h-4 w-4 text-success" />;
    if (effect < 0)
      return <TrendingDown className="h-4 w-4 text-destructive" />;
    return <Minus className="h-4 w-4 text-muted-foreground" />;
  };

  const getEffectColor = (effect: number) => {
    if (effect > 0) return "text-success";
    if (effect < 0) return "text-destructive";
    return "text-muted-foreground";
  };

  return (
    <Card variant="elevated" className="w-full mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">{event.title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-text-secondary text-lg mb-6 leading-relaxed text-center">
          {event.description}
        </p>

        <div className="space-y-4">
          <h4 className="font-semibold text-text-primary text-lg text-center">
            What would you do?
          </h4>

          {/* 2x2 Grid Layout for Choices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {event.choices.map((choice) => (
              <div
                key={choice.id}
                className="border border-border rounded-lg p-3 hover:bg-accent/5 hover:border-accent/50 transition-smooth cursor-pointer group h-full flex flex-col justify-between min-h-[100px]"
                onClick={() => onChoiceSelect(choice)}
              >
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <span className="font-medium text-text-primary group-hover:text-accent transition-smooth text-sm leading-relaxed flex-1 mr-2">
                      {choice.text}
                    </span>
                    <div
                      className={`flex items-center space-x-1 flex-shrink-0 ${getEffectColor(
                        choice.effect
                      )}`}
                    >
                      {getEffectIcon(choice.effect)}
                      <span className="font-semibold text-xs">
                        {choice.effect === 0
                          ? "₹0"
                          : choice.effect > 0
                          ? `+${formatCurrency(choice.effect)}`
                          : `-${formatCurrency(choice.effect)}`}
                      </span>
                    </div>
                  </div>

                  {choice.description && (
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {choice.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

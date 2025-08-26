import { Card, CardHeader, CardTitle, CardContent } from '../../components/common/Card';
import { CheckCircle, TrendingUp, TrendingDown, Calendar } from 'lucide-react';

interface DecisionEntry {
  month: number;
  eventId: string;
  choiceId: string;
  effect: number;
  netWorth: number;
}

interface DecisionPathProps {
  ledger: DecisionEntry[];
  events: any[];
}

export const DecisionPath = ({ ledger, events }: DecisionPathProps) => {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(Math.abs(amount));
  };

  const getEventTitle = (eventId: string) => {
    const event = events.find(e => e.id === eventId);
    return event?.title || 'Unknown Event';
  };

  const getChoiceText = (eventId: string, choiceId: string) => {
    const event = events.find(e => e.id === eventId);
    const choice = event?.choices.find((c: any) => c.id === choiceId);
    return choice?.text || 'Unknown Choice';
  };

  return (
    <Card variant="elevated">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-accent" />
          <span>Your Decision Journey</span>
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {ledger.map((entry, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 pb-4 border-b border-border last:border-0"
            >
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-8 h-8 bg-accent/10 rounded-full">
                  <Calendar className="h-4 w-4 text-accent" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-medium text-text-primary">
                    Month {entry.month}
                  </p>
                  <div className={`flex items-center space-x-1 ${
                    entry.effect >= 0 ? 'text-success' : 'text-destructive'
                  }`}>
                    {entry.effect >= 0 ? 
                      <TrendingUp className="h-4 w-4" /> : 
                      <TrendingDown className="h-4 w-4" />
                    }
                    <span className="text-sm font-semibold">
                      {entry.effect === 0 ? 'No change' :
                       entry.effect > 0 ? `+${formatCurrency(entry.effect)}` :
                       `-${formatCurrency(entry.effect)}`}
                    </span>
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary mb-1">
                  {getEventTitle(entry.eventId)}
                </p>
                
                <p className="text-sm text-text-primary font-medium">
                  Decision: {getChoiceText(entry.eventId, entry.choiceId)}
                </p>
                
                <p className="text-xs text-text-secondary mt-1">
                  Net Worth: {formatCurrency(entry.netWorth)}
                </p>
              </div>
            </div>
          ))}
          
          {ledger.length === 0 && (
            <div className="text-center py-8">
              <p className="text-text-secondary">No decisions recorded yet.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
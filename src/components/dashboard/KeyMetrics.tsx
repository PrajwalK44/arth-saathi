import { Card, CardHeader, CardTitle, CardContent } from '../../components/common/Card';
import { TrendingUp, TrendingDown, Shield, CreditCard } from 'lucide-react';

interface KeyMetricsProps {
  finalNetWorth: number;
  initialNetWorth: number;
  totalChoicesValue: number;
  monthlyIncome: number;
  monthlyExpenses: number;
}

export const KeyMetrics = ({ 
  finalNetWorth, 
  initialNetWorth, 
  totalChoicesValue,
  monthlyIncome,
  monthlyExpenses
}: KeyMetricsProps) => {
  const netChange = finalNetWorth - initialNetWorth;
  const emergencyMonths = Math.floor(finalNetWorth / monthlyExpenses);
  const savingsRate = ((monthlyIncome - monthlyExpenses) / monthlyIncome) * 100;
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const metrics = [
    {
      title: 'Final Net Worth',
      value: formatCurrency(finalNetWorth),
      change: netChange,
      icon: finalNetWorth > initialNetWorth ? TrendingUp : TrendingDown,
      color: finalNetWorth > initialNetWorth ? 'text-success' : 'text-destructive',
    },
    {
      title: 'Emergency Coverage',
      value: `${emergencyMonths} months`,
      subtitle: 'Based on current expenses',
      icon: Shield,
      color: emergencyMonths >= 6 ? 'text-success' : emergencyMonths >= 3 ? 'text-warning' : 'text-destructive',
    },
    {
      title: 'Savings Rate',
      value: `${savingsRate.toFixed(1)}%`,
      subtitle: 'of monthly income',
      icon: TrendingUp,
      color: savingsRate >= 20 ? 'text-success' : savingsRate >= 10 ? 'text-warning' : 'text-destructive',
    },
    {
      title: 'Decision Impact',
      value: formatCurrency(Math.abs(totalChoicesValue)),
      subtitle: totalChoicesValue >= 0 ? 'Total gains' : 'Total losses',
      icon: totalChoicesValue >= 0 ? TrendingUp : TrendingDown,
      color: totalChoicesValue >= 0 ? 'text-success' : 'text-destructive',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <Card key={index} variant="elevated">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-3">
              <metric.icon className={`h-6 w-6 ${metric.color}`} />
              {metric.change !== undefined && (
                <span className={`text-sm font-medium ${
                  metric.change >= 0 ? 'text-success' : 'text-destructive'
                }`}>
                  {metric.change >= 0 ? '+' : ''}{formatCurrency(metric.change)}
                </span>
              )}
            </div>
            
            <div className="space-y-1">
              <p className="text-sm text-text-secondary">{metric.title}</p>
              <p className={`text-2xl font-bold ${metric.color}`}>
                {metric.value}
              </p>
              {metric.subtitle && (
                <p className="text-xs text-text-secondary">{metric.subtitle}</p>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
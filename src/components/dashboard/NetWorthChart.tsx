import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface NetWorthChartProps {
  data: number[];
}

export const NetWorthChart = ({ data }: NetWorthChartProps) => {
  const chartData = data.map((value, index) => ({
    month: `Month ${index}`,
    netWorth: value,
  }));

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-card-border rounded-lg p-3 shadow-medium">
          <p className="font-medium text-text-primary">{label}</p>
          <p className="text-accent font-semibold">
            Net Worth: {formatCurrency(payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis 
            dataKey="month" 
            stroke="hsl(var(--text-secondary))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--text-secondary))"
            fontSize={12}
            tickFormatter={formatCurrency}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="netWorth" 
            stroke="hsl(var(--accent))" 
            strokeWidth={3}
            dot={{ fill: 'hsl(var(--accent))', strokeWidth: 2, r: 6 }}
            activeDot={{ r: 8, stroke: 'hsl(var(--accent))', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
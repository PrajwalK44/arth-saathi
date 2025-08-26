"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const chartData = [
  { date: "2024-01-01", portfolio: 850000, sip: 25000 },
  { date: "2024-02-01", portfolio: 875000, sip: 25000 },
  { date: "2024-03-01", portfolio: 920000, sip: 25000 },
  { date: "2024-04-01", portfolio: 890000, sip: 25000 },
  { date: "2024-05-01", portfolio: 950000, sip: 25000 },
  { date: "2024-06-01", portfolio: 1020000, sip: 25000 },
  { date: "2024-07-01", portfolio: 1100000, sip: 25000 },
  { date: "2024-08-01", portfolio: 1180000, sip: 25000 },
  { date: "2024-09-01", portfolio: 1150000, sip: 25000 },
  { date: "2024-10-01", portfolio: 1220000, sip: 25000 },
  { date: "2024-11-01", portfolio: 1280000, sip: 25000 },
  { date: "2024-12-01", portfolio: 1250000, sip: 25000 },
];

const chartConfig = {
  portfolio: {
    label: "Portfolio Value",
    color: "hsl(var(--primary))",
  },
  sip: {
    label: "SIP Amount",
    color: "hsl(var(--muted-foreground))",
  },
} satisfies ChartConfig;

export function PortfolioChart() {
  const [timeRange, setTimeRange] = React.useState("12m");

  const filteredData = React.useMemo(() => {
    const now = new Date();
    let monthsToSubtract = 12;

    if (timeRange === "6m") {
      monthsToSubtract = 6;
    } else if (timeRange === "3m") {
      monthsToSubtract = 3;
    }

    const startDate = new Date(now);
    startDate.setMonth(startDate.getMonth() - monthsToSubtract);

    return chartData.filter((item) => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate;
    });
  }, [timeRange]);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
        <CardDescription>Your investment growth over time</CardDescription>
        <CardAction>
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
              <SelectItem value="12m">Last 12 months</SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillPortfolio" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-portfolio)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-portfolio)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-IN", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-IN", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                  formatter={(value, name) => [
                    `₹${(value as number).toLocaleString("en-IN")}`,
                    name === "portfolio" ? "Portfolio Value" : "SIP Amount",
                  ]}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="portfolio"
              type="natural"
              fill="url(#fillPortfolio)"
              stroke="var(--color-portfolio)"
              strokeWidth={2}
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

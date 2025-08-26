import { TrendingDown, TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SectionCards() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 lg:px-6 md:grid-cols-2 lg:grid-cols-4">
      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardDescription>Total Portfolio Value</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            ₹12,50,000
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up this month <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Portfolio growth over last 6 months
          </div>
        </CardFooter>
      </Card>

      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardDescription>Monthly SIP</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            ₹25,000
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-blue-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              Active
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Regular investment plan <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Consistent monthly contributions
          </div>
        </CardFooter>
      </Card>

      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardDescription>Emergency Fund</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            ₹3,45,000
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-orange-600">
              <TrendingDown className="h-3 w-3 mr-1" />
              -5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Needs attention <TrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">Target: 6 months expenses</div>
        </CardFooter>
      </Card>

      <Card className="relative overflow-hidden">
        <CardHeader>
          <CardDescription>Annual Returns</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums">
            14.5%
          </CardTitle>
          <CardAction>
            <Badge variant="outline" className="text-green-600">
              <TrendingUp className="h-3 w-3 mr-1" />
              +2.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Exceeds market average <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Beating benchmark by 2.5%</div>
        </CardFooter>
      </Card>
    </div>
  );
}

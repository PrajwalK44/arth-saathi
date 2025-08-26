import { TrendingUp, TrendingDown, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface PortfolioItem {
  id: number;
  asset: string;
  type: string;
  status: string;
  amount: string;
  returns: string;
  allocation: string;
}

interface PortfolioTableProps {
  data: PortfolioItem[];
}

export function PortfolioTable({ data }: PortfolioTableProps) {
  return (
    <div className="w-full space-y-4">
      <div className="rounded-md border px-4 lg:px-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Asset Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="text-right">Returns</TableHead>
              <TableHead className="text-right">Allocation</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => {
              const isPositive = item.returns.startsWith("+");
              return (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.asset}</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="text-xs">
                      {item.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        item.status === "Active" ? "default" : "secondary"
                      }
                      className="text-xs"
                    >
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {item.amount}
                  </TableCell>
                  <TableCell className="text-right">
                    <div
                      className={`font-medium flex items-center justify-end gap-1 ${
                        isPositive ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {isPositive ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {item.returns}
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    {item.allocation}
                  </TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Investment</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Remove Asset
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="px-4 lg:px-6">
        <div className="text-sm text-muted-foreground">
          Showing {data.length} asset(s) total.
        </div>
      </div>
    </div>
  );
}

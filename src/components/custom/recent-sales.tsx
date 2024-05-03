"use client";

import { RecentSale } from "@/app/data/sales/route";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMeasurePerformance } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

export function RecentSales() {


  const { measure } = useMeasurePerformance("recentSales");


  const { data: recentSales } = useQuery({ queryKey: ["sales"], queryFn: () => measure(() => fetch("/data/sales").then(res => res.json() as Promise<RecentSale[]>)) });


  return (
    <div className="space-y-8">
      {recentSales?.map((sale) => (
        <div className="flex items-center" key={sale.id}>
          <Avatar className="h-9 w-9">
            <AvatarImage src={sale.avatar} alt="Avatar" />
            <AvatarFallback>
              {sale.name.split(" ")[0] + sale.name.split(" ").at(-1)}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{sale.name}</p>
            <p className="text-sm text-muted-foreground">{sale.email}</p>
          </div>
          <div className="ml-auto font-medium">+£{sale.amount}</div>
        </div>
      ))}
    </div>
  );
}


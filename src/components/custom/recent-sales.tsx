"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState, useEffect } from "react";
import { RecentSale, getRecentSales } from "./data-generators";

export function RecentSales() {
  const [recentSales, setRecentSales] = useState<RecentSale[]>([]);

  useEffect(() => {
    getRecentSales().then((data) => setRecentSales(data));
  }, []);

  return (
    <div className="space-y-8">
      {recentSales.map((sale) => (
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

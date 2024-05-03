"use client";

import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { BanknotesIcon, CurrencyPoundIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useQuery } from "@tanstack/react-query";
import { Stat } from "@/app/data/stats/route";
import { useRef } from "react";
import { useMeasurePerformance } from "@/lib/utils";

const iconRepo = {
  pound: CurrencyPoundIcon,
  bankNotes: BanknotesIcon,
  users: UserGroupIcon,
};





export function HeadlineStats() {

  const { measure } = useMeasurePerformance("HeadlineStats");

  const { data: stats } = useQuery({ queryKey: ["headlineStats"], queryFn: () => measure(() => fetch("/data/stats").then(res => res.json() as Promise<Stat[]>)) });

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats?.map((stat) => {
        const Icon = iconRepo[stat.icon as keyof typeof iconRepo];

        return (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.percentage}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

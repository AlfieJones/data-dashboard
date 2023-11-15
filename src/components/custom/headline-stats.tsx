"use client";

import { ReactNode, useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Stat, getHeadlineStats } from "./data-generators";
import { BanknotesIcon, CurrencyPoundIcon, UserGroupIcon } from "@heroicons/react/24/outline";

const iconRepo = {
  pound: CurrencyPoundIcon,
  bankNotes: BanknotesIcon,
  users: UserGroupIcon,
};

export function HeadlineStats() {
  const [stats, setStats] = useState<Stat[]>([]);

  useEffect(() => {
    getHeadlineStats().then((data) => setStats(data));
  }, []);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
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

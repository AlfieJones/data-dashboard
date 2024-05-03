"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { useQuery } from "@tanstack/react-query";
import { useMeasurePerformance } from "@/lib/utils";

// Hack to ignore the defaultProps warning
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export function Overview() {

  const { measure } = useMeasurePerformance("overview");


  const { data } = useQuery({ queryKey: ["overview"], queryFn: () => measure(() => fetch("/data/overview").then(res => res.json() as Promise<Record<any, any>[]>)) });


  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

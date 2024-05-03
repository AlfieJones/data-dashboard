"use client";

import { type ClassValue, clsx } from "clsx";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function useMeasurePerformance(name: string) {
  const timeRef = useRef<number>(0);

  return {
    measure: async <T>(fn: () => Promise<T>) => {
      timeRef.current = performance.now();
      const result_1 = await fn();
      console.log(`${name}:${performance.now() - timeRef.current}ms`);
      return result_1;
    },
  };
}

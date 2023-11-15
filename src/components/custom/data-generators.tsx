"use server";

import { faker } from "@faker-js/faker";
import { CurrencyDollarIcon } from "@heroicons/react/24/outline";

export const getOverviewData = async () => {
  return [
    {
      name: "Jan",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Feb",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Mar",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Apr",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "May",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jun",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Jul",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Aug",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Sep",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Oct",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Nov",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
    {
      name: "Dec",
      total: Math.floor(Math.random() * 5000) + 1000,
    },
  ];
};

export interface RecentSale {
  id: string;
  name: string;
  email: string;
  avatar: string;
  amount: number;
}

export async function getRecentSales() {
  const recentSales: RecentSale[] = [];

  for (let i = 0; i < 4; i++) {
    recentSales.push({
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      amount: Math.floor(Math.random() * 5000) + 1000,
    });
  }

  return recentSales;
}

export interface Stat {
  title: string;
  value: string;
  percentage: string;
  icon: string;
}

export async function getHeadlineStats(): Promise<Stat[]> {
  return [
    {
      title: "Total Revenue",
      value: `£${Math.floor(Math.random() * 5000) + 1000}`,
      percentage: `+${Math.floor(Math.random() * 100)}% from last month`,
      icon: "pound",
    },
    {
      title: "Subscriptions",
      value: `${Math.floor(Math.random() * 5000) + 1000}`,
      percentage: `+${Math.floor(Math.random() * 100)}% from last month`,
      icon: "bankNotes",
    },
    {
      title: "New Customers",
      value: `${Math.floor(Math.random() * 5000) + 1000}`,
      percentage: `+${Math.floor(Math.random() * 100)}% from last month`,
      icon: "users",
    },
    {
      title: "Refunds",
      value: `${Math.floor(Math.random() * 5000) + 1000}`,
      percentage: `+${Math.floor(Math.random() * 100)}% from last month`,
      icon: "pound",
    },
  ];
}

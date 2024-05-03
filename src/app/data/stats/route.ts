export interface Stat {
  title: string;
  value: string;
  percentage: string;
  icon: string;
}

async function getHeadlineStats(): Promise<Stat[]> {
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

export async function GET() {
  return new Response(JSON.stringify(await getHeadlineStats()));
}

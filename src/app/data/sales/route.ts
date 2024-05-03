import { faker } from "@faker-js/faker";

export interface RecentSale {
  id: string;
  name: string;
  email: string;
  avatar: string;
  amount: number;
}

function getRecentSales() {
  const recentSales: RecentSale[] = [];

  for (let i = 0; i < 5; i++) {
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


export async function GET() {
  return new Response(
    JSON.stringify(getRecentSales())
  );
}

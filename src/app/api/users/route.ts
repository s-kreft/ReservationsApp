import { db } from "@/app/data/credentials";

export async function GET(request: Request) {
  const data = await db();
  return new Response(JSON.stringify(data.users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

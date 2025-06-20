import { Room } from "@/app/types";
import { db } from "@/app/data/credentials";

export async function POST(request: Request) {
  const body = await request.json();
  const room = body as Room;

  // Here you would typically save the room to a database
  // For demonstration, we will just return the room data

  const data = await db();
  data.rooms.push(room); // Assuming rooms is an array in your data source
  return new Response(JSON.stringify(room), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}

export async function GET(request: Request) {
  const data = await db();
  return new Response(JSON.stringify(data.rooms), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

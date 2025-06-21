import { db } from "@/app/data/credentials";
import { Reservation } from "@/app/types";

export async function POST(request: Request) {
  const data = await request.json();
  const myDb = await db();
  console.log("Received reservation data:", data);
  const room = myDb.rooms.find((room) => room.id === data.roomId);
  if (room && room.reservations) {
    console.log("Found room:", room.name);
    room.reservations.push(data.reservation as Reservation);
    console.log("Updated reservations:", room.reservations);
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

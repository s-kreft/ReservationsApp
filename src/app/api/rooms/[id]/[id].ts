import { Room } from "@/app/types";
import { db } from "@/app/data/credentials";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = await db();
  const { id } = req.query;
  console.log("Request received for room ID:", id);
  const roomFound = data.rooms.filter((room) => room.id === Number(id));
  console.log("Room found:", roomFound);
  return new Response(JSON.stringify(roomFound), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}

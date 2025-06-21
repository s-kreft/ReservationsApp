"use client";
import { RoomsContext } from "@/app/lib/roomsContext";
import * as types from "@/app/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Room() {
  const { rooms, dispatch } = React.useContext(RoomsContext);
  const params = useParams();
  useEffect(() => {
    console.log("Params:", params);
    const room = rooms.find((room) => room.id === Number(params.id));

    setRoomDetails(room);
  }, []);
  const [roomDetails, setRoomDetails] = useState<types.Room>();

  return (
    <div>
      <h1>Details of room {roomDetails?.name}</h1>
      <p>Here you can view and manage the details of a specific room.</p>
    </div>
  );
}

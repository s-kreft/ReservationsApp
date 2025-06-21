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

  // useEffect(() => {
  //   setRoomDetails(
  //     rooms.find((room) => room.id === Number(params.id)) as types.Room
  //   );
  // }, [params.id, rooms]);
  const [roomDetails, setRoomDetails] = useState<types.Room>();

  if (!roomDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Details of room {roomDetails?.name}</h1>

      <p>
        {roomDetails?.reservations?.map((res, index) => (
          <div key={index}>
            <span>
              {new Date(res.dateStart)?.toLocaleDateString()} -{" "}
              {new Date(res.dateEnd)?.toLocaleDateString()}
            </span>
            <span> by {res?.userName}</span>
          </div>
        ))}
      </p>
    </div>
  );
}

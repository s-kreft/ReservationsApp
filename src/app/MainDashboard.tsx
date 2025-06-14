"use client";
import { useEffect, useState } from "react";
import Login from "./login/Login";
import RoomList from "./rooms/RoomsList";
import { Room } from "./types";
import roomsData from "./data/roomsData.json";

// export const LoginContext = createContext();

export default function MainDashboard() {
  const [rooms, setRooms] = useState<Room[]>([]);

  useEffect(() => {
    const loadedRooms = roomsData as Room[];

    setRooms(loadedRooms);
  }, []);

  return <RoomList rooms={rooms}></RoomList>;
}

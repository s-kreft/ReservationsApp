"use client";
import { useEffect, useState } from "react";
import Login from "./login/Login";
import RoomList from "./rooms/RoomsList";
import { Room } from "./types";
import roomsData from "./data/roomsData.json";
import { ReusableModal } from "./components/ReusableModal";
import NewRoomForm from "./rooms/NewRoomForm";
import NavBar from "./components/NavBar";

// export const LoginContext = createContext();

export default function MainDashboard() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadedRooms = roomsData as Room[];

    setRooms(loadedRooms);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onNewRoomSubmit = (room: Room) => {
    setRooms([...rooms, room]);
  };

  return (
    <>
      <NavBar></NavBar>
      <button className="btn btn-outline btn-success" onClick={openModal}>
        Add New Room
      </button>
      <RoomList rooms={rooms}></RoomList>
      {isModalOpen && (
        <ReusableModal isOpen={isModalOpen} onClose={closeModal}>
          <NewRoomForm onNewRoomSubmit={onNewRoomSubmit}></NewRoomForm>
        </ReusableModal>
      )}
    </>
  );
}

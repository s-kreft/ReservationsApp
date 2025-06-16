"use client";
import { useEffect, useState } from "react";
import Login from "./login/Login";
import RoomList from "./rooms/RoomsList";
import { Reservation, Room } from "./types";
import roomsData from "./data/roomsData.json";
import { ReusableModal } from "./components/ReusableModal";
import NewRoomForm from "./rooms/NewRoomForm";
import NavBar from "./components/NavBar";
import BookingForm from "./reservation/BookingForm";

// export const LoginContext = createContext();

export default function MainDashboard() {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

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

  const openReservationModal = () => {
    setIsReservationModalOpen(true);
  };

  const closeReservationModal = () => {
    setIsReservationModalOpen(false);
  };

  const onNewRoomSubmit = (room: Room) => {
    setRooms([...rooms, room]);
  };

  const onNewReservationSubmition = (reservation: Reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <>
      <NavBar></NavBar>
      <button className="btn btn-outline btn-success" onClick={openModal}>
        Add New Room
      </button>
      <RoomList
        rooms={rooms}
        openReservationModal={openReservationModal}
      ></RoomList>
      {isModalOpen && (
        <ReusableModal isOpen={isModalOpen} onClose={closeModal}>
          <NewRoomForm onNewRoomSubmit={onNewRoomSubmit}></NewRoomForm>
        </ReusableModal>
      )}
      {isReservationModalOpen && (
        <ReusableModal
          isOpen={isReservationModalOpen}
          onClose={closeReservationModal}
        >
          <BookingForm
            onNewReservationSubmit={onNewReservationSubmition}
          ></BookingForm>
        </ReusableModal>
      )}
    </>
  );
}

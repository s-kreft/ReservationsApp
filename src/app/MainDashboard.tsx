"use client";
import { useEffect, useState } from "react";
import Login from "./login/Login";
import RoomList from "./rooms/RoomsList";
import { db } from "@/app/data/credentials";
import { Reservation, Room } from "./types";
import { ReusableModal } from "./components/ReusableModal";
import NewRoomForm from "./rooms/NewRoomForm";
import NavBar from "./components/NavBar";
import BookingForm from "./reservation/BookingForm";
import { useTranslation } from "react-i18next";

// export const LoginContext = createContext();

export default function MainDashboard() {
  const { t } = useTranslation();
  const [rooms, setRooms] = useState<Room[]>([]);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  useEffect(() => {
    // const loadedRooms = roomsData as Room[];
    fetch(`http://localhost:3000/api/rooms`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      console.log("Response:", response);
      const loadedRooms = response.json() as Promise<Room[]>;
      loadedRooms.then((rooms) => {
        console.log("Loaded rooms:", rooms);
        setRooms(rooms);
      });
    });
    // setRooms(loadedRooms);
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
    fetch(`http://localhost:3000/api/rooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(room),
    }).then((response) => {
      console.log("Response:", response);
      setRooms([...rooms, room]);
    });
  };

  const onNewReservationSubmition = (reservation: Reservation) => {
    setReservations([...reservations, reservation]);
  };

  return (
    <>
      <button className="btn btn-outline btn-success" onClick={openModal}>
        {t("Add New Room")}
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

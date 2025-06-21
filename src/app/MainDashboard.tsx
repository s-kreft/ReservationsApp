"use client";
import { useContext, useEffect, useState } from "react";
import Login from "./login/Login";
import RoomList from "./rooms/RoomsList";
import { db } from "@/app/data/credentials";
import { Reservation, Room } from "./types";
import { ReusableModal } from "./components/ReusableModal";
import NewRoomForm from "./rooms/NewRoomForm";
import NavBar from "./components/NavBar";
import BookingForm from "./reservation/BookingForm";
import { useTranslation } from "react-i18next";
import { RoomActionType, RoomsContext } from "./lib/roomsContext";

// export const LoginContext = createContext();

export default function MainDashboard() {
  const { t } = useTranslation();
  // const [rooms, setRooms] = useState<Room[]>([]);
  const { rooms, dispatch } = useContext(RoomsContext);
  const [reservations, setReservations] = useState<Reservation[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  useEffect(() => {
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
        dispatch({ type: RoomActionType.SetRooms, rooms: rooms });
      });
    });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openReservationModal = (room: Room) => {
    setIsReservationModalOpen(true);
    setSelectedRoom(room);
  };

  const closeReservationModal = () => {
    setIsReservationModalOpen(false);
    setSelectedRoom(null);
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
      dispatch({
        type: RoomActionType.AddRoom,
        room: room,
      });
    });
  };

  const onNewReservationSubmition = (reservation: Reservation, room: Room) => {
    dispatch({
      type: RoomActionType.Update,
      room: {
        ...room,
        reservations: [...(room.reservations ?? []), reservation],
      },
    });
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
            room={selectedRoom}
          ></BookingForm>
        </ReusableModal>
      )}
    </>
  );
}

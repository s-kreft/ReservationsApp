import { useTranslation } from "react-i18next";
import { Room } from "../types";
import Image from "next/image";
import Link from "next/link";
import { RoomActionType, RoomsContext } from "../lib/roomsContext";
import { useContext } from "react";

type RoomListProps = {
  rooms: Room[];
  openReservationModal: () => void;
};

export default function RoomList({
  rooms,
  openReservationModal,
}: RoomListProps) {
  const { t } = useTranslation();
  const roomsContext = useContext(RoomsContext);
  roomsContext.dispatch({
    type: RoomActionType.SetRooms,
    rooms: rooms,
  });
  return (
    <ul className="list bg-base-100 rounded-box shadow-md">
      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide"></li>

      {rooms.map((room, index) => (
        // <li key={room.id} className="p-4 border-b border-base-300">
        //   <h3 className="font-bold">{room.name}</h3>
        //   <p>{room.description}</p>
        // </li>
        <li className="list-row" key={`room-` + index}>
          <div>
            <Image
              alt="Room Image"
              className="size-10 rounded-box"
              width={40}
              height={40}
              src="https://thumbs.dreamstime.com/b/blue-summer-house-courtyard-chekhov-estate-moscow-region-blue-summer-house-courtyard-chekhov-estate-372380839.jpg"
            />
          </div>
          <div>
            <div>{room.name}</div>
            <div className="text-xs uppercase font-semibold opacity-60">
              Status
            </div>
          </div>
          <p className="list-col-wrap text-xs">{room.description}</p>
          <Link href={`/rooms/${room.id}`}>
            <button className="btn btn-accent">{t("Reservations")}</button>
          </Link>

          <button className="btn btn-neutral" onClick={openReservationModal}>
            {t("Reserve")}
          </button>
        </li>
      ))}
    </ul>
  );
}

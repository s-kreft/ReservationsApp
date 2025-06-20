import { Room } from "../types";

type RoomListProps = {
  rooms: Room[];
  openReservationModal: () => void;
};

export default function RoomList({
  rooms,
  openReservationModal,
}: RoomListProps) {
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
            <img
              className="size-10 rounded-box"
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
          <button className="btn btn-neutral" onClick={openReservationModal}>
            Reserve
          </button>
          {/* <button className="btn btn-square btn-ghost">
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M6 3L20 12 6 21 6 3z"></path>
              </g>
            </svg>
          </button>
          <button className="btn btn-square btn-ghost">
            <svg
              className="size-[1.2em]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </g>
            </svg>
          </button> */}
        </li>
      ))}
    </ul>
  );
}

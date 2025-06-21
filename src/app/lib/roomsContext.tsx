"use client";

import { createContext, useEffect, useReducer } from "react";
import { Room } from "../types";

export enum RoomActionType {
  SetRooms,
  AddRoom,
  Remove,
  Update,
}

export type RoomAction =
  | { type: RoomActionType.SetRooms; rooms: Room[] }
  | { type: RoomActionType.AddRoom; room: Room }
  | { type: RoomActionType.Remove; roomId: Number }
  | { type: RoomActionType.Update; room: Room };

type RoomsContextType = {
  rooms: Room[];
  dispatch: React.Dispatch<RoomAction>;
};
export const RoomsContext = createContext<RoomsContextType>({
  rooms: [],
  dispatch: () => {},
});

export default function RoomsProvider({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: Room[];
}) {
  const [rooms, dispatch] = useReducer(roomsReducer, initialValue);

  function roomsReducer(state: Room[], action: RoomAction) {
    switch (action.type) {
      case RoomActionType.SetRooms: {
        return action.rooms; // Assuming action.users is an array of User
      }
      case RoomActionType.AddRoom: {
        return [...state, action.room];
      }
      case RoomActionType.Remove: {
        return state.filter((user) => user.id !== action.roomId);
      }
      case RoomActionType.Update: {
        return state.map((user) =>
          user.id === action.room.id ? action.room : user
        );
      }
    }
  }
  return (
    <RoomsContext.Provider value={{ rooms, dispatch }}>
      {children}
    </RoomsContext.Provider>
  );
}

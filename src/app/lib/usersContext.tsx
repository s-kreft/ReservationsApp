"use client";

import { createContext, useEffect, useReducer } from "react";
import { User } from "../types";

export enum UserActionType {
  SetUsers,
  AddUser,
  Remove,
  Update,
}

export type UserAction =
  | { type: UserActionType.SetUsers; users: User[] }
  | { type: UserActionType.AddUser; user: User }
  | { type: UserActionType.Remove; userId: number }
  | { type: UserActionType.Update; user: User };

type UserContextType = {
  users: User[];
  dispatch: React.Dispatch<UserAction>;
};
export const UserContext = createContext<UserContextType>({
  users: [],
  dispatch: () => {},
});

export default function UserProvider({
  children,
  initialValue,
}: {
  children: React.ReactNode;
  initialValue: User[];
}) {
  const [users, dispatch] = useReducer(usersReducer, initialValue);

  function usersReducer(state: User[], action: UserAction) {
    switch (action.type) {
      case UserActionType.SetUsers: {
        return action.users; // Assuming action.users is an array of User
      }
      case UserActionType.AddUser: {
        return [...state, action.user];
      }
      case UserActionType.Remove: {
        return state.filter((user) => user.id !== action.userId);
      }
      case UserActionType.Update: {
        return state.map((user) =>
          user.id === action.user.id ? action.user : user
        );
      }
    }
  }
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

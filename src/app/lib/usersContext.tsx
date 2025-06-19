"use client";

import { createContext, useReducer } from "react";
import { User } from "../types";

export enum UserActionType {
  AddUser,
}

export type UserAction = { type: UserActionType.AddUser; user: User };

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
      case UserActionType.AddUser: {
        return [...state, action.user];
      }
    }
  }
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

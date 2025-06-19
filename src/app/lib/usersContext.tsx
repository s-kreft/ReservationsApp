"use client";

import { createContext, useReducer } from "react";
import { User } from "../types";

export enum UserActionType {
  AddUser,
  Remove,
}

export type UserAction =
  | { type: UserActionType.AddUser; user: User }
  | { type: UserActionType.Remove; userId: number };

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
      case UserActionType.Remove: {
        return state.filter((user) => user.id !== action.userId);
      }
    }
  }
  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

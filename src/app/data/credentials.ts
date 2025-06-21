`use server`;
import { UserRole, User, Room } from "@/app/types";

import roomsData from "@/app/data/roomsData.json";

export const users: User[] = [
  { id: "1", name: "Alice", password: "alice", role: "customer" },
  { id: "2", name: "Bob", password: "bob", role: "staff" },
  { id: "3", name: "Admin", password: "admin", role: "admin" },
  { id: "4", name: "s-kreft", password: "s-kreft", role: "admin" },
];

export type DataSource = {
  users: User[];
  rooms: Room[];
};

export const DataSourceContext = {
  users,
  rooms: [
    // {
    //   id: 1,
    //   name: "Conference Room",
    //   description: "A room for meetings",
    //   reservations: [
    //     {
    //       dateStart: "2025-07-01T14:00:00.000Z",
    //       dateEnd: "2025-07-05T10:00:00.000Z",
    //       comments: "Reserved for annual conference",
    //       userName: "Alice",
    //     },
    //   ],
    // },
    // {
    //   id: 2,
    //   name: "Training Room",
    //   description: "A room for training sessions",
    // },
    // {
    //   id: 3,
    //   name: "Breakout Room",
    //   description: "A room for small group discussions",
    // },
    ...(roomsData as Room[]),
  ] as Room[],
};

export async function db(): Promise<DataSource> {
  return {
    users: await users,
    rooms: await DataSourceContext.rooms,
  };
}

export async function getUsers(): Promise<User[]> {
  const data = await db();
  return data.users;
}

export async function deleteUserById(id: number): Promise<void> {
  const index = users.findIndex((user) => user.id === id.toString());
  if (index !== -1) {
    users.splice(index, 1);
  }
}

export async function updateUserById(
  id: number,
  updatedUser: User
): Promise<void> {
  const index = users.findIndex((user) => user.id === id.toString());
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
  }
}

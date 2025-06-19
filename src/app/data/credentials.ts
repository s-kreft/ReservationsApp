`use server`;
import { UserRole, User } from "@/app/types";

export const users: User[] = [
  { id: 1, name: "Alice", password: "alice", role: "customer" },
  { id: 2, name: "Bob", password: "bob", role: "staff" },
  { id: 3, name: "Admin", password: "admin", role: "admin" },
];

export type DataSource = {
  users: User[];
};

export async function db(): Promise<DataSource> {
  return {
    users: await users,
  };
}

export async function getUsers(): Promise<User[]> {
  const data = await db();
  return data.users;
}

export async function deleteUserById(id: number): Promise<void> {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
}

export async function updateUserById(
  id: number,
  updatedUser: User
): Promise<void> {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedUser };
  }
}

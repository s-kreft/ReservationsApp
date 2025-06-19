import { UserRole, User } from "@/app/types";
export const users: User[] = [
  { id: 1, name: "Alice", password: "alice", role: "customer" },
  { id: 2, name: "Bob", password: "bob", role: "staff" },
  { id: 3, name: "Admin", password: "admin", role: "admin" },
];

export async function deleteUserById(id: number): Promise<void> {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
}

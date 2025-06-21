import React from "react";
import UsersList from "@/app/components/UsersList";
import UserProvider from "@/app/lib/usersContext";
import { getUsers } from "@/app/data/credentials";
import { RequireRole } from "@/app/login/RequireRole";

export default async function Users() {
  const users = getUsers();
  return (
    <>
      <RequireRole allowedRoles={["admin"]}>
        <UserProvider initialValue={await users}>
          <UsersList />
        </UserProvider>
      </RequireRole>
    </>
  );
}

export async function handleDeleteUser(id: string) {
  const response = await fetch(`http://localhost:3000/api/users/${id}`, {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  console.log("Reponse " + response.text().then((text) => console.log(text)));
  if (!response.ok) {
    throw new Error(`Failed to delete user with id ${id}`);
  }

  console.log("User deleted");
}

export async function handleUpdateUser(user: any) {
  console.log("Updating user:", user);
  const response = await fetch(`http://localhost:3000/api/users/${user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error(`Failed to update user with id ${user.id}`);
  }
  const updatedUser = await response.json();
  console.log("User updated:", updatedUser);
}

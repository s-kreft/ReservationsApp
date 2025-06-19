import React from "react";
import UsersList from "@/app/components/UsersList";
import UserProvider from "@/app/lib/usersContext";
import { getUsers } from "@/app/data/credentials";

export default async function Users() {
  const users = await getUsers();
  return (
    <UserProvider initialValue={users}>
      <UsersList users={users}></UsersList>
    </UserProvider>
  );
}

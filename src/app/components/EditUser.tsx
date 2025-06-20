"use client";
import React from "react";
import { User, UserRole } from "../types";

export default function EditUser({
  user,
  onSubmit,
}: {
  user: User;
  onSubmit: (user: User) => void;
}) {
  const { name, role } = user;
  const [username, setUsername] = React.useState(user.name);
  const [email, setEmail] = React.useState(user.role);
  return (
    <div className="w-full">
      <h1>Edit User</h1>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          className="input form-control w-full"
          defaultValue={name}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          className="input form-control w-full"
          defaultValue={role}
          onChange={(e) => setEmail((e.target.value as UserRole) || "customer")}
        />
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-2 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        onClick={() => {
          onSubmit({ ...user, name: username, role: email });
        }}
      >
        Save Changes
      </button>
    </div>
  );
}

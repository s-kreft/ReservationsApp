import React from "react";
import { User } from "../types";

export default function EditUser({
  user,
  onSubmit,
}: {
  user: User;
  onSubmit: (user: User) => void;
}) {
  return (
    <div className="w-full">
      <h1>Edit User</h1>
      <form
        className="form w-full"
        onSubmit={(e) => {
          const newUser = {
            ...user,
            name: e.currentTarget.username.value,
            role: e.currentTarget.email.value,
          };
          onSubmit(newUser);
        }}
      >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="input form-control w-full"
            defaultValue={user.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            className="input form-control w-full"
            defaultValue={user.role}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Save Changes
        </button>
      </form>
    </div>
  );
}

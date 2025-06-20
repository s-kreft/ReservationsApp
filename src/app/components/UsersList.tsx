"use client";

import { useContext, useRef, useState } from "react";
import { UserActionType, UserContext } from "../lib/usersContext";
import { User } from "../types";
import {
  handleDeleteUser as handleDelete,
  handleUpdateUser,
} from "../admin/users/page";
import EditUser from "./EditUser";

export default function UsersList() {
  const DeleteUserModal = useRef<HTMLDialogElement>(null);
  const EditUserModal = useRef<HTMLDialogElement>(null);
  const { users: savedUsers, dispatch } = useContext(UserContext);

  const [selectedUser, setSelectedUser] = useState<User>();

  const openEditUserModal = () => {
    EditUserModal.current?.showModal();
  };

  const handleDeleteUser = () => {
    if (selectedUser) {
      handleDelete(selectedUser.id.toString()).then(() => {
        dispatch({
          type: UserActionType.Remove,
          userId: selectedUser.id,
        });
      });
    }
  };

  const onsubmit = (user: User) => {
    if (!user) return;
    handleUpdateUser(user).then(() => {
      dispatch({ type: UserActionType.Update, user });
    });
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {savedUsers.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  className="size-10 rounded-box"
                  src="https://thumbs.dreamstime.com/b/blue-summer-house-courtyard-chekhov-estate-moscow-region-blue-summer-house-courtyard-chekhov-estate-372380839.jpg"
                />
              </td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>status</td>
              <td>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => {
                    setSelectedUser(user);
                    openEditUserModal();
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    setSelectedUser(user);
                    DeleteUserModal.current?.showModal();
                  }}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {
        <dialog ref={DeleteUserModal} id="remove-user-modal" className="modal">
          <div className="modal-box">
            Remove User?
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-warning"
                  onClick={() => handleDeleteUser()}
                >
                  Remove
                </button>
                <button className="btn" onClick={() => {}}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      }

      {selectedUser && (
        <dialog ref={EditUserModal} id="edit-user-modal" className="modal">
          <div className="modal-box">
            <div className="modal-action">
              <EditUser
                user={selectedUser}
                onSubmit={(user) => onsubmit(user)}
              ></EditUser>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

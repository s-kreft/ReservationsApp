"use client";

import { useContext, useRef, useState } from "react";
import { UserActionType, UserContext } from "../lib/usersContext";
import { ReusableModal } from "./ReusableModal";
import { is } from "react-day-picker/locale";
import { User } from "../types";
import { deleteUserById } from "../data/credentials";

export default function UsersList() {
  const DeleteUserModal = useRef<HTMLDialogElement>(null);
  const { users, dispatch } = useContext(UserContext);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isRemoveUserModalOpen, setIsRemoveUserModalOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState<User>();

  const openUsersListModal = () => {
    setIsEditUserModalOpen(true);
  };

  const closeUsersListModal = () => {
    setIsEditUserModalOpen(false);
  };

  const openRemoveUsertModal = () => {
    setIsRemoveUserModalOpen(true);
  };

  const closeRemoveUserModal = () => {
    setIsRemoveUserModalOpen(false);
  };

  const DeleteUser = () => {
    if (selectedUser) {
      deleteUserById(selectedUser.id).then(() => {
        dispatch({
          type: UserActionType.Remove,
          userId: selectedUser.id,
        });
      });
    }
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
          {users.map((user) => (
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
                    openUsersListModal();
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    setSelectedUser(user);
                    DeleteUserModal.current?.showModal();
                    openRemoveUsertModal();
                  }}
                >
                  Remove
                </button>
              </td>
              {/* <td>{user.status}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {isEditUserModalOpen && (
        <ReusableModal
          isOpen={isEditUserModalOpen}
          onClose={closeUsersListModal}
        >
          EDIT
        </ReusableModal>
      )}

      {isRemoveUserModalOpen && (
        <dialog ref={DeleteUserModal} id="reusable_modal" className="modal">
          <div className="modal-box">
            Remove User?
            <div className="modal-action">
              <form method="dialog">
                <button
                  className="btn btn-warning"
                  onClick={() => DeleteUser()}
                >
                  Remove
                </button>
                <button className="btn" onClick={() => closeRemoveUserModal()}>
                  Close
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

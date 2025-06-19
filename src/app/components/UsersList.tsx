"use client";

import { useContext, useState } from "react";
import { UserContext } from "../lib/usersContext";
import { ReusableModal } from "./ReusableModal";
import { is } from "react-day-picker/locale";

export default function UsersList() {
  const { users, dispatch } = useContext(UserContext);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isRemoveUserModalOpen, setIsRemoveUserModalOpen] = useState(false);

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
                    openUsersListModal();
                  }}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
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
        <ReusableModal
          isOpen={isRemoveUserModalOpen}
          onClose={closeRemoveUserModal}
        >
          Remove User?
        </ReusableModal>
      )}
    </div>
  );
}

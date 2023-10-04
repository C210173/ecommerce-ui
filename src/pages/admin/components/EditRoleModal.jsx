import React, { useState } from "react";

const EditRoleModal = ({ user, closeModal, onSave }) => {
  const [newRole, setNewRole] = useState(user.role);

  const handleSave = () => {
    onSave(user.id, newRole);
    closeModal();
  };
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center">
      <div className="fixed z-40 inset-0 bg-black bg-opacity-50"></div>
      <div className="bg-white z-50 p-4 rounded-lg shadow-md w-[20vw]">
        <h2 className="text-lg font-semibold mb-2">Edit Role</h2>
        <div className="mb-4">
          <label className="block text-gray-700">New Role:</label>
          <select
            className="rounded-md outline-none border-gray-300 w-full p-2"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
          >
            <option value="ADMIN">ADMIN</option>
            <option value="USER">USER</option>
            <option value="SHIPPER">SHIPPER</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditRoleModal;

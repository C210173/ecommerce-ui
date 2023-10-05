import React, { useState } from "react";
const EditStatusModal = ({ isOpen, onClose, currentStatus, onSave }) => {
  const [newStatus, setNewStatus] = useState(currentStatus);

  const handleSave = () => {
    onSave(newStatus);
    onClose();
  };

  return (
    <div
      className={`${
        isOpen ? "fixed" : "hidden"
      } inset-0 flex items-center justify-center z-50`}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="bg-white p-4 rounded-lg z-10 w-[30vw]">
        <h2 className="text-lg text-center font-bold mb-4">Edit Status</h2>
        <div className="mb-4">
          <label className="block font-semibold">Current Status:</label>
          <p className="text-gray-600">{currentStatus}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">New Status:</label>
          <select
            className="border rounded-md w-full h-8 px-2"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
          >
            <option value="PENDING">PENDING</option>
            <option value="PLACED">PLACED</option>
            <option value="CONFIRMED">CONFIRMED</option>
            <option value="DELIVERING">DELIVERING</option>
            <option value="DELIVERED">DELIVERED</option>
            <option value="CANCELLED">CANCELLED</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={handleSave}
          >
            Save
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded "
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStatusModal;

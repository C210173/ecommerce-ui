import React from "react";

const ConfirmDeleteModal = ({ children, onCancel, onDelete, message }) => {
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed z-40 inset-0 bg-black bg-opacity-50"></div>
        <div className="modal-container z-50 bg-white rounded-lg shadow-lg p-4 w-[30vw]">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Confirm Delete
          </h2>
          <p className="text-gray-700 mb-4">
            {message} <strong>{children.name}</strong>?
          </p>
          <div className="flex justify-end">
            <button
              onClick={onCancel}
              className="px-4 py-2 mr-2 bg-gray-300 hover:bg-gray-400 text-gray-800 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onDelete(children.id);
                onCancel();
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;

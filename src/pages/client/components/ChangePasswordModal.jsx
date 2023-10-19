import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePasswordAction } from "../../../redux/user/Action";

const ChangePasswordModal = ({ onClose, onPasswordChangeSuccess }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const handleClose = onClose;

  const handleSave = async () => {
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (newPassword.length < 8) {
      setError("Password should be of minimum 8 characters");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      setError("New password and confirm password do not match.");
      return;
    }
    try {
      const changePassData = {
        token: token,
        data: {
          currentPassword: currentPassword,
          newPassword: newPassword,
        },
      };
      const resData = await dispatch(changePasswordAction(changePassData));
      if (resData && resData.status) {
        onPasswordChangeSuccess();
        handleClose();
      }
    } catch (error) {
      const response = error.response;
      if (response && response.data) {
        setError(response.data.message);
      } else {
        setError("An unknown error");
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed z-40 inset-0 bg-black bg-opacity-50"></div>
        <div className="bg-white p-4 rounded-lg w-96 z-50">
          <h2 className="text-lg font-semibold mb-4">Change Password</h2>
          <input
            type="password"
            placeholder="old password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="New password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Confirm New password"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
          {error && <p className="text-red-600">{error}</p>}
          <button
            onClick={handleSave}
            className="bg-green-600 text-white py-2 rounded-md w-full hover:bg-green-700"
          >
            Save
          </button>
          <button
            onClick={handleClose}
            className="bg-red-600 text-white py-2 rounded-md w-full mt-2 hover:bg-red-700"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePasswordModal;

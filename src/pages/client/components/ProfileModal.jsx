import React, { useEffect, useState } from "react";

const ProfileModal = ({ isOpen, onClose, userData }) => {
  const [newProfileData, setNewProfileData] = useState({
    fullName: userData.fullName,
    email: userData.email,
    phoneNumber: userData.phoneNumber,
  });
  useEffect(() => {
    // Mỗi khi userData thay đổi, cập nhật newProfileData
    setNewProfileData({
      fullName: userData.fullName,
      email: userData.email,
      phoneNumber: userData.phoneNumber,
    });
  }, [userData]);

  const [addressData, setAddressData] = useState(
    userData.address.map((address) => ({ ...address }))
  );

  const [paymentData, setPaymentData] = useState(
    userData.paymentDetails.map((paymentDetail) => ({ ...paymentDetail }))
  );

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "profile") {
      setNewProfileData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (section === "address") {
      const updatedAddressData = [...addressData];
      const index = updatedAddressData.findIndex(
        (address) => address.id === name
      );
      updatedAddressData[index][name] = value;
      setAddressData(updatedAddressData);
    } else if (section === "payment") {
      const updatedPaymentData = [...paymentData];
      const index = updatedPaymentData.findIndex(
        (paymentDetail) => paymentDetail.id === name
      );
      updatedPaymentData[index][name] = value;
      setPaymentData(updatedPaymentData);
    }
  };
  const handleSubmit = () => {
    // Xử lý khi người dùng lưu thông tin cá nhân
    console.log("New Profile Data:", newProfileData);
    console.log("New Address Data:", addressData);
    console.log("New Payment Data:", paymentData);
    onClose(); // Đóng modal
  };

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center block">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-lg font-semibold">Edit Profile</h2>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                onChange={handleChange}
                value={newProfileData.fullName}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={newProfileData.email}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                onChange={handleChange}
                value={newProfileData.phoneNumber}
                className="mt-1 p-2 border rounded-md w-full"
              />
            </div>

            {/* Hiển thị địa chỉ */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Address</h2>
              {userData.address.map((address, index) => (
                <div key={index}>
                  <p className="mt-2">
                    <strong>Street:</strong> {address.street}
                  </p>
                  <p className="mt-2">
                    <strong>City:</strong> {address.city}
                  </p>
                  <p className="mt-2">
                    <strong>State:</strong> {address.state}
                  </p>
                  <p className="mt-2">
                    <strong>Postal Code:</strong> {address.postalCode}
                  </p>
                  <p className="mt-2">
                    <strong>Country:</strong> {address.country}
                  </p>
                </div>
              ))}
            </div>

            {/* Hiển thị chi tiết thanh toán */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold">Payment Details</h2>
              {userData.paymentDetails.map((paymentDetail, index) => (
                <div key={index}>
                  <p className="mt-2">
                    <strong>Card Number:</strong> {paymentDetail.cardNumber}
                  </p>
                  <p className="mt-2">
                    <strong>Card Holder:</strong> {paymentDetail.cardHolderName}
                  </p>
                  <p className="mt-2">
                    <strong>Expiration Date:</strong>{" "}
                    {paymentDetail.expirationDate}
                  </p>
                  <p className="mt-2">
                    <strong>CVV:</strong> {paymentDetail.cvv}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={handleSubmit}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-base font-medium text-white hover:bg-gradient-to-l focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;

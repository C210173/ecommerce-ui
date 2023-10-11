import React, { useState } from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import ProfileModal from "./components/ProfileModal";

const Profile = () => {
  // Đây là dữ liệu người dùng từ backend
  const userData = {
    id: "6518517e35fe316d520dfa1c",
    password: "$2a$10$Jh89E7ciZNFY6yfSqGgLDODG99OqzFpNo1wAf44owv.fXQae55G1y",
    fullName: "Ngọc Vinh",
    email: "vinh@gmail.com",
    phoneNumber: "07088881119",
    role: "USER",
    address: [
      {
        street: "New Street",
        city: "New City",
        state: "New State",
        postalCode: "New Zip Code",
        country: "New Country",
      },
    ],
    paymentDetails: [
      {
        cardNumber: "5253426576476576",
        cardHolderName: "ngoc vinh",
        expirationDate: "2028-10-20",
        cvv: "New CVV",
      },
    ],
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hàm mở modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Hàm đóng modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <DefaultHomeLayout
      children={
        <div className="mt-20">
          <div className="max-w-screen-xl mx-auto">
            <p className="text-center text-2xl font-bold text-gray-800 my-5">
              Your Profile
            </p>
            <div className="flex">
              <div className="w-[40%] min-h-[64.2vh] flex items-center justify-center">
                <img
                  className="rounded-full object-cover h-[64.2vh] w-[64.2vh]"
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt=""
                />
              </div>
              <div className="w-[60%] px-10">
                <div className="mt-5">
                  <h2 className="text-xl font-semibold">Name:</h2>
                  <p>{userData.fullName}</p>
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold">Email:</h2>
                  <p>{userData.email}</p>
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold">Phone:</h2>
                  <p>{userData.phoneNumber}</p>
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold">Address:</h2>
                  <p>
                    {userData.address[0].postalCode},{" "}
                    {userData.address[0].street}, {userData.address[0].city},
                    {userData.address[0].state}, {userData.address[0].country}
                  </p>
                </div>
                <div className="mt-5">
                  <h2 className="text-xl font-semibold">Payment Details:</h2>
                  <p>Card Number: {userData.paymentDetails[0].cardNumber}</p>
                  <p>
                    Card Holder: {userData.paymentDetails[0].cardHolderName}
                  </p>
                  <p>
                    Expiration Date: {userData.paymentDetails[0].expirationDate}
                  </p>
                </div>
                <div className="mt-8">
                  <button
                    onClick={openModal}
                    className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l text-white px-4 py-2 rounded-md "
                  >
                    Change Profile
                  </button>
                  <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:bg-gradient-to-l text-white px-4 py-2 ml-4 rounded-md ">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          </div>
          <ProfileModal
            isOpen={isModalOpen}
            onClose={closeModal}
            userData={userData}
          />
        </div>
      }
    />
  );
};

export default Profile;

import React from "react";
import DefaultHomeLayout from "./layout/DefaultHomeLayout";
import { useSelector } from "react-redux";

const Profile = () => {
  const reqUser = useSelector((store) => store.auth.reqUser);
  return (
    <DefaultHomeLayout>
      <div className="my-20">
        <div className="max-w-screen-xl mx-auto">
          <p className="text-center text-2xl font-bold text-gray-800 my-5">
            Your Profile
          </p>
          <div className="flex">
            <div className="w-[40%] min-h-[64.2vh] flex items-center justify-center">
              <img
                className="rounded-full object-cover h-[64.2vh] w-[64.2vh] border"
                src={
                  reqUser?.imageUrl ||
                  "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                }
                alt=""
              />
            </div>
            <div className="w-[60%] px-10">
              <div className="mt-5">
                <h2 className="text-xl font-semibold">Name:</h2>
                <p>{reqUser?.fullName}</p>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-semibold">Email:</h2>
                <p>{reqUser?.email}</p>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-semibold">Phone:</h2>
                <p>{reqUser?.phoneNumber}</p>
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-semibold">Address:</h2>
                {reqUser?.address && (
                  <p>
                    {reqUser.address.postalCode &&
                      `${reqUser.address.postalCode}, `}
                    {reqUser.address.street && `${reqUser.address.street}, `}
                    {reqUser.address.city && `${reqUser.address.city}, `}
                    {reqUser.address.state && `${reqUser.address.state}, `}
                    {reqUser.address.country && `${reqUser.address.country}`}
                  </p>
                )}
                {!reqUser?.address && <p>Address has not been updated</p>}
              </div>
              <div className="mt-5">
                <h2 className="text-xl font-semibold">Payment Details:</h2>
                {reqUser?.paymentDetails ? (
                  <>
                    <p>Card Number: {reqUser?.paymentDetails?.cardNumber}</p>
                    <p>
                      Card Holder: {reqUser?.paymentDetails?.cardHolderName}
                    </p>
                    <p>
                      Expiration Date: {reqUser?.paymentDetails?.expirationDate}
                    </p>
                  </>
                ) : (
                  <p>Payment details has not been updated</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultHomeLayout>
  );
};

export default Profile;

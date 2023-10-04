import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const UserModal = ({ name, email, address, closeModal }) => {
  const orderHistory = [
    { id: 1, productName: "Product 1", status: "Delivered" },
    { id: 2, productName: "Product 2", status: "Processing" },
    { id: 3, productName: "Product 3", status: "Cancelled" },
    { id: 4, productName: "Product 4", status: "Delivered" },
    { id: 5, productName: "Product 5", status: "Processing" },
    { id: 6, productName: "Product 6", status: "Processing" },
  ];
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex  items-center justify-center min-h-screen">
        {/* Lớp nền mờ */}
        <div className="fixed z-40 inset-0 bg-black bg-opacity-50"></div>
        <div className="z-50 bg-white flex rounded-lg shadow-lg p-4 h-[50vh] w-[50vw] relative">
          <div className="flex flex-col w-[20vw] items-center justify-center">
            <img
              className="rounded-full object-cover h-[10vw] w-[10vw]"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
          </div>
          <div className="flex flex-col w-[28vw] justify-center">
            <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
            <div className="flex items-center">
              <MdOutlineMail className="text-xl text-red-500" />
              <p className="ml-3 text-gray-500">{email}</p>
            </div>
            <div className="flex items-center">
              <BsFillHouseCheckFill className="text-xl text-blue-400" />
              <p className="ml-3 text-gray-500">{address}</p>
            </div>
            <div className="mt-3">
              <h3 className="text-gray-700">Order history</h3>
              <div className="overflow-auto mt-2 max-h-[20vh]">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        ID order
                      </th>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        Product name
                      </th>
                      <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {orderHistory.map((order) => (
                      <tr key={order.id}>
                        <td className="px-6 py-4">{order.id}</td>
                        <td className="px-6 py-4">{order.productName}</td>
                        <td className="px-6 py-4">{order.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <button onClick={() => closeModal()} className="h-5 top-0 right-0">
            <ImCancelCircle />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;

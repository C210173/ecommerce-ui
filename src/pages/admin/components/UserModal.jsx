import React, { useEffect } from "react";
import { ImCancelCircle } from "react-icons/im";
import { BsFillHouseCheckFill } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderByIdAction } from "../../../redux/order/Action";

const UserModal = ({ user, closeModal }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const userOrderById = useSelector((store) => store.order.userOrderById);
  useEffect(() => {
    const data = {
      token: token,
      userId: user?.id,
    };
    if (token) dispatch(getUserOrderByIdAction(data));
    // eslint-disable-next-line
  }, [token]);
  return (
    <div className="fixed z-50 inset-0 overflow-y-auto">
      <div className="flex  items-center justify-center min-h-screen">
        {/* Lớp nền mờ */}
        <div className="fixed z-40 inset-0 bg-black bg-opacity-50"></div>
        <div className="z-50 bg-white flex rounded-lg shadow-lg p-4 h-[50vh] w-[50vw] relative">
          <div className="flex flex-col w-[20vw] items-center justify-center">
            <img
              className="rounded-full border object-cover h-[10vw] w-[10vw]"
              src={
                user?.imageUrl ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              }
              alt=""
            />
          </div>
          <div className="flex flex-col w-[28vw] justify-center">
            <h2 className="text-xl font-semibold text-gray-800">
              {user.fullName}
            </h2>
            <div className="flex items-center">
              <MdOutlineMail className="text-xl text-red-500" />
              <p className="ml-3 text-gray-500">{user.email}</p>
            </div>
            <div className="flex">
              <BsFillHouseCheckFill className="text-xl text-blue-400 mt-[0.1rem]" />
              {user?.address ? (
                <p className="ml-3 text-gray-500">
                  {user.address?.postalCode} : {user.address?.street},{" "}
                  {user.address?.city}, {user.address?.state},{" "}
                  {user.address?.country}
                </p>
              ) : (
                <p className="ml-3 text-gray-500">
                  Address has not been updated
                </p>
              )}
            </div>
            <div className="mt-3">
              <h3 className="text-gray-700">Order history</h3>
              {userOrderById.length > 0 ? (
                <div className="overflow-auto mt-2 max-h-[20vh]">
                  <table className="min-w-full">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          ID order
                        </th>
                        <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {userOrderById.map((order) => (
                        <tr key={order.id}>
                          <td className="px-6 py-4">{order.id}</td>
                          <td className="px-6 py-4">{order.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-gray-500">
                  The user has not placed any orders yet
                </p>
              )}
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

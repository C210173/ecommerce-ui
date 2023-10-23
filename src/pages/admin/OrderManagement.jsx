import React, { useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./layout/Header";
import { FiSearch } from "react-icons/fi";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { format } from "date-fns";
import OrderDetailModal from "./components/OrderDetailModal";
import EditStatusModal from "./components/EditStatusModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOrderAction,
  getAllOrderAction,
  updateOrderStatusAction,
} from "../../redux/order/Action";

const OrderManagement = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const allOrder = useSelector((store) => store.order.allOrder);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(allOrder.length / itemsPerPage);

  const paginateData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const displayedOrder = paginateData(allOrder, currentPage);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditStatusModalOpen, setIsEditStatusModalOpen] = useState(false);
  const [selectedOrderForEdit, setSelectedOrderForEdit] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingOrder, setDeletingOrder] = useState(null);

  const openModal = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const openEditStatusModal = (order) => {
    setSelectedOrderForEdit(order);
    setIsEditStatusModalOpen(true);
  };
  const closeEditStatusModal = () => {
    setIsEditStatusModalOpen(false);
    setSelectedOrderForEdit(null);
  };
  const saveStatusChange = (newStatus) => {
    const orderData = {
      token: token,
      orderId: selectedOrderForEdit.id,
      data: {
        status: newStatus,
      },
    };
    dispatch(updateOrderStatusAction(orderData)).then(() => {
      dispatch(getAllOrderAction(token));
    });
  };

  const openDeleteModal = (order) => {
    setDeletingOrder(order);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeletingOrder(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteUser = (orderId) => {
    dispatch(deleteOrderAction({ orderId: orderId, token: token })).then(() => {
      dispatch(getAllOrderAction(token));
    });
  };
  return (
    <DefaultLayout
      children={
        <div className="bg-gray-700 w-full h-[94vh] p-5 relative">
          <div className="flex justify-around">
            <Header title={"Order Management"} subtitle={"List order"} />
            <div className="flex items-center mr-2">
              <input
                type="text"
                className="rounded-md h-8 px-2 mr-2 border-none text-gray-700 outline-none"
                placeholder="Search order"
              />
              <FiSearch className="text-xl text-white mr-3 cursor-pointer" />
            </div>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden mx-5">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Code
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    User
                  </th>
                  <th className="w-[12vw] px-3 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Total Price
                  </th>
                  <th className="w-[14vw] px-3 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Order Date
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Status
                  </th>
                  <th className=" w-[12vw] px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {displayedOrder?.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-200">
                    <td className="px-6 py-4">{order.id}</td>
                    <td className="px-6 py-4">{order.userOrder.fullName}</td>
                    <td className="px-3 py-4">{order.totalPrice}</td>
                    <td className="px-3 py-4 w-[14vw]">
                      {format(new Date(order.orderDate), "dd/MM/yyyy HH:mm")}
                    </td>
                    <td className="px-6 py-4">{order.status}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => openModal(order)}
                        className="text-indigo-600 hover:text-indigo-900 mr-5"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => openEditStatusModal(order)}
                        className="text-green-600 hover:text-green-900 mr-5"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => openDeleteModal(order)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex m-5 absolute bottom-5 right-5">
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className={`${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              } px-3 py-1 rounded-lg bg-gray-800 text-white`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`${
                  currentPage === index + 1 ? "bg-gray-600" : "bg-gray-800"
                } text-white px-3 py-1 rounded-lg mx-1 cursor-pointer`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              className={`${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "opacity-100 cursor-pointer"
              } px-3 py-1 rounded-lg bg-gray-800 text-white`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          {isModalOpen && (
            <OrderDetailModal order={selectedOrder} onClose={closeModal} />
          )}
          {isEditStatusModalOpen && (
            <EditStatusModal
              isOpen={isEditStatusModalOpen}
              onClose={closeEditStatusModal}
              currentStatus={selectedOrderForEdit.status}
              onSave={saveStatusChange}
            />
          )}
          {isDeleteModalOpen && (
            <ConfirmDeleteModal
              children={deletingOrder}
              onCancel={closeDeleteModal}
              onDelete={handleDeleteUser}
              message={"Are you sure you want to delete this order"}
            />
          )}
        </div>
      }
    />
  );
};

export default OrderManagement;

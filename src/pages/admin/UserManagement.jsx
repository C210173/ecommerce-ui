import React, { useEffect, useState } from "react";
import { FaTrashAlt, FaEdit, FaEye } from "react-icons/fa";
import { Alert, Snackbar } from "@mui/material";
import { FiSearch } from "react-icons/fi";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./layout/Header";
import UserModal from "./components/UserModal";
import EditRoleModal from "./components/EditRoleModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import { useDispatch, useSelector } from "react-redux";
import {
  changeRoleUserAction,
  deleteAccountAction,
  getAllUserAction,
} from "../../redux/user/Action";

const UserManagement = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingUser, setDeletingUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState({});
  const allUser = useSelector((store) => store.user.allUser);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  // action detail user
  const openModal = (user) => {
    setUserDetails(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const itemsPerPage = 10; // Số người dùng trên mỗi trang
  const totalPages = Math.ceil(allUser?.length / itemsPerPage);

  const paginateData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const displayedUsers = paginateData(allUser, currentPage);
  // action edit role
  const openEditModal = (user) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleSaveRole = (userId, role) => {
    dispatch(
      changeRoleUserAction({
        token: token,
        data: {
          userId: userId,
          role: role,
        },
      })
    ).then(() => {
      dispatch(getAllUserAction(token));
      setSuccessMessage("Edit role successfully!");
      setOpenSnackbar(true);
    });
  };
  // action delete
  const openDeleteModal = (user) => {
    setDeletingUser(user);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeletingUser(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteUser = (userId) => {
    dispatch(
      deleteAccountAction({
        token: token,
        userId: userId,
      })
    ).then(() => {
      dispatch(getAllUserAction(token)).then(() => {
        setCurrentPage(1);
        setSuccessMessage("Delete user successfully!");
        setOpenSnackbar(true);
      });
    });
  };

  useEffect(() => {
    if (token) dispatch(getAllUserAction(token));
    // eslint-disable-next-line
  }, [token]);

  return (
    <DefaultLayout
      children={
        <div className="bg-gray-700 w-full h-[94vh] p-5 relative">
          <div className="flex justify-around">
            <Header title={"User Management"} subtitle={"List user"} />
            <div className="flex items-center mr-2">
              <input
                type="text"
                className="rounded-md h-8 px-2 mr-2 border-none text-gray-700 outline-none"
                placeholder="Search user"
              />
              <FiSearch className="text-xl text-white mr-3 cursor-pointer" />
            </div>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden mx-5">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Avatar
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {displayedUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-200">
                    <td className="px-6">
                      <img
                        className="rounded-full object-cover h-[3vw] w-[3vw]"
                        src={
                          user.imageUrl ||
                          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                        }
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4">{user.fullName}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => openModal(user)}
                        className="text-indigo-600 hover:text-indigo-900 mr-5"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => openEditModal(user)}
                        className="text-green-600 hover:text-green-900 mr-5"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => openDeleteModal(user)}
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
            <UserModal user={userDetails} closeModal={closeModal} />
          )}
          {isEditModalOpen && (
            <EditRoleModal
              user={editingUser}
              closeModal={closeEditModal}
              onSave={handleSaveRole}
            />
          )}
          {isDeleteModalOpen && (
            <ConfirmDeleteModal
              children={deletingUser}
              onCancel={closeDeleteModal}
              onDelete={handleDeleteUser}
              message={`Are you sure you want to delete user ${deletingUser.fullName}`}
            />
          )}
          <Snackbar
            open={openSnackbar}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              {successMessage}
            </Alert>
          </Snackbar>
        </div>
      }
    />
  );
};

export default UserManagement;

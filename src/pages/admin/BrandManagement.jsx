import React, { useEffect, useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./layout/Header";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  createBrandAction,
  deleteBrandAction,
  getAllBrandAction,
  updateBrandAction,
} from "../../redux/brand/Action";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import { uploadToCloudinary } from "../../config/UploadToCloudinary";
import { Alert, Snackbar } from "@mui/material";

const BrandManagement = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingBrand, setDeletingBrand] = useState(null);
  const [editingBrand, setEditingBrand] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [newBrand, setNewBrand] = useState({
    imageUrl: "",
    name: "",
    description: "",
  });
  const allBrand = useSelector((store) => store.brand.allBrand);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) dispatch(getAllBrandAction());
    // eslint-disable-next-line
  }, [token]);
  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };
  const handleChangeImage = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const imgUrl = await uploadToCloudinary(file);
      setImageURL(imgUrl);
      setNewBrand({ ...newBrand, imageUrl: imgUrl });
      setIsImageUploaded(true);
    } else {
      alert("Please select an image");
      setIsImageUploaded(false);
    }
  };
  //action delete
  const openDeleteModal = (brand) => {
    setDeletingBrand(brand);
    setIsDeleteModalOpen(true);
  };
  const closeDeleteModal = () => {
    setDeletingBrand(null);
    setIsDeleteModalOpen(false);
  };
  const handleDeleteBrand = (id) => {
    dispatch(
      deleteBrandAction({
        token: token,
        brandId: id,
      })
    ).then(() => {
      dispatch(getAllBrandAction());
    });
    setSuccessMessage("Delete brand successfully!");
    setOpenSnackbar(true);
  };
  // action update brand
  const openEditModal = (brand) => {
    setEditingBrand(brand);
    setIsEditModalOpen(true);
  };
  const closeEditModal = () => {
    setEditingBrand(null);
    setIsEditModalOpen(false);
  };
  const handleEditBrand = () => {
    const isNewImageUploaded = imageURL !== "";
    const brandData = {
      token: token,
      brandId: editingBrand.id,
      data: {
        name: editingBrand.name,
        description: editingBrand.description,
      },
    };
    if (isNewImageUploaded) {
      brandData.data.imageUrl = imageURL;
    } else {
      brandData.data.imageUrl = editingBrand.imageUrl;
    }
    dispatch(updateBrandAction(brandData)).then(() => {
      dispatch(getAllBrandAction());
    });
    setImageURL("");
    closeEditModal();
    setSuccessMessage("Update Brand successfully!");
    setOpenSnackbar(true);
  };
  //action create brand
  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };
  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };
  const handleCreateBrand = async () => {
    if (!isImageUploaded) {
      alert("Please wait for the image to finish uploading");
      return;
    }
    const brandData = {
      token: token,
      data: newBrand,
    };
    dispatch(createBrandAction(brandData)).then(() => {
      dispatch(getAllBrandAction());
    });

    setNewBrand({ imageUrl: "", name: "", description: "" });
    closeCreateModal();
    setSuccessMessage("create brand successfully!");
    setOpenSnackbar(true);
  };
  return (
    <DefaultLayout
      children={
        <div className="bg-gray-700 w-full h-[94vh] p-5 relative">
          <div className="flex justify-around">
            <Header title={"Brand Management"} subtitle={"List brand"} />
            <button
              className="bg-green-600 w-[15vw] h-[5vh] hover:bg-gray-400 hover:text-gray-900 text-white font-semibold rounded"
              onClick={openCreateModal}
            >
              Create New Brand
            </button>
          </div>
          <div className="max-h-[75vh] shadow-md rounded-lg overflow-hidden mx-5 overflow-y-scroll">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-3 py-2 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Brand Name
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    description
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {allBrand.map((brand) => (
                  <tr key={brand.id} className="hover:bg-gray-200">
                    <td className="px-6 py-4">{brand.id}</td>
                    <td className="px-3 py-2">
                      <img
                        className="h-12 w-16 object-cover rounded-md shadow-sm"
                        src={brand.imageUrl}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4">{brand.name}</td>
                    <td className="px-6 py-4">{brand.description}</td>
                    <td className="px-6 py-4">
                      <button
                        className="text-green-600 hover:text-green-900 mr-5"
                        onClick={() => openEditModal(brand)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => openDeleteModal(brand)}
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

          {isDeleteModalOpen && (
            <ConfirmDeleteModal
              children={deletingBrand}
              onCancel={closeDeleteModal}
              onDelete={handleDeleteBrand}
              message={`Are you sure you want to delete category ${deletingBrand.name}`}
            />
          )}
          {isCreateModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed z-40 inset-0 bg-black bg-opacity-50"></div>
              <div className="bg-white p-4 rounded-lg w-96 z-50">
                <h2 className="text-lg font-semibold mb-4">Create New Brand</h2>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleChangeImage}
                  className="my-2"
                />
                <input
                  type="text"
                  placeholder="Category Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
                  value={newBrand.name}
                  onChange={(e) =>
                    setNewBrand({ ...newBrand, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
                  value={newBrand.description}
                  onChange={(e) =>
                    setNewBrand({
                      ...newBrand,
                      description: e.target.value,
                    })
                  }
                />
                <button
                  className="bg-green-600 text-white py-2 rounded-md w-full hover:bg-green-700"
                  onClick={handleCreateBrand}
                >
                  Create
                </button>
                <button
                  className="bg-red-600 text-white py-2 rounded-md w-full mt-2 hover:bg-red-700"
                  onClick={closeCreateModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {isEditModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="fixed z-40 inset-0 bg-black bg-opacity-50"></div>
                <div className="bg-white p-4 rounded-lg w-96 z-50">
                  <h2 className="text-lg font-semibold mb-4">Edit Brand</h2>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleChangeImage}
                    className="my-2"
                  />
                  <input
                    type="text"
                    placeholder="Category Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
                    value={editingBrand.name}
                    onChange={(e) =>
                      setEditingBrand({
                        ...editingBrand,
                        name: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
                    value={editingBrand.description}
                    onChange={(e) =>
                      setEditingBrand({
                        ...editingBrand,
                        description: e.target.value,
                      })
                    }
                  />
                  <button
                    className="bg-blue-600 text-white py-2 rounded-md w-full hover:bg-blue-700"
                    onClick={handleEditBrand}
                  >
                    Save
                  </button>
                  <button
                    className="bg-red-600 text-white py-2 rounded-md w-full mt-2 hover:bg-red-700"
                    onClick={closeEditModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
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

export default BrandManagement;

import React, { useState } from "react";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./layout/Header";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import { categoryList } from "../../dummydata/DummyData";

const CategoryManagement = () => {
  // action delete
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingCategory, setDeletingCategory] = useState(null);

  const openDeleteModal = (category) => {
    setDeletingCategory(category);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeletingCategory(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteCategory = (id) => {
    // Gửi yêu cầu API hoặc thực hiện xóa người dùng ở đây
    console.log(`Deleted category ID: ${id}`);
    // Sau khi xóa, bạn có thể cập nhật danh sách người dùng tại đây (nếu cần)
  };
  //action create new category
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [categories, setCategories] = useState(categoryList);

  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });
  const openCreateModal = () => {
    setIsCreateModalOpen(true);
  };
  const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };
  // Hàm thực hiện tạo mới danh mục
  const handleCreateCategory = () => {
    setCategories([...categories, newCategory]);
    closeCreateModal();
    setNewCategory({ name: "", description: "" });
  };
  // action update category
  const [editingCategory, setEditingCategory] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const openEditModal = (category) => {
    setEditingCategory(category);
    setIsEditModalOpen(true);
  };

  // Hàm đóng modal chỉnh sửa danh mục
  const closeEditModal = () => {
    setEditingCategory(null);
    setIsEditModalOpen(false);
  };
  // Hàm thực hiện chỉnh sửa danh mục
  const handleEditCategory = () => {
    // Thực hiện chỉnh sửa danh mục ở đây
    console.log(`Edited category ID: ${editingCategory.id}`);
    // Sau khi chỉnh sửa, bạn có thể cập nhật danh sách danh mục tại đây (nếu cần)
    // Đóng modal chỉnh sửa
    closeEditModal();
  };

  return (
    <DefaultLayout
      children={
        <div className="bg-gray-700 w-full h-[94vh] p-5 relative">
          <div className="flex justify-around">
            <Header title={"Category Management"} subtitle={"List category"} />
            <button
              className="bg-green-600 w-[15vw] h-[5vh] hover:bg-gray-400 hover:text-gray-900 text-white font-semibold rounded"
              onClick={openCreateModal}
            >
              Create New Category
            </button>
          </div>
          <div className="max-h-[75vh] shadow-md rounded-lg overflow-hidden mx-5 overflow-y-scroll">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Category Name
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
                {categoryList.map((category) => (
                  <tr key={category.id} className="hover:bg-gray-200">
                    <td className="px-6 py-4">{category.id}</td>
                    <td className="px-6 py-4">{category.name}</td>
                    <td className="px-6 py-4">{category.description}</td>
                    <td className="px-6 py-4">
                      <button
                        className="text-green-600 hover:text-green-900 mr-5"
                        onClick={() => openEditModal(category)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => openDeleteModal(category)}
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
              children={deletingCategory}
              onCancel={closeDeleteModal}
              onDelete={handleDeleteCategory}
              message={`Are you sure you want to delete category ${deletingCategory.name}`}
            />
          )}
          {isCreateModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <div className="fixed z-40 inset-0 bg-black bg-opacity-50"></div>
              <div className="bg-white p-4 rounded-lg w-96 z-50">
                <h2 className="text-lg font-semibold mb-4">
                  Create New Category
                </h2>
                <input
                  type="text"
                  placeholder="Category Name"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
                  value={newCategory.name}
                  onChange={(e) =>
                    setNewCategory({ ...newCategory, name: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Description"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
                  value={newCategory.description}
                  onChange={(e) =>
                    setNewCategory({
                      ...newCategory,
                      description: e.target.value,
                    })
                  }
                />
                <button
                  className="bg-green-600 text-white py-2 rounded-md w-full hover:bg-green-700"
                  onClick={handleCreateCategory}
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
                  <h2 className="text-lg font-semibold mb-4">Edit Category</h2>
                  <input
                    type="text"
                    placeholder="Category Name"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
                    value={editingCategory.name}
                    onChange={(e) =>
                      setEditingCategory({
                        ...editingCategory,
                        name: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
                    value={editingCategory.description}
                    onChange={(e) =>
                      setEditingCategory({
                        ...editingCategory,
                        description: e.target.value,
                      })
                    }
                  />
                  <button
                    className="bg-blue-600 text-white py-2 rounded-md w-full hover:bg-blue-700"
                    onClick={handleEditCategory}
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
        </div>
      }
    />
  );
};

export default CategoryManagement;

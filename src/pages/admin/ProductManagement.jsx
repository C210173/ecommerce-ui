import React, { useState } from "react";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./layout/Header";
import { FiSearch } from "react-icons/fi";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { categoryList, productList } from "../../dummydata/DummyData";
import ProductModal from "./components/ProductModal";
import ProductDetailModal from "./components/ProductDetailModal";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";

const ProductManagement = () => {
  const itemsPerPage = 8; // Số item trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1);
  const paginateData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  };
  const displayedProducts = paginateData(productList, currentPage);
  const totalPages = Math.ceil(productList.length / itemsPerPage);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] =
    useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingProduct, setDeletingProduct] = useState(null);

  //action create product
  const openCreateModal = () => {
    setSelectedProduct(null);
    setIsCreateModalOpen(true);
  };
  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const onCloseModal = () => {
    if (isCreateModalOpen) {
      setIsCreateModalOpen(false);
    } else if (isEditModalOpen) {
      setSelectedProduct(null);
      setIsEditModalOpen(false);
    }
  };

  const handleCreateOrUpdateProduct = (productData, isEditing) => {
    if (isEditing) {
      // Cập nhật sản phẩm
    } else {
      // Tạo sản phẩm mới
    }
  };

  const openDetailModal = (product) => {
    setSelectedProductForDetail(product);
    setIsDetailModalOpen(true);
  };
  // action delete
  const openDeleteModal = (product) => {
    setDeletingProduct(product);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeletingProduct(null);
    setIsDeleteModalOpen(false);
  };

  const handleDeleteUser = (productId) => {
    // Gửi yêu cầu API hoặc thực hiện xóa người dùng ở đây
    console.log(`Deleted product ID: ${productId}`);
    // Sau khi xóa, bạn có thể cập nhật danh sách người dùng tại đây (nếu cần)
  };
  return (
    <DefaultLayout
      children={
        <div className="bg-gray-700 w-full h-[94vh] p-5 relative">
          <div className="flex justify-around">
            <Header title={"Product Management"} subtitle={"List products"} />
            <div className="flex items-center mr-2">
              <input
                type="text"
                className="rounded-md h-8 px-2 mr-2 border-none text-gray-700 outline-none"
                placeholder="Search product"
              />
              <FiSearch className="text-xl text-white mr-3 cursor-pointer" />
            </div>
          </div>
          <div className="shadow-md rounded-lg overflow-hidden mx-5">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    ID
                  </th>
                  <th className="px-3 py-2 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Brand
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Quantity
                  </th>
                  <th className="px-6 py-3 bg-gray-800 text-left text-xs leading-4 font-medium text-white uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-100">
                {displayedProducts.map((product) => (
                  <tr key={product.id} className="hover:bg-gray-200">
                    <td className="px-6 py-4">{product.id}</td>
                    <td className="px-3 py-2">
                      <img
                        className="h-12 w-16 object-cover rounded-md shadow-sm"
                        src={product.imageUrl}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4">{product.name}</td>
                    <td className="px-6 py-4">{product.brand}</td>
                    <td className="px-6 py-4">{product.category.name}</td>
                    <td className="px-6 py-4">{product.quantity}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => openDetailModal(product)}
                        className="text-indigo-600 hover:text-indigo-900 mr-5"
                      >
                        <FaEye />
                      </button>
                      <button
                        onClick={() => openEditModal(product)}
                        className="text-green-600 hover:text-green-900 mr-5"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => openDeleteModal(product)}
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
          <button
            onClick={openCreateModal}
            className="absolute bottom-10 left-10 bg-green-600 w-[15vw] h-[5vh] hover:bg-gray-400 hover:text-gray-900 text-white font-semibold rounded"
          >
            Create New Product
          </button>
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
          <ProductModal
            isOpen={isCreateModalOpen || isEditModalOpen}
            onClose={onCloseModal}
            onSubmit={handleCreateOrUpdateProduct}
            isEditing={isEditModalOpen}
            product={isEditModalOpen ? selectedProduct : null}
            categoryList={categoryList}
          />
          <ProductDetailModal
            isOpen={isDetailModalOpen}
            onClose={() => setIsDetailModalOpen(false)}
            product={selectedProductForDetail}
          />
          {isDeleteModalOpen && (
            <ConfirmDeleteModal
              children={deletingProduct}
              onCancel={closeDeleteModal}
              onDelete={handleDeleteUser}
              message={"Are you sure you want to delete product "}
            />
          )}
        </div>
      }
    />
  );
};

export default ProductManagement;

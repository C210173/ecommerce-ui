import React, { useEffect, useState } from "react";

const ProductModal = ({
  isOpen,
  onClose,
  onSubmit,
  isEditing,
  product,
  categoryList,
}) => {
  const [formData, setFormData] = useState({
    id: isEditing ? product.id : "",
    name: isEditing ? product.name : "",
    brand: isEditing ? product.brand : "",
    description: isEditing ? product.description : "",
    quantity: isEditing ? product.quantity : 0,
    price: isEditing ? product.price : 0,
    imageUrl: isEditing ? product.imageUrl : "",
    operatingSystem: isEditing ? product.operatingSystem : "",
    connectivity: isEditing ? product.connectivity : "",
    category: isEditing ? product.category.id : "",
  });
  useEffect(() => {
    if (isEditing) {
      // Nếu đang chỉnh sửa sản phẩm, cập nhật dữ liệu vào state
      setFormData({
        id: product.id,
        name: product.name,
        brand: product.brand,
        description: product.description,
        quantity: product.quantity,
        price: product.price,
        imageUrl: product.imageUrl,
        operatingSystem: product.operatingSystem,
        connectivity: product.connectivity,
        category: product.category.id,
      });
    } else {
      setFormData({
        id: "",
        name: "",
        brand: "",
        description: "",
        quantity: 0,
        price: 0,
        imageUrl: "",
        operatingSystem: "",
        connectivity: "",
        category: "",
      });
    }
  }, [isEditing, product]);

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Thực hiện xử lý tạo hoặc cập nhật sản phẩm
    onSubmit(formData, isEditing);
    // Đóng modal
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="fixed z-40 inset-0 bg-black bg-opacity-50"></div>
      <div className="bg-white p-4 rounded-lg w-[80vw] z-50">
        <h2 className="text-lg font-semibold mb-4">
          {isEditing ? "Edit Product" : "Create New Product"}
        </h2>
        <div className="flex h-[70vh]">
          <div className="w-[35vw] flex items-center justify-center border rounded-md">
            <label htmlFor="imgInput" className="h-full w-full">
              <img
                className="w-full h-full object-cover"
                src={
                  formData.imageUrl ||
                  "https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Photo-Image-Icon-Graphics-10388619-1-580x386.jpg"
                }
                alt=""
              />
            </label>
            <input type="file" id="imgInput" className="hidden" />
          </div>
          <div className="w-[45vw] ml-3">
            <span>Product name</span>
            <input
              type="text"
              placeholder="Product Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
              value={formData.name}
              onChange={(e) => handleInputChange(e, "name")}
            />
            <span>Brand</span>
            <input
              type="text"
              placeholder="Brand Name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
              value={formData.brand}
              onChange={(e) => handleInputChange(e, "brand")}
            />
            <span>Description</span>
            <input
              type="text"
              placeholder="Description"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
              value={formData.description}
              onChange={(e) => handleInputChange(e, "description")}
            />
            <span>Operating system</span>
            <input
              type="text"
              placeholder="Operating system"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
              value={formData.operatingSystem}
              onChange={(e) => handleInputChange(e, "operatingSystem")}
            />
            <span>Connectivity</span>
            <input
              type="text"
              placeholder="Connectivity"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
              value={formData.connectivity}
              onChange={(e) => handleInputChange(e, "connectivity")}
            />
            <div>
              <span>Category :</span>
              <select
                className="outline-none w-[12vw] my-4"
                value={formData.category}
                onChange={(e) => handleInputChange(e, "category")}
              >
                <option value="">Select a category</option>
                {categoryList.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="mb-1">Quantity</span>
                <input
                  type="number"
                  className="w-[10vw] border border-gray-300 rounded-md ml-3 px-3 py-2 mb-2 outline-none"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange(e, "quantity")}
                />
              </div>
              <div className="flex items-center">
                <span className="mb-1">Price</span>
                <input
                  type="number"
                  className="w-[18vw] border border-gray-300 rounded-md ml-3 px-3 py-2 mb-2 outline-none"
                  value={formData.price}
                  onChange={(e) => handleInputChange(e, "price")}
                />
              </div>
            </div>
            <div className="flex items-center justify-center space-x-20 mt-10">
              <button
                className="bg-green-600 text-white w-[10vw] py-1 rounded-md hover:bg-green-700"
                onClick={handleSubmit}
              >
                {isEditing ? "Save" : "Create"}
              </button>
              <button
                className="bg-red-600 text-white w-[10vw] py-1 rounded-md hover:bg-red-700"
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

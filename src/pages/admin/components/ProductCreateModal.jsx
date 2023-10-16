import React, { useEffect, useRef, useState } from "react";
import { uploadToCloudinary } from "../../../config/UploadToCloudinary";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductCreateModal = ({
  isOpen,
  onClose,
  onSubmit,
  categoryList,
  brandList,
}) => {
  const initialFormData = {
    name: "",
    brandName: "",
    description: "",
    quantity: 0,
    price: 0,
    imageUrl: [],
    operatingSystem: "",
    connectivity: "",
    categoryName: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (isOpen) {
      setFormData(initialFormData);
    }
    // eslint-disable-next-line
  }, [isOpen]);

  const handleInputChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const fileInputRef = useRef(null);
  const handleAddImageClick = () => {
    fileInputRef.current.click();
  };

  const handleImageUpToCloudinary = async (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage && selectedImage.type.startsWith("image/")) {
      const imageUrl = await uploadToCloudinary(selectedImage);
      setFormData({
        ...formData,
        imageUrl: [...formData.imageUrl, imageUrl],
      });
    } else {
      alert("Please select an image");
    }
  };
  const handleSubmit = () => {
    onSubmit(formData);
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
        <h2 className="text-lg font-semibold mb-4">Create New Product</h2>
        <div className="flex h-[70vh]">
          <div className="w-[35vw] flex flex-col items-center justify-center border rounded-md">
            <label className="h-full w-full">
              <Carousel showStatus={false} showThumbs={false}>
                {formData.imageUrl.map((imgUrl, index) => (
                  <div key={index} className="h-[90%]">
                    <img
                      className="w-full h-full object-cover"
                      src={
                        imgUrl ||
                        "https://www.creativefabrica.com/wp-content/uploads/2021/04/05/Photo-Image-Icon-Graphics-10388619-1-580x386.jpg"
                      }
                      alt={`Product ${index + 1}`}
                    />
                  </div>
                ))}
              </Carousel>
            </label>
            <div>
              <button
                onClick={handleAddImageClick}
                className="bg-green-600 text-white w-[10vw] py-1 rounded-md hover:bg-green-700 mb-5"
              >
                Add image
              </button>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={handleImageUpToCloudinary}
            />
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
            <div>
              <span>Brand:</span>
              <select
                className="outline-none w-full my-2"
                value={formData.brandName}
                onChange={(e) => handleInputChange(e, "brandName")}
              >
                <option value="">Select a brand</option>
                {brandList.map((brand) => (
                  <option key={brand.id} value={brand.name}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <span>Category:</span>
              <select
                className="outline-none w-full my-2"
                value={formData.categoryName}
                onChange={(e) => handleInputChange(e, "categoryName")}
              >
                <option value="">Select a category</option>
                {categoryList.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <span>Description:</span>
            <input
              type="text"
              placeholder="Description"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
              value={formData.description}
              onChange={(e) => handleInputChange(e, "description")}
            />
            <span>Operating System:</span>
            <input
              type="text"
              placeholder="Operating system"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
              value={formData.operatingSystem}
              onChange={(e) => handleInputChange(e, "operatingSystem")}
            />
            <span>Connectivity:</span>
            <input
              type="text"
              placeholder="Connectivity"
              className="w-full border border-gray-300 rounded-md px-3 py-2 mb-2 outline-none"
              value={formData.connectivity}
              onChange={(e) => handleInputChange(e, "connectivity")}
            />
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span>Quantity:</span>
                <input
                  type="number"
                  className="w-[10vw] border border-gray-300 rounded-md ml-3 px-3 py-2 mb-2 outline-none"
                  value={formData.quantity}
                  onChange={(e) => handleInputChange(e, "quantity")}
                />
              </div>
              <div className="flex items-center">
                <span>Price:</span>
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
                Create
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

export default ProductCreateModal;

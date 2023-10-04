import React from "react";
import { ImCancelCircle } from "react-icons/im";

const ProductDetailModal = ({ isOpen, onClose, product }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed z-40 inset-0 bg-black bg-opacity-50"></div>
      <div className="bg-white p-4 rounded-lg w-[70vw] z-50 relative">
        <h2 className="text-xl font-semibold mb-4 text-center">
          {product.name}
        </h2>
        <button className="h-5 absolute top-5 right-5" onClick={onClose}>
          <ImCancelCircle />
        </button>
        <div className="flex h-[60vh]">
          <div className="w-[30vw] flex items-center justify-center rounded-md">
            <img
              className="w-full h-full object-cover"
              src={product.imageUrl}
              alt=""
            />
          </div>
          <div className="w-[36vw] ml-5 flex flex-col">
            <div className="flex items-center">
              <span className="text-gray-900 text-lg font-semibold">
                Brand:
              </span>
              <p className="text-gray-600 text-base ml-4">{product.brand}</p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-900 text-lg font-semibold">
                Category:
              </span>
              <p className="text-gray-600 text-base ml-4">
                {product.category.name}
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-900 text-lg font-semibold">
                Quantity:
              </span>
              <p className="text-gray-600 text-base ml-4">{product.quantity}</p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-900 text-lg font-semibold">
                Price:
              </span>
              <p className="text-gray-600 text-base ml-4">{product.price}</p>
            </div>
            <div className="flex items-start">
              <span className="text-gray-900 text-lg font-semibold">
                Description:
              </span>
              <p className="text-gray-600 text-base ml-4  mt-[0.2rem]">
                {product.description}
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-900 text-lg font-semibold">
                Operating System:
              </span>
              <p className="text-gray-600 text-base ml-4">
                {product.operatingSystem}
              </p>
            </div>
            <div className="flex items-center">
              <span className="text-gray-900 text-lg font-semibold">
                Connectivity:
              </span>
              <p className="text-gray-600 text-base ml-4">
                {product.connectivity}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;

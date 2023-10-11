import React from "react";
import { FaCartPlus } from "react-icons/fa";

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <div className="max-w-xs mx-2 mb-4 rounded-md overflow-hidden hover:drop-shadow-xl">
      <img
        src="https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/iphone-13-finish-select-202207-pink?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1693063160403"
        alt=""
        className="w-full h-[16rem] object-cover"
      />
      <div className="p-4 bg-gray-200">
        <h2 className="text-lg font-semibold text-center">productname</h2>
        <p className="text-gray-700 text-center">brand</p>
        <p className="text-red-400 font-bold text-center">$ 999</p>
        <div className="flex items-center justify-center">
          <button
            className="mt-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white text-center px-6 py-2 rounded-full hover:bg-gradient-to-l"
            onClick={() => onAddToCart(product)}
          >
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

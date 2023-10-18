import React, { useEffect, useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductAction } from "../../../redux/product/Action";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const allProduct = useSelector((store) => store.product.allProduct);
  const navigate = useNavigate();
  const productsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const paginateData = (data, currentPage) => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return data.slice(startIndex, endIndex);
  };
  const displayedProducts = paginateData(allProduct, currentPage);
  const totalPages = Math.ceil(allProduct.length / productsPerPage);

  useEffect(() => {
    dispatch(getAllProductAction());
  }, [dispatch]);

  const onAddToCart = (product) => {};
  const onProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto py-4 mt-10">
      <div className="flex flex-wrap -mx-4">
        {displayedProducts?.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-4"
          >
            <div className="max-w-xs mx-2 mb-4 rounded-md overflow-hidden hover:drop-shadow-xl">
              <img
                src={product?.imageUrl[0]}
                alt={product?.name}
                onClick={() => onProductClick(product.name)}
                className="w-full h-[16rem] object-cover cursor-pointer"
              />
              <div className="p-4 bg-gray-200">
                <h2 className="text-lg font-semibold text-center">
                  {product?.name}
                </h2>
                <p className="text-gray-700 text-center">
                  {product?.brand.name}
                </p>
                <p className="text-red-400 font-bold text-center">
                  $ {product.price}
                </p>
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
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
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
    </div>
  );
};

export default ProductList;

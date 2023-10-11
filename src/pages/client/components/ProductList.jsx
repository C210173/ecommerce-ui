import React from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-4 mt-10">
      <div className="flex flex-wrap -mx-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 px-4 mb-4"
          >
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

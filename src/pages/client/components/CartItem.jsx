import React from "react";

const CartItem = ({ imgUrl, name, brand }) => {
  return (
    <div className="flex items-center">
      <img className="h-20 w-20 mr-3" src={imgUrl} alt={name} />
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-lg text-gray-800">{name}</p>
        <p className="text-sm font-medium text-gray-600">{brand}</p>
      </div>
    </div>
  );
};

export default CartItem;

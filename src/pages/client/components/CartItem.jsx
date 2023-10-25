import React from "react";
import { useNavigate } from "react-router-dom";

const CartItem = ({ imgUrl, name, brand }) => {
  const navigate = useNavigate();
  const onProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };
  return (
    <div
      onClick={() => onProductClick(name)}
      className="flex items-center cursor-pointer"
    >
      <img className="h-20 w-20 mr-3 object-cover" src={imgUrl} alt={name} />
      <div className="flex flex-col justify-center">
        <p className="font-semibold text-lg text-gray-800">{name}</p>
        <p className="text-sm font-medium text-gray-600">{brand}</p>
      </div>
    </div>
  );
};

export default CartItem;

import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResults = ({ results }) => {
  const navigate = useNavigate();
  const onProductClick = (productName) => {
    navigate(`/product/${productName}`);
  };
  return (
    <div className="max-h-[40vh] w-full bg-white rounded-md shadow-lg z-[1000] absolute top-[100%] overflow-hidden overflow-y-scroll">
      {results.map((result) => (
        <div
          onClick={() => onProductClick(result.name)}
          key={result.id}
          className="flex items-center w-full m-2 hover:bg-gray-300 cursor-pointer"
        >
          <img
            className="h-10 w-10 mr-3 object-cover"
            src={result.imageUrl[0]}
            alt={result.name}
          />
          <div className="flex flex-col justify-center">
            <p className="text-sm font-medium text-gray-800 truncate">
              {result.name}
            </p>
            <p className="text-xs font-normal text-gray-600">
              {result.brand.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;

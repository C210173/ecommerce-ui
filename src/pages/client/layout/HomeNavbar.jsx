import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

const HomeNavbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="max-w-screen-xl mx-auto py-4 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <FaComputer className="text-white text-3xl cursor-pointer" />
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border border-white bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white pl-10 pr-3 py-1 rounded-full focus:outline-none"
          />
          <FaSearch className="absolute left-3 top-2 text-white" />
        </div>
      </div>
      <div className="space-x-4 w-[400px]">
        <Link
          to="/"
          className="text-lg text-white hover:text-gray-900 font-semibold"
        >
          Home
        </Link>
        <Link
          to="/categories"
          className="text-lg text-white hover:text-gray-900 font-semibold"
        >
          Categories
        </Link>
        <Link
          to="/about"
          className="text-lg text-white hover:text-gray-900 font-semibold"
        >
          About
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <FaShoppingCart
          onClick={() => navigate("/cart")}
          className="text-white text-2xl cursor-pointer hover:text-gray-900"
        />
        <FaUser
          onClick={() => navigate("/profile")}
          className="text-white text-2xl cursor-pointer hover:text-gray-900"
        />
      </div>
    </nav>
  );
};

export default HomeNavbar;

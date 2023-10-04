import React from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end bg-gray-800 w-full h-[6vh]">
      <div className="flex items-center px-3">
        <div className="flex items-center">
          <FaBell className="text-xl text-white mr-3 cursor-pointer" />
          <AiOutlineSetting className="text-xl mr-3 text-white cursor-pointer" />
          <BiLogOut className="text-xl text-white cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

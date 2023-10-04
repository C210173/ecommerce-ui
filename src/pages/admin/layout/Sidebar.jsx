import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FaQuestionCircle } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { HiTemplate } from "react-icons/hi";
import {
  BsBagPlusFill,
  BsFillBarChartLineFill,
  BsPieChartFill,
} from "react-icons/bs";
import {
  BiCalendar,
  BiCategoryAlt,
  BiLineChart,
  BiSolidUserRectangle,
} from "react-icons/bi";
import "./Sidebar.css";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const sidebarClass = isSidebarOpen ? "sidebar-open" : "sidebar-closed";

  return (
    <div className={`flex flex-col bg-gray-800 h-[100vh] ${sidebarClass}`}>
      <div className="h-[30vh]">
        <div className="flex items-center justify-around mt-4">
          <span
            className={`text-sx text-center font-semibold text-white pl-3 ${
              isSidebarOpen ? "" : "hidden"
            }`}
          >
            ADMIN
          </span>
          <FiMenu
            className={`text-xl text-white mx-3 cursor-pointer ${
              isSidebarOpen ? " ml-3 " : ""
            }`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <img
            className={`rounded-full object-cover ${
              isSidebarOpen ? "h-[10vw] w-[10vw] " : "h-[3vw] w-[3vw] mt-20"
            }`}
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt=""
          />
          <p
            className={`text-xs mt-5 ${
              isSidebarOpen ? "text-white " : "text-transparent"
            }`}
          >
            USERNAME
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col h-[70vh] space-y-3 mx-3 mt-5 ${
          isSidebarOpen ? "px-10" : "items-center"
        }`}
      >
        <div className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500">
          <AiFillHome className="text-xl text-white mx-3" />
          {isSidebarOpen ? (
            <p className="text-white text-sx">Dashboard</p>
          ) : null}
        </div>
        <div className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500">
          <BiSolidUserRectangle className="text-xl text-white mx-3" />
          {isSidebarOpen ? <p className="text-white text-sx">User</p> : null}
        </div>
        <div className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500">
          <BiCategoryAlt className="text-xl text-white mx-3" />
          {isSidebarOpen ? (
            <p className="text-white text-sx">Category</p>
          ) : null}
        </div>
        <div className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500">
          <HiTemplate className="text-xl text-white mx-3" />
          {isSidebarOpen ? <p className="text-white text-sx">Product</p> : null}
        </div>
        <div className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500">
          <BsBagPlusFill className="text-xl text-white mx-3" />
          {isSidebarOpen ? <p className="text-white text-sx">Order</p> : null}
        </div>
        <div className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500">
          <BsFillBarChartLineFill className="text-xl text-white mx-3" />
          {isSidebarOpen ? (
            <p className="text-white text-sx">Barchart</p>
          ) : null}
        </div>
        <div className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500">
          <BsPieChartFill className="text-xl text-white mx-3" />
          {isSidebarOpen ? (
            <p className="text-white text-sx">Piechart</p>
          ) : null}
        </div>
        <div className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500">
          <BiLineChart className="text-xl text-white mx-3" />
          {isSidebarOpen ? (
            <p className="text-white text-sx">Linechart</p>
          ) : null}
        </div>
        <div className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500">
          <BiCalendar className="text-xl text-white mx-3" />
          {isSidebarOpen ? (
            <p className="text-white text-sx">Calendar</p>
          ) : null}
        </div>
        <div className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500">
          <FaQuestionCircle className="text-xl text-white mx-3" />
          {isSidebarOpen ? <p className="text-white text-sx">FAQ</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

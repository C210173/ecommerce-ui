import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { RiFeedbackFill } from "react-icons/ri";
import { FaRankingStar } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { HiTemplate } from "react-icons/hi";
import { TbBrandDatabricks } from "react-icons/tb";
import {
  BsBagPlusFill,
  BsFillBarChartLineFill,
  BsPieChartFill,
} from "react-icons/bs";
import { BiCategoryAlt, BiSolidUserRectangle } from "react-icons/bi";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "../../../redux/auth/Action";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const reqUser = useSelector((store) => store.auth.reqUser);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (token) {
          const user = await dispatch(getUserAction(token));
          if (user && user.role !== "ADMIN") {
            navigate("/login");
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
    // eslint-disable-next-line
  }, [token]);
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
            src={
              reqUser?.imageUrl ||
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt=""
          />
          <p
            className={`text-xs mt-5 uppercase ${
              isSidebarOpen ? "text-white " : "text-transparent"
            }`}
          >
            {reqUser?.fullName}
          </p>
        </div>
      </div>
      <div
        className={`flex flex-col h-[70vh] space-y-3 mx-3 mt-5 ${
          isSidebarOpen ? "px-10" : "items-center"
        }`}
      >
        <div
          onClick={() => navigate("/admin/dashboard")}
          className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500"
        >
          <AiFillHome className="text-xl text-white mx-3" />
          {isSidebarOpen ? (
            <p className="text-white text-sx">Dashboard</p>
          ) : null}
        </div>
        <div
          onClick={() => navigate("/admin/user")}
          className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500"
        >
          <BiSolidUserRectangle className="text-xl text-white mx-3" />
          {isSidebarOpen ? <p className="text-white text-sx">User</p> : null}
        </div>
        <div
          onClick={() => navigate("/admin/category")}
          className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500"
        >
          <BiCategoryAlt className="text-xl text-white mx-3" />
          {isSidebarOpen ? (
            <p className="text-white text-sx">Category</p>
          ) : null}
        </div>
        <div
          onClick={() => navigate("/admin/brand")}
          className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500"
        >
          <TbBrandDatabricks className="text-xl text-white mx-3" />
          {isSidebarOpen ? <p className="text-white text-sx">Brand</p> : null}
        </div>
        <div
          onClick={() => navigate("/admin/product")}
          className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500"
        >
          <HiTemplate className="text-xl text-white mx-3" />
          {isSidebarOpen ? <p className="text-white text-sx">Product</p> : null}
        </div>
        <div
          onClick={() => navigate("/admin/order")}
          className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500"
        >
          <BsBagPlusFill className="text-xl text-white mx-3" />
          {isSidebarOpen ? <p className="text-white text-sx">Order</p> : null}
        </div>
        <div
          onClick={() => navigate("/admin/rating")}
          className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500"
        >
          <FaRankingStar className="text-xl text-white mx-3" />
          {isSidebarOpen ? <p className="text-white text-sx">Rating</p> : null}
        </div>
        <div
          onClick={() => navigate("/admin/review")}
          className="flex items-center cursor-pointer h-[40px] rounded hover:bg-gray-500"
        >
          <RiFeedbackFill className="text-xl text-white mx-3" />
          {isSidebarOpen ? <p className="text-white text-sx">Review</p> : null}
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
      </div>
    </div>
  );
};

export default Sidebar;

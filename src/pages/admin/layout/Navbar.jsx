import React, { useEffect } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserAction, logoutAction } from "../../../redux/Auth/Action";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) dispatch(getUserAction(token));
  }, [token]);
  useEffect(() => {
    if (auth.reqUser?.role !== "ADMIN") {
      navigate("/login");
    }
  }, [auth.reqUser]);

  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-end bg-gray-800 w-full h-[6vh]">
      <div className="flex items-center px-3">
        <div className="flex items-center">
          <FaBell className="text-xl text-white mr-3 cursor-pointer" />
          <AiOutlineSetting className="text-xl mr-3 text-white cursor-pointer" />
          <BiLogOut
            onClick={handleLogout}
            className="text-xl text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";
import { IoLocation } from "react-icons/io5";
import { BiSolidPhone } from "react-icons/bi";
import {
  MdLaptopWindows,
  MdOutlineFax,
  MdOutlinePhoneIphone,
} from "react-icons/md";
import {
  FaFacebook,
  FaFacebookMessenger,
  FaTabletAlt,
  FaTiktok,
} from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { BsApple, BsSmartwatch } from "react-icons/bs";
import { SiHuawei, SiSamsung, SiXiaomi } from "react-icons/si";

const HomeFooter = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1 flex flex-col m-5">
          <span className="text-xl text-white">Brand</span>
          <div className="flex items-center my-2">
            <BsApple className="text-2xl text-white mr-5" />
            <span className="text-white">Apple</span>
          </div>
          <div className="flex items-center my-2">
            <SiSamsung className="text-2xl text-white mr-5" />
            <span className="text-white">Samsung</span>
          </div>
          <div className="flex items-center my-2">
            <SiXiaomi className="text-2xl text-white mr-5" />
            <span className="text-white">Xiaomi</span>
          </div>
          <div className="flex items-center my-2">
            <SiHuawei className="text-2xl text-white mr-5" />
            <span className="text-white">Huawei</span>
          </div>
        </div>
        <div className="col-span-1 flex flex-col m-5">
          <span className="text-xl text-white">Category</span>
          <div className="flex items-center my-2">
            <MdOutlinePhoneIphone className="text-2xl text-white mr-5" />
            <span className="text-white">Smart Phone</span>
          </div>
          <div className="flex items-center my-2">
            <BsSmartwatch className="text-2xl text-white mr-5" />
            <span className="text-white">Smart Watch</span>
          </div>
          <div className="flex items-center my-2">
            <MdLaptopWindows className="text-2xl text-white mr-5" />
            <span className="text-white">Laptop</span>
          </div>
          <div className="flex items-center mt-2">
            <FaTabletAlt className="text-2xl text-white mr-5" />
            <span className="text-white">Tablet</span>
          </div>
        </div>
        <div className="col-span-1 flex flex-col m-5">
          <span className="text-xl text-white">Information</span>
          <div className="flex items-center my-2">
            <IoLocation className="text-2xl text-white mr-5" />
            <span className="text-white">54 Akihabara, Chiyoda, Tokyo</span>
          </div>
          <div className="flex items-center my-2">
            <BiSolidPhone className="text-2xl text-white mr-5" />
            <span className="text-white">070-1234-4321</span>
          </div>
          <div className="flex items-center my-2">
            <MdOutlineFax className="text-2xl text-white mr-5" />
            <span className="text-white">+ 81 (8) 24567889.</span>
          </div>
          <div className="flex items-center mt-4">
            <FaFacebook className="text-4xl text-white mr-5" />
            <FaFacebookMessenger className="text-4xl text-white mr-5" />
            <FaXTwitter className="text-4xl text-white mr-5" />
            <FaLinkedin className="text-4xl text-white mr-5" />
            <FaTiktok className="text-4xl text-white" />
          </div>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center">
          <img
            onClick={() => navigate("/")}
            className="cursor-pointer w-[200px] h-[200px]"
            src="https://res.cloudinary.com/dttlhvsas/image/upload/v1697608194/H_ids24p.png"
            alt=""
          />
          <span className="font-bold text-xl text-white">
            Welcome to our company
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <span className=" text-white text-xs">
          Copyright © NGUYEN QUANG HAO 2023
        </span>
      </div>
    </div>
  );
};

export default HomeFooter;

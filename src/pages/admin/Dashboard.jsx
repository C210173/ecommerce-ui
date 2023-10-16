import React from "react";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./layout/Header";
import {
  orderList,
  productList,
  ratingList,
  reviewList,
  userList,
} from "../../dummydata/DummyData";
import { FaUser } from "react-icons/fa";
import { AiFillShopping, AiTwotoneGold } from "react-icons/ai";
import { FaRankingStar } from "react-icons/fa6";
import { RiChatPollFill } from "react-icons/ri";
import CanvasJSReact from "@canvasjs/react-charts";
import { useSelector } from "react-redux";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const Dashboard = () => {
  const { auth } = useSelector((store) => store);
  const token = localStorage.getItem("token");
  const bar = {
    theme: "dark2",
    title: {
      text: "Top 5 best selling products",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Apple", y: 10, fontColor: "white" },
          { label: "Samsung", y: 15, fontColor: "white" },
          { label: "Xiaomi", y: 25, fontColor: "white" },
          { label: "Oppo", y: 30, fontColor: "white" },
          { label: "Vivo", y: 28, fontColor: "white" },
        ],
      },
    ],
    backgroundColor: "#374151",
  };
  const pie = {
    theme: "dark2",
    title: {
      text: "Quantity of products in stock",
    },
    data: [
      {
        type: "pie",
        legendText: "{label}",
        toolTipContent: "{label}: <strong>{y}%</strong>",
        showInLegend: true,
        indexLabel: "{y}%",
        indexLabelPlacement: "inside",
        dataPoints: [
          { y: 32, label: "Health" },
          { y: 22, label: "Finance" },
          { y: 15, label: "Education" },
          { y: 19, label: "Career" },
          { y: 5, label: "Family" },
          { y: 7, label: "Real Estate" },
        ],
      },
    ],
    backgroundColor: "#374151",
  };
  return (
    <DefaultLayout
      children={
        <div className="bg-gray-700 w-full h-[94vh] p-5 relative">
          <div className="flex justify-around">
            <Header title={"Dashboard"} subtitle={"welcome to dashboard"} />
          </div>
          <div>
            <div className="mt-2 flex items-center space-x-5">
              <div className="w-1/5 flex items-center rounded-md bg-cyan-300 px-3 py-4">
                <FaUser className="text-3xl mr-4" />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-bold">User</span>
                  <div className="flex justify-between">
                    <p className="text-gray-900 font-semibold">total user:</p>
                    <p className="text-gray-700 ml-3">{userList.length}</p>
                  </div>
                </div>
              </div>
              <div className="w-1/5 flex items-center rounded-md bg-emerald-300 px-3 py-4">
                <AiTwotoneGold className="text-3xl mr-4" />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-bold">Product</span>
                  <div className="flex justify-between">
                    <p className="text-gray-900 font-semibold">
                      total product:
                    </p>
                    <p className="text-gray-700 ml-3">{productList.length}</p>
                  </div>
                </div>
              </div>
              <div className="w-1/5 flex items-center rounded-md bg-red-300 px-3 py-4">
                <AiFillShopping className="text-3xl mr-4" />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-bold">Order</span>
                  <div className="flex justify-between">
                    <p className="text-gray-900 font-semibold">total order:</p>
                    <p className="text-gray-700 ml-3">{orderList.length}</p>
                  </div>
                </div>
              </div>
              <div className="w-1/5 flex items-center rounded-md bg-amber-300 px-3 py-4">
                <FaRankingStar className="text-3xl mr-4" />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-bold">Rating</span>
                  <div className="flex justify-between">
                    <p className="text-gray-900 font-semibold">total rating:</p>
                    <p className="text-gray-700 ml-3">{ratingList.length}</p>
                  </div>
                </div>
              </div>
              <div className="w-1/5 flex items-center rounded-md bg-purple-300 px-3 py-4">
                <RiChatPollFill className="text-3xl mr-4" />
                <div className="flex flex-col">
                  <span className="text-gray-900 font-bold">Review</span>
                  <div className="flex justify-between">
                    <p className="text-gray-900 font-semibold">total review:</p>
                    <p className="text-gray-700 ml-3">{reviewList.length}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-16 justify-between">
              <div className="w-[48%]">
                <CanvasJSChart options={bar} />
              </div>
              <div className="w-[48%]">
                <CanvasJSChart options={pie} />
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Dashboard;

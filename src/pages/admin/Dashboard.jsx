import React from "react";
import DefaultLayout from "./layout/DefaultLayout";
import Header from "./layout/Header";

const Dashboard = () => {
  return (
    <DefaultLayout
      children={
        <div className="bg-gray-700 w-full h-[94vh]">
          <Header title={"Dashboard"} subtitle={"welcome to dashboard"} />
        </div>
      }
    />
  );
};

export default Dashboard;

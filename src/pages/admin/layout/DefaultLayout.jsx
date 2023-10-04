import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const DefaultLayout = ({ children }) => {
  return (
    <div className="h-full w-full flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;

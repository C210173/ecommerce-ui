import React from "react";
import HomeNavbar from "./HomeNavbar";
import HomeFooter from "./HomeFooter";

const DefaultHomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-b from-[#FA0909] to-[#000000] w-full fixed z-[1000000]">
        <HomeNavbar />
      </div>
      {children}
      <div>
        <HomeFooter />
      </div>
    </div>
  );
};

export default DefaultHomeLayout;

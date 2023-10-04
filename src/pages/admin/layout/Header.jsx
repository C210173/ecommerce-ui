import React from "react";

const Header = ({ title, subtitle }) => {
  return (
    <div className="w-full h-[8vh]">
      <div>
        <h2 className="text-white text-2xl font-semibold ">{title}</h2>
      </div>
      <span className="text-gray-400 text-xm">{subtitle}</span>
    </div>
  );
};

export default Header;

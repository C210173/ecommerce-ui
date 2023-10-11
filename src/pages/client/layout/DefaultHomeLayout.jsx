import React, { useEffect } from "react";
import HomeNavbar from "./HomeNavbar";
import HomeFooter from "./HomeFooter";

const DefaultHomeLayout = ({ children }) => {
  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const navbar = document.querySelector(".bg-gradient-to-r");

      if (prevScrollPos > currentScrollPos) {
        navbar.style.opacity = "1";
      } else {
        navbar.style.opacity = "0";
      }

      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="flex flex-col">
      <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full fixed z-50 transition-opacity opacity-1 duration-500">
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

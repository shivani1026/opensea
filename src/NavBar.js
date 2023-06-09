import React, { useEffect, useState } from "react";
import logo from "./images/opensea-logo.svg";

const NavBar = () => {
  const [scrollBackground, setScrollBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav
        className={`p-4 flex justify-between items-center fixed top-0 w-full z-20 ${
          scrollBackground ? "bg-white border-b " : "bg-blue-600" 
        }`}
      >
        <div className="flex items-center">
          <img src={logo} alt="white logo" className="w-10 mr-2 ml-2" />
          <h1 className={`text-2xl font-bold ${
          scrollBackground ? "text-blue-500" : "text-white" 
        }`}>
            OpenSea
          </h1>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search items, collections..."
            className="p-2 rounded-l-lg"
          />
          <button className="bg-gray-700 text-white p-2 rounded-r-lg">
            Search
          </button>
        </div>
      </nav>
      <div className="pt-16">
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default NavBar;

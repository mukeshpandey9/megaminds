import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (<div
    className="px-5 md:px-10 w-full text-center bg-no-repeat bg-center flex items-center justify-center relative"
    style={{ backgroundImage: "url('/images/nav-banner.png')",  backgroundRepeat: "repeat", backgroundSize: "contain", height: "22vh" }}
  >
   
   <img
    src="/images/logo-nav.png"
    className="w-24 sm:w-30 md:w-72 h-auto object-contain absolute left-0 ml-5"
    alt="Logo"
  />

      <Navbar />
    </div>
  );
};

export default Header;

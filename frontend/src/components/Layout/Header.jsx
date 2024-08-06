import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="px-5 md:px-10 max-h-7vh sm:max-h-12vh md:max-h-[30vh] w-full h-full text-center bg-cover bg-no-repeat bg-[url('/images/nav-banner.jpeg')] flex items-center relative">
      <img
        src="/images/logo-nav.png"
        className="w-24 sm:w-32 md:w-72 h-auto"
        alt=""
      />

      <Navbar />
    </div>
  );
};

export default Header;

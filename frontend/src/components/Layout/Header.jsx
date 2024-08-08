import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      {/* Gradient Background */}
      <div
        className="font-nunito w-full bg-gradient-to-br from-[#4D250F] to-[#3A1B0F] relative z-10"
        style={{ height: "14vh" }} // Adjust height as needed
      >
        <img
          src="/images/logo-nav.png"
          className="w-24 sm:w-30 md:w-72 h-auto object-contain absolute left-5 top-1/2 transform -translate-y-1/2"
          alt="Logo"
        />
        <Navbar />
      </div>

      {/* Banner with Navbar */}
      <div
        className="px-5 md:px-10 w-full text-center bg-no-repeat bg-center flex items-center justify-center relative"
        style={{ backgroundImage: "url('/images/nav-banner.png')", backgroundRepeat: "repeat", backgroundSize: "contain", height: "3vh" }}
      >
        {/* Content for the banner */}
      </div>
    </div>
  );
};

export default Header;

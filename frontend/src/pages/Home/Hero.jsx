import React, { useState } from "react";
import Button from "../../components/Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const TopNavbar = ({ className = "" }) => {
  const [activeSection, setActiveSection] = useState("research");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNavLinkClick = (sectionId) => {
    setIsDropdownOpen(false);
    setActiveSection(sectionId);
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const navItems = [
    { id: "research", label: "Research" },
    { id: "master-dissertation", label: "Master Dissertation" },
    { id: "web-development", label: "Web Development" },
    { id: "application-development", label: "Application Development" },
    { id: "student-assignment", label: "Master Student Assignment" },
    { id: "tech-projects", label: "B/Tech/ MTech Projects" },
    { id: "online-classes", label: "Online Classes" },
    { id: "guest-lectures", label: "Guest Lectures" },
    { id: "offline-classes", label: "Offline Classes" },
  ];

  const selectedItem = navItems.find((item) => item.id === activeSection);

  return (
    <div className="w-full lg:w-min">
      <div className="lg:hidden flex mb-6 flex-row items-start justify-start  z-[unset] w-full">
        <h1 className="relative text-2xl font-semibold">Our Services</h1>
      </div>
      <div
        className={`w-full lg:w-72 shadow-[0px_50px_100px_rgba(255,_255,_255,_0.05)_inset,_0px_15px_30px_rgba(213,_103,_66,_0.05),_0px_30px_60px_rgba(0,_0,_0,_0.1)] [backdrop-filter:blur(20px)] rounded md:rounded-lg [background:linear-gradient(90deg,_rgba(213,_103,_66,_0.01),_rgba(213,_103,_66,_0.02))] border-gray-200 border-[1px] border-solid box-border flex flex-col items-start justify-start py-3 lg:py-[22px] px-[7px] gap-[17px] leading-[normal] tracking-[normal] text-center text-5xl text-white font-nunito backdrop-blur-md ${className}`}
      >
        <div
          className="flex flex-row items-center justify-between py-0 px-4 z-[unset] w-full lg:hidden"
          onClick={toggleDropdown}
        >
          <h4 className="text-lg">
            {" "}
            {selectedItem ? selectedItem.label : "Select"}
          </h4>
          <button className="text-white text-xl">
            <MdOutlineKeyboardArrowDown />
          </button>
        </div>

        <section
          className={`self-stretch flex-col items-start justify-start gap-1 z-[unset] w-full ${
            isDropdownOpen ? "flex" : "hidden"
          } lg:flex`}
        >
          {navItems.map((item) => (
            <div
              key={item.id}
              className={`${
                activeSection === item.id &&
                "self-stretch [background:linear-gradient(90deg,_rgba(213,_103,_66,_0),_#d56742)] border-sandybrown border-r-[2px] border-solid overflow-hidden flex flex-row items-start justify-start py-1 pl-4"
              } my-[0.2rem]`}
              onClick={() => handleNavLinkClick(item.id)}
            >
              <div className="flex flex-row items-center justify-between w-full px-4 py-2 text-[1rem] font-normal text-left text-white bg-transparent  rounded-md cursor-pointer">
                {item.label}
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="bg-[url('/images/bg-home.png')] bg-[#0D0800] h-full bg-cover bg-no-repeat px-4 py-5 md:px-14 md:py-10">
      <div
        className={`w-full flex flex-col-reverse lg:flex-row items-start justify-start gap-12 leading-[normal] tracking-[normal] text-center text-[24px] text-white font-nunito md:box-border md:gap-6`}
      >
        <section
          id="research"
          className="flex flex-col items-start justify-start gap-8 text-left text-[48px] text-white-2 font-nunito w-full"
        >
          <img
            className="self-stretch h-48 md:h-72 relative rounded-xl w-full overflow-hidden shrink-0 object-cover"
            alt=""
            src="/images/hero.jfif"
          />

          <div className="w-full self-stretch flex flex-col items-start justify-start gap-6">
            <div className="self-stretch flex flex-col items-start justify-start gap-3">
              <h1 className="text-2xl md:text-3xl m-0 self-stretch relative text-inherit font-semibold font-[inherit]">
                Research
              </h1>
              <div className="self-stretch relative md:text-[18px] font-nunito text-gray-200 text-base ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
            <Button title={"Know More"} />
          </div>
        </section>
        <TopNavbar />
      </div>
    </div>
  );
};

export default Hero;

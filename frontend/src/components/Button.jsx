import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Button = ({ className = "", title }) => {
  return (
    <button
      className={`cursor-pointer border-gray-200 border-[1px] border-solid py-2.5 px-4 md:px-[23px] rounded-lg flex flex-row items-center justify-start gap-2 whitespace-nowrap hover:bg-darkslategray hover:border-gainsboro hover:border-[1px] hover:border-solid hover:box-border ${className}`}
    >
      <div className="relative text-sm md:text-lg leading-[170%] font-p1 text-white text-left inline-block min-w-[103px]">
        {title}
      </div>
      {/* <img
        className="h-8 w-8 relative overflow-hidden shrink-0"
        alt=""
        src="/frame-427319754.svg"
      /> */}
      <FaArrowRight className="text-[1rem] font-thin" />
    </button>
  );
};

export default Button;

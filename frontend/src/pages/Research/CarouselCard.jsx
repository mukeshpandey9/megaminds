import React from "react";

const CarouselCard = ({ title, content }) => {
  return (
    <div className="w-full h-full max-w-[24rem] bg-gradient-to-r from-orange-50 to-yellow-50 p-6 text-left rounded-lg shadow-lg">
      <h1 className="text-purple-800 text-2xl font-bold mb-4">{title}</h1>
      <ul className="list-disc pl-6 space-y-2 text-gray-700 text-sm md:text-base">
        {content.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CarouselCard;

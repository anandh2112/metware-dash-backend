import React from "react";
import img from "../sections/pictures/Metalwaredaylightfactorcompressed.jpg";
const DaylightFactorAnalysis = () => {
  return (
    <div className="border-gray-300 shadow-md rounded-lg pt-4 bg-white flex flex-col">
      <h1 className="text-xl lg:text-2xl font-bold text-center">Daylight Factor Analysis</h1>
      <img src={img} className="w-[100%] h-auto object-contain"/>
     
    </div>
  );
};

export default DaylightFactorAnalysis;

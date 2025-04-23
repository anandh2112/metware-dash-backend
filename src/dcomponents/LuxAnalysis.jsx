import React from "react";
import lux_img from "../sections/pictures/mware10.png";
import lux_img_pt2 from "../sections/pictures/mware11.png";
import lux_scale from "../sections/pictures/lux_scale.png";

const CombinedLuxAnalysis = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center p-6 bg-white rounded-lg justify-around gap-[20px] shadow-md sm:space-x-6">
      <div className="flex flex-col items-center pt-6 bg-white rounded-lg justify-around gap-[20px]">
        <h1 className="text-2xl font-bold text-black">LUX Analysis</h1>
        <img
          src={lux_img}
          alt="LUX Analysis"
          className="w-[auto] h-[70%] pt-3"
        />
      </div>

      <img 
      src={lux_scale}
      alt="LUX Scale"
      className="w-[auto] h-[15vh] md:h-[13vh] lg:h-[13vh] xl:h-[25vh] "
      />

      <div className="flex flex-col items-center pt-6 bg-white rounded-lg justify-around gap-[20px]
      ">
        <h1 className="text-2xl font-bold text-center">Sectional Analysis</h1>
        <img
          src={lux_img_pt2}
          alt="LUX Analysis"
          className="w-[auto] h-[70%] pt-3"
        />
      </div>
    </div>
  );
};

export default CombinedLuxAnalysis;
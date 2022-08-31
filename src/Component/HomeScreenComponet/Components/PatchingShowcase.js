import React from "react";
import logo1 from "../../../Assets/logo1.jpg";
import logo2 from "../../../Assets/logo2.bmp";
import gears from "../../../Assets/gears.gif";
import "../Components/animation.css";

const PatchingShowcase = () => {
  return (
    <div className="hidden md:w-[100%] md:flex md:flex-row md:justify-between md:items-center bg-white py-7 max-w-[85rem] my-0 mx-auto">
      {/* e-1'/>
        
         */}
      <div className="w-[42%]  justify-end flex  ">
        <div className="animation-1 w-[70%]">
          <img src={logo1} alt="Logo1" className=" md:w-[100%]   " />
        </div>
      </div>
      <div className="w-[15%]  flex justify-center items-center ">
        <img
          src={gears}
          alt="gears"
          className="w-[70%] ml-10 mr-10 animation-3"
        />
      </div>
      <div className="w-[42%]  justify-start flex  ">
        <div className="animation-2 w-[70%]">
          <img src={logo2} alt="Logo2" className="  md:w-[100%]  " />
        </div>
      </div>
    </div>
  );
};

export default PatchingShowcase;

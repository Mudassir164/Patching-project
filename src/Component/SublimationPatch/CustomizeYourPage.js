import React from "react";
import AllFeatures from "../HomeScreenComponet/Components/AllFeatures";

const CustomizeYourPage = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col  bg-[#2babe2]">
      <div className="w-[100%] flex flex-col justify-center items-center ">
        <h1 className="text-2xl text-white font-bold">
          CUSTOMIZE YOUR PATCH! ORDER FROM ANY OF THESE OPTIONS
        </h1>
        <p className="text-lg text-white ">We deliver what we promise!</p>
      </div>
      <AllFeatures />
    </section>
  );
};

export default CustomizeYourPage;

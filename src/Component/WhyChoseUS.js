import React from "react";
import ReasonBox from "./ReasonBox";

const WhyChoseUS = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col  ">
      <div className="w-[100%] flex flex-col justify-center items-center mb-5 ">
        <h1 className="text-2xl text-black font-bold">Why Choose Us</h1>
      </div>
      <ReasonBox />
    </section>
  );
};

export default WhyChoseUS;

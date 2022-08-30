import React from "react";
import AllPriceOffer from "./Components/AllPriceOffer";

const PricingSection = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col  bg-[#2196f3]">
      <div className="w-[100%] flex flex-col justify-center items-center ">
        <h1 className="text-2xl text-white font-bold">Pricing</h1>
        <p className="text-lg text-white ">
          Challanging the market price, order today!
        </p>
      </div>
      <AllPriceOffer />
    </section>
  );
};

export default PricingSection;

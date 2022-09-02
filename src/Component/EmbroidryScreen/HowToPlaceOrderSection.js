import React from "react";
import AllOrderSteps from "./Component/AllOrderSteps";
import "./Style.css";

const HowToPlaceOrderSection = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col relative  bg-gray-50 ">
      <div className="w-[100%] flex flex-col justify-center text-center mb-5  items-center section-break">
        <h1 className="text-4xl text-black font-bold">HOW TO PLACE AN ORDER</h1>
        <p className="text-lg text-black text-center ">
          We are here to assist you from start to end. Should you have any
          question that requires an immediate response, do not hesitate to
          contact us by telephone at 209-680-4446. Or Email us at
          sales@reliablepunching.com We are always here to help in any way
          possible.
        </p>
      </div>
      <AllOrderSteps />
    </section>
  );
};

export default HowToPlaceOrderSection;

import React from "react";
import { FaStar } from "react-icons/fa";
import { BsStarFill } from "react-icons/bs";
import { colors } from "../Constant/Theme";

const quality = [
  "We bring our professional design team with their experience and talent directly to you.",
  "We work for you. You approve your custom design every step of the way.",
  " You will have a Representative that will work with you start to finish.",
  "Peace of Mind. We are Based in the USA & Quality is our promise.",
];

const speed = [
  "Quote sent to you for your project within 24 business hours",
  "Patches to you within 15 business days once you approve the final sample",
  " You will have a Representative that will work with you start to finish.",
  " We work with you at your pace with our quality & speed of delivery as our goals",
];

const cost = [
  " NO Minimum Quantity",
  "NO Shipping Charges",
  "Affordable Prices",
  "No Surprises!",
];

const ReasonBox = () => {
  return (
    <div className="w-[100%] flex flex-row flex-wrap py-0 justify-between  max-w-[85rem] my-0 mx-auto ">
      <div className=" w-full lg:w-[30%] flex flex-col  ">
        <h1 className="font-semibold text-2xl text-center mb-3">Quality</h1>
        <Reason reasons={quality} />
      </div>
      <div className="w-full lg:w-[30%]  flex flex-col  ">
        <h1 className="font-semibold text-2xl text-center mb-3">Speed</h1>
        <Reason reasons={speed} />
      </div>
      <div className="w-full lg:w-[30%]  flex flex-col  ">
        <h1 className="font-semibold text-2xl text-center mb-3">Cost</h1>
        <Reason reasons={cost} />
      </div>
    </div>
  );
};

const Reason = ({ reasons }) => {
  return (
    <ul>
      {reasons.map((value, index) => {
        return (
          <li className="flex flex-row text-base mb-5 ">
            {/* <span>
              <div className="bg-orange-700  h-8 p-1 absolute -z-40 mr-10  rounded-full flex justify-center items-center">
                <FaStar size={25} color="orange" className=" " id="star" />
              </div>
            </span>
            <p className="ml-10 text-start">{value}</p> */}
            <p>
              <i>
                <BsStarFill
                  className={`p-[4px] text-white ${colors.bgSecondry} rounded-[50%] text-2xl inline  mr-2`}
                />
              </i>
              {value}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReasonBox;

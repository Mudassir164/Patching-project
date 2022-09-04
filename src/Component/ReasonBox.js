import React from "react";
import { FaStar } from "react-icons/fa";

const ReasonBox = () => {
  return (
    <div className="w-[100%] flex flex-row flex-wrap py-0 justify-between items-center max-w-[85rem] my-0 mx-auto border-red-500">
      <div className="w-[30%] flex flex-col border-2 border-red-400 ">
        <h3 className="text-center text-3xl">Quality</h3>
        <Reason />
      </div>
      <div className="w-[30%] flex flex-col border-2 border-red-400">
        <h3>Quality</h3>
        <Reason />
      </div>
      <div className="w-[30%] flex flex-col border-2 border-red-400">
        <h3>Quality</h3>
        <Reason />
      </div>
    </div>
  );
};

const Reason = () => {
  return (
    <ul>
      <li className="flex flex-row text-base font-bold relative ">
        <span>
          <div className="bg-orange-700  h-8 p-1 absolute -z-40 mr-10  rounded-full flex justify-center items-center">
            <FaStar size={25} color="orange" className=" " id="star" />
          </div>
        </span>
        <p className="ml-10">
          We bring our professional design team with their experience and talent
          directly to you.
        </p>
      </li>
      <li>
        We bring our professional design team with their experience and talent
        directly to you.
      </li>
      <li>
        We bring our professional design team with their experience and talent
        directly to you.
      </li>
    </ul>
  );
};

export default ReasonBox;

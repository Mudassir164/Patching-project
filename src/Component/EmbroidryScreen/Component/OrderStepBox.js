import React from "react";

const OrderStepBox = ({ icon, title, detail }) => {
  return (
    <div
      className="flex flex-col justify-center items-center w-[100%] md:w-[45%] min-h-[300px]  p-5 bg-[#20333E] sm:mx-2 sm:my-3  mt-5   shadow-lg shadow-gray-500 "
      //   id="feature-box"
    >
      {icon}
      <h3 className="text-xl font-bold mb-5 mt-5 text-[#2BEBE2] text-center  ">
        {title}
      </h3>
      <p className="text-center text-white ">{detail}</p>
    </div>
  );
};

export default OrderStepBox;

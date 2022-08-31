import React from "react";

const SliderContainer = ({ imgSrc, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] lg:w-[80%] ">
      <h1 className="text-black text-4xl font-serif font-bold text-center mb-3">
        {title}
      </h1>
      <img src={imgSrc} alt="img" className="w-[100%] mb-4" />
      {description}
    </div>
  );
};

export default SliderContainer;

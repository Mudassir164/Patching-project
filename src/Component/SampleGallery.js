import React from "react";

const SampleGallery = ({ images }) => {
  return (
    <div className="w-[100%] flex flex-row flex-wrap  gap-5 justify-center items-center max-w-[85rem] my-0 mx-auto">
      {images.map((value, index) => {
        return (
          <div
            className="w-[100%] md:w-[22%] sm:w-[45%] "
            key={`images${index}`}
          >
            <img src={value} className="w-[100%]" />
          </div>
        );
      })}
    </div>
  );
};

export default SampleGallery;

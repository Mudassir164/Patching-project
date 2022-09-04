import React from "react";
import SampleGallery from "../SampleGallery";

const images = [
  require("../../Assets/Leather/L-7.jpg"),
  require("../../Assets/Leather/L-1.jpg"),
  require("../../Assets/Leather/L-4.jpg"),
  require("../../Assets/Leather/L-2.jpg"),
  require("../../Assets/Leather/L-3.jpg"),
  require("../../Assets/Leather/L-6.jpg"),
  require("../../Assets/Leather/L-5.jpg"),

  require("../../Assets/Leather/L-8.jpg"),
];

const GallerySection = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col relative  bg-gray-50 ">
      <div className="w-[100%] flex flex-col justify-center text-center mb-5  items-center section-break"></div>
      <SampleGallery images={images} />
    </section>
  );
};

export default GallerySection;

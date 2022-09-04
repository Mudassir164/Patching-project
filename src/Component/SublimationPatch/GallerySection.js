import React from "react";
import SampleGallery from "../SampleGallery";

const images = [
  require("../../Assets/SublimationPatch/s-3.jpg"),
  require("../../Assets/SublimationPatch/s-4.jpg"),
  require("../../Assets/SublimationPatch/s-5.jpg"),
  require("../../Assets/SublimationPatch/s-6.jpg"),
  require("../../Assets/SublimationPatch/s-7.jpg"),
  require("../../Assets/SublimationPatch/s-8.jpg"),
  require("../../Assets/SublimationPatch/s-9.jpg"),
  require("../../Assets/SublimationPatch/s-10.jpg"),
  require("../../Assets/SublimationPatch/s-11.jpg"),
  require("../../Assets/SublimationPatch/s-12.jpg"),
  require("../../Assets/SublimationPatch/s-13.jpg"),
  require("../../Assets/SublimationPatch/s-14.jpg"),
  require("../../Assets/SublimationPatch/14.jpg"),
  require("../../Assets/SublimationPatch/13.jpg"),
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

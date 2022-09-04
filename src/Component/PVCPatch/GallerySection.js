import React from "react";
import SampleGallery from "../SampleGallery";

const images = [
  require("../../Assets/PVC Patch/PV-1.jpg"),
  require("../../Assets/PVC Patch/PV-2.jpg"),
  require("../../Assets/PVC Patch/PV-3.jpg"),
  require("../../Assets/PVC Patch/PV-4.png"),
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

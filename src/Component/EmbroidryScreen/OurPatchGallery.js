import React from "react";
import PatchGallery from "./Component/PatchGallery";
import "./Style.css";

const OurPatchGallery = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col relative  bg-gray-50 ">
      <div className="w-[100%] flex flex-col justify-center text-center mb-5  items-center section-break">
        <h1 className="text-4xl text-black font-bold">Our Patch Gallery</h1>
        <p className="text-lg text-black text-center ">
          Here's a small showcase of what we have been doing for our customers!
        </p>
      </div>
      <PatchGallery />
    </section>
  );
};

export default OurPatchGallery;

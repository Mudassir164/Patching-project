import React from "react";
import FAQs from "../../Component/EmbroidryScreen/FAQs";
import HowToPlaceOrderSection from "../../Component/EmbroidryScreen/HowToPlaceOrderSection";
import OurPatchGallery from "../../Component/EmbroidryScreen/OurPatchGallery";
import SliderAndForm from "../../Component/EmbroidryScreen/SliderAndForm";

const EmboridreedPatches = () => {
  return (
    <>
      <SliderAndForm />
      <HowToPlaceOrderSection />
      <OurPatchGallery />
      <FAQs />
    </>
  );
};

export default EmboridreedPatches;

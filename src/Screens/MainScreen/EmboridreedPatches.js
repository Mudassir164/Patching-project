import React from "react";
import BackingOption from "../../Component/EmbroidryScreen/BackingOption";
import EmbroideryCoveragePricing from "../../Component/EmbroidryScreen/EmbroideryCoveragePricing";
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
      <BackingOption />
      <EmbroideryCoveragePricing />
      <FAQs />
    </>
  );
};

export default EmboridreedPatches;

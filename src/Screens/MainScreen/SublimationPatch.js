import React from "react";
import CustomizeYourPage from "../../Component/SublimationPatch/CustomizeYourPage";
import GallerySection from "../../Component/SublimationPatch/GallerySection";
import SliderAndForm from "../../Component/SublimationPatch/SliderAndForm";
import WelcomeSection from "../../Component/WelcomeSection";
import WhyChoseUS from "../../Component/WhyChoseUS";

const SublimationPatch = () => {
  return (
    <>
      <SliderAndForm />
      <WelcomeSection />
      <CustomizeYourPage />
      <WhyChoseUS />
      <GallerySection />
    </>
  );
};

export default SublimationPatch;

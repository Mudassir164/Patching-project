import React from "react";
import CustomizeYourPage from "../../Component/LeatherPatches/CustomizeYourPage";
import GallerySection from "../../Component/LeatherPatches/GallerySection";
import ProductDiscription from "../../Component/LeatherPatches/ProductDiscription";
import SliderAndForm from "../../Component/LeatherPatches/SliderAndForm";
import WelcomeSection from "../../Component/WelcomeSection";

import WhyChoseUS from "../../Component/WhyChoseUS";

const LeatherPatches = () => {
  return (
    <>
      <SliderAndForm />
      <ProductDiscription />
      <WelcomeSection />
      <CustomizeYourPage />
      <WhyChoseUS />
      <GallerySection />
    </>
  );
};

export default LeatherPatches;

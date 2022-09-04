import React from "react";
import CustomizeYourPage from "../../Component/PVCPatch/CustomizeYourPage";
import GallerySection from "../../Component/PVCPatch/GallerySection";
import ProductDiscription2 from "../../Component/PVCPatch/PorductDiscription2";
import ProductDiscription1 from "../../Component/PVCPatch/ProductDiscription1";

import SliderAndForm from "../../Component/PVCPatch/SliderAndForm";
import WelcomeSection from "../../Component/WelcomeSection";
import WhyChoseUS from "../../Component/WhyChoseUS";

const PVCpatch = () => {
  return (
    <>
      <SliderAndForm />
      <ProductDiscription2 />
      <ProductDiscription1 />
      <WelcomeSection />
      <CustomizeYourPage />
      <WhyChoseUS />
      <GallerySection />
    </>
  );
};

export default PVCpatch;

import React from "react";
import img1 from "../../Assets/banner-patch.jpg";
import Form from "../Form";
import SliderContainer from "../SliderContainer";
import {
  selectOptions,
  selectOptions2,
  userQuote,
  validationSchema,
} from "./validationAndValues";

const SliderAndForm = () => {
  const paragraph = (
    <p className="text-black font-serif text-lg">
      A leather patch can be found on the back of almost every pair of jeans.
      They add high-quality flair to every item they are attached to from hats
      to jackets, jeans, socks, or bags. These custom leather patches can be
      stitched on, ironed on, stuck on, or velcroed on just like any other patch
      style.
      <br /> <br />
      We customize high quality patches made with genuine leather embossed,
      printed or embroidered as per your requirements a wide variety of options,
      add-ons and backings to choose from with fast turnaround and free
      shipping.
    </p>
  );
  return (
    <section className="flex md:flex-row flex-col w-[100%] p-3 md:p-14 bg-gray-50 max-w-[85rem] my-0 mx-auto">
      <div className="w-[100%] md:w-[50%] lg:w-[60%] justify-center items-center flex ">
        <SliderContainer
          imgSrc={img1}
          title="Custom Leather Patches"
          description={paragraph}
        />
      </div>
      <div className="md:w-[50%] lg:w-[40%] w-[100%] pb-5 ">
        <Form
          HW={true}
          SI={true}
          ST={true}
          initialValues={userQuote}
          validationSchema={validationSchema}
          selectOptions={selectOptions}
          selectOptions2={selectOptions2}
          optionTitle="Select Type"
          optionTitle2="Backing Type"
          IsQuantity={true}
        />
      </div>
    </section>
  );
};

export default SliderAndForm;

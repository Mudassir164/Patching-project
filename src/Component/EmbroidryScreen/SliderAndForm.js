import React from "react";
import Form from "../Form";
import SliderContainer from "../SliderContainer";
import img1 from "../../Assets/banner-patch.jpg";
import {
  userQuote,
  validationSchema,
  selectOptions,
} from "./Component/validationAndValue";
// import Slider from "./Components/Slider";

const SliderAndForm = () => {
  const paragraph = (
    <p className="text-black font-serif text-lg">
      The process of making exceptional quality custom embroidered patches that
      we produce is based on our ability to accurately translate your design,
      logo or idea into the medium of artwork (digitizing) to our computer
      controlled embroidery machines.
      <br /> <br />
      We start with a very high quality polyester fabric using equally high
      quality colored threads then sew the computer generated pattern of threads
      onto the polyester fabric to form the exact design that you want.
      <br />
      <br />
      Depending on how the final product is to be used, we apply different types
      of backing material to the underside of the polyester fabric of the
      finished patch.
    </p>
  );
  return (
    <section className="flex md:flex-row flex-col w-[100%] p-3 md:p-14 bg-gray-50 max-w-[85rem] my-0 mx-auto">
      <div className="w-[100%] md:w-[50%] lg:w-[60%] justify-center items-center flex ">
        <SliderContainer
          imgSrc={img1}
          title="Custom Embroidery Patches"
          description={paragraph}
        />
      </div>
      <div className="md:w-[50%] lg:w-[40%] w-[100%] pb-5 ">
        <Form
          HW={true}
          SI={true}
          validationSchema={validationSchema}
          initialValues={userQuote}
          selectOptions={selectOptions}
          optionTitle="Backing Type"
          IsQuantity={true}
        />
      </div>
    </section>
  );
};

export default SliderAndForm;

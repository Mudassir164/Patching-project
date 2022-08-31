import React from "react";
import Form from "../Form";
import Slider from "./Components/Slider";

const SliderAndForm = () => {
  const selectOptions = [
    "Embroidered Digitizing",
    "Embroidered Patch",
    "Leather Patch",
    "Sublimation Patch",
    "Vector Ilustration",
  ];
  return (
    <section className="flex md:flex-row flex-col w-[100%] px-3 max-w-[85rem] my-0 mx-auto ">
      <div className="w-[100%] md:w-[50%] lg:w-[60%]  ">
        <Slider />
      </div>
      <div className="md:w-[50%] lg:w-[40%] w-[100%] pb-5 ">
        <Form SI={true} selectOptions={selectOptions} />
      </div>
    </section>
  );
};

export default SliderAndForm;

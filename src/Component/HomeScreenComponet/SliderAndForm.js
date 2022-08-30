import React from "react";
import Form from "../Form";
import Slider from "./Components/Slider";

const SliderAndForm = () => {
  return (
    <section className="flex md:flex-row flex-col w-[100%] px-3 ">
      <div className="w-[100%] md:w-[50%] lg:w-[60%]">
        <Slider />
      </div>
      <div className="md:w-[50%] lg:w-[40%] w-[100%] pb-5 ">
        <Form />
      </div>
    </section>
  );
};

export default SliderAndForm;

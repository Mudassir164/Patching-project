import React from "react";
import Form from "../Form";
import SliderContainer from "../SliderContainer";
import img1 from "../../Assets/banner-vector.jpg";
// import Slider from "./Components/Slider";

const SliderAndForm = () => {
  const paragraph = (
    <p className="text-black font-serif text-lg">
      Every time you see a shirt with an embroidered company logo or hat with an
      embroidered sports team emblem, that design was "digitized". <br />
      Embroiderydigitizing is the process of converting existing artwork like a
      company logo or team emblem into a stitch file that an embroidery machine
      can sew on a garment.
      <br />
      <br />
      Before any design can be embroidered, it must be digitized. Digitizing is
      a complex process that is both art and science.
    </p>
  );
  return (
    <section className="flex md:flex-row flex-col w-[100%] px-3 py-5 bg-gray-50 max-w-[85rem] my-0 mx-auto">
      <div className="w-[100%] md:w-[50%] lg:w-[60%] justify-center items-center flex ">
        <SliderContainer
          imgSrc={img1}
          title="Embroidery Digitizing"
          description={paragraph}
        />
      </div>
      <div className="md:w-[50%] lg:w-[40%] w-[100%] pb-5 ">
        <Form HW={true} SI={false} />
      </div>
    </section>
  );
};

export default SliderAndForm;

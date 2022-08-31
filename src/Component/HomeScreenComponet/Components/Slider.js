import React from "react";
import Carousel from "nuka-carousel";
import { BsInstagram, BsTelephone, BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "./slider.css";
import SliderContent from "./SliderContent";

const Slider = () => {
  const flickityOptions = {
    initialIndex: 0,
  };
  const iconStyle = " hover:fill-white fill-black ";
  return (
    <Carousel
      autoplay={true}
      autoplayInterval={15000}
      wrapAround={true}
      adaptiveHeight={true}
      defaultControlsConfig={{
        // containerClassName: "slider-container",
        nextButtonText: <AiOutlineArrowRight className={iconStyle} size={40} />,
        prevButtonText: <AiOutlineArrowLeft className={iconStyle} size={40} />,
        pagingDotsStyle: {
          fill: "black",
        },
        pagingDotsClassName: "m-2",
      }}
    >
      <div className="w-[100%] div-height relative  " id="bgCss-1">
        <SliderContent title="Embroidery Digitizing" />
      </div>
      <div className="w-[100%] div-height relative" id="bgCss-2"></div>
      <div className="w-[100%] div-height relative" id="bgCss-3">
        <SliderContent title="Vector Illustration" />
      </div>
    </Carousel>
  );
};

export default Slider;

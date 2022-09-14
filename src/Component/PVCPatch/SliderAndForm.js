import React from "react";
import img1 from "../../Assets/pvc-main.jpg";
import Form from "../Form";
import SliderContainer from "../SliderContainer";
import {
  selectOptions,
  userQuote,
  validationSchema,
} from "./validationAndValues";

const SliderAndForm = () => {
  const paragraph = (
    <p className="text-black font-serif text-lg">
      Soft Rubber PVC Patches (also known as PVC Patches) are excellent way to
      show off your logo or name. They can be made with a 2D or 3D design. They
      are the right choice to go with if you're looking for a waterproof
      material that can also survive heat and cold temperatures.
      <br /> <br />
      In short, PVC patches are a modern alternative to the more common
      embroidered patch.
      <br />
      Made of a durable plastic, PVC comes in an endless array of colors that
      can bring your custom design to life with a look and feel that is
      unachievable with embroidery.
      <br />
      <br />
      PVC can be molded to any shape and dyed to any color or shade. It allows
      extreme detail and precision.
      <br />
      <br />
      PVC (Soft Rubber) patches work perfect for colorful or complicated design
      with small lines or small text.
      <br />
      <br />
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
          title="Custom PVC Patches"
          description={paragraph}
        />
      </div>
      <div className="md:w-[50%] lg:w-[40%] w-[100%] pb-5 ">
        <Form
          HW={true}
          SI={true}
          IsQuantity={true}
          initialValues={userQuote}
          validationSchema={validationSchema}
          selectOptions={selectOptions}
          optionTitle="Backing Type"
        />
      </div>
    </section>
  );
};

export default SliderAndForm;

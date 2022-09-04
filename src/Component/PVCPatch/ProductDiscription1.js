import React from "react";

const ProductDiscription1 = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col relative  bg-gray-50 ">
      <div className="w-[100%] flex flex-col justify-center text-center mb-3 items-center section-break"></div>
      <div className="w-[100%] flex flex-row justify-center gap-10  max-w-[85rem] my-0 mx-auto">
        <div className="md:w-[40%] ">
          <img
            src={require("../../Assets/PVC Patch/pvc–rubber–silicone-labels.jpg")}
            className="w-[100%]"
          />
        </div>
        <div className=" w-[100%] md:w-[50%]">
          <h2 className="text-4xl font-serif font-bold mb-3">
            PVC – Rubber – Silicone Labels
          </h2>
          <Paragraph>
            Soft PVC Labels can be made to your specifications based on our
            ability to accurately translate your design, logo or idea into the
            medium of PVC modeling for translation to our computer controlled
            CNC Mold Cutting machines.
          </Paragraph>
          <Paragraph>
            Send us your logo or idea, and our expert graphic designers will
            create a beautiful design for you, and in only 3 weeks after you
            approve the art, you will have in your hands a high quality,
            beautiful looking PVC Label.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

const Paragraph = (props) => {
  return <p className="text-xl mb-5 font-serif">{props.children}</p>;
};
export default ProductDiscription1;

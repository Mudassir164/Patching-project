import React from "react";

const ProductDiscription = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col relative  bg-gray-50 ">
      <div className="w-[100%] flex flex-col justify-center text-center mb-3  items-center section-break"></div>
      <div className="w-[100%] flex flex-row justify-center gap-10 max-w-[85rem] my-0 mx-auto">
        <div className="md:w-[40%] ">
          <img
            src={require("../../Assets/Leather/leather-patches.jpg")}
            className="w-[100%]"
          />
        </div>
        <div className=" w-[100%] md:w-[50%]">
          <h2 className="text-4xl font-serif font-bold mb-3">
            True Customization Features
          </h2>
          <Paragraph>
            Tanned, Waxed, Finished and embroidered with perfection and the most
            intricate of details, our environment friendly leather patches are a
            premium product which will last for decades and give your designs a
            rich, traditional and historical feel as time passes by. A premium
            product which will last a lifetime.
          </Paragraph>
          <Paragraph>
            We can stitch, emboss and print on these leather patches depending
            on your design and requirements. There are loads of design
            possibilities and various leather to choose from (suede, patent and
            faux, full grain leather, top grain leather, corrected grain
            leather, and bonded leather), the most popular is Velcro backing for
            this style.
          </Paragraph>
        </div>
      </div>
    </section>
  );
};

const Paragraph = (props) => {
  return <p className="text-xl mb-5 font-serif">{props.children}</p>;
};
export default ProductDiscription;

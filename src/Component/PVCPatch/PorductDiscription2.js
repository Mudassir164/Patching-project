import React from "react";

const ProductDiscription2 = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col relative  bg-gray-50 ">
      <div className="w-[100%] flex flex-col justify-center text-center mb-3   items-center section-break"></div>
      <div className="w-[100%] flex flex-row-reverse  justify-center max-w-[85rem] my-0 mx-auto gap-10">
        <div className="md:w-[40%] ">
          <img
            src={require("../../Assets/PVC Patch/PVC-Keychain.jpg")}
            className="w-[100%]"
          />
        </div>
        <div className=" w-[100%] md:w-[50%]">
          <h2 className="text-4xl font-serif font-bold mb-3">
            Custom Rubber PVC Keychains
          </h2>
          <Paragraph>
            Soft PVC or Rubber Keychains are the perfect advertising tool. This
            versatile and extremely durable medium has become the number one
            choice for those wanting keychains. Why choose PVC over Metal:
          </Paragraph>
          <ul className="list-[square] font-serif p-4">
            <li>PVC doesn’t hold the heat</li>
            <li>
              Withstands almost all wear and tear, and Can live as long as the
              life of the car key attached to it
            </li>
            <li> + You can add as many layers as you want!</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Paragraph = (props) => {
  return <p className="text-xl mb-5 font-serif">{props.children}</p>;
};
export default ProductDiscription2;

import React from "react";

const BackingOption = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col relative  bg-gray-50 ">
      <div className="w-[100%] flex flex-col justify-center text-center mb-5  items-center section-break">
        <h1 className="text-4xl text-black font-bold">Backing Options</h1>
      </div>
      <div className="flex flex-wrap flex-row items-center justify-center md:justify-between max-w-[85rem] my-0 mx-auto ">
        <BackingOptionsBox
          title="Plain Sew On"
          imgSrc={require("../../Assets/Backing/backing-adhesive-300x300.jpg")}
        />
        <BackingOptionsBox
          title="Heat Seal / Iron-On"
          imgSrc={require("../../Assets/Backing/backing-plain-300x300.jpg")}
        />
        <BackingOptionsBox
          title="Velcro Hook  Loop"
          imgSrc={require("../../Assets/Backing/backing-velcro-300x300.jpg")}
        />
      </div>
    </section>
  );
};

const BackingOptionsBox = ({ title, imgSrc }) => {
  return (
    <div className="w-[100%]  md:w-[30%] flex flex-col  items-center justify-center ">
      <h3 className="text-2xl font-bold text-gray-500 text-center">{title}</h3>
      <img className="w-[60%]" src={imgSrc} alt="ccc" />
    </div>
  );
};

export default BackingOption;

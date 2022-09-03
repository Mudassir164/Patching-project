import React, { useState, useEffect } from "react";
import "./Component/style.css";
// import imgg from "../../Assets/";
import "./Component/DigitizingGallery.css";

const DigitizingGallery = () => {
  const [showModel, setshowModel] = useState("../../Assets/2t.jpg");
  const [openClose, setopenClose] = useState(false);
  const [num, setnum] = useState(2);

  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col relative  bg-gray-50 ">
      <div className="w-[100%] flex flex-col justify-center  items-center section-break">
        <h1 className="text-4xl text-black font-bold">
          Our Digitizing Gallery
        </h1>
        <p className="text-lg text-black ">This is just some work!</p>
      </div>

      <div className="w-[100%]  items-center justify-center flex flex-row flex-wrap mt-10 max-w-[85rem] my-0 mx-auto">
        {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 16].map((value, index) => {
          return (
            <div
              key={`digitizing gallery ${index}`}
              className=" w-[100%] sm:w-[45%] lg:w-[30%] shadow-lg mx-3 my-5 rounded-md overflow-hidden cursor-pointer "
            >
              <img
                src={require(`../../Assets/${value}t.jpg`)}
                alt={`pic ${value}`}
                className="w-[100%]"
                onClick={() => {
                  setshowModel(`../../Assets/${value}t.jpg`);
                  setopenClose(true);
                  setnum(value);
                }}
              />
            </div>
          );
        })}
      </div>
      <div id="myModal" className={`modal  ${openClose ? "block" : "hidden"}`}>
        <span
          className="close"
          onClick={() => {
            setopenClose(false);
          }}
        >
          &times;
        </span>
        <img
          className="modal-content mt-4"
          id="img01"
          src={require(`../../Assets/${num}t.jpg`)}
          alt="img"
        />
      </div>
    </section>
  );
};

export default DigitizingGallery;

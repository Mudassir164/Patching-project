import React, { useState } from "react";
import "../../DigitizingScreenComponent/Component/DigitizingGallery.css";

const PatchGallery = () => {
  const [showModel, setshowModel] = useState("../../../Assets/patch/2t.jpg");
  const [openClose, setopenClose] = useState(false);
  const [num, setnum] = useState(2);
  return (
    <>
      <div className="w-[100%]  items-center justify-center flex flex-row flex-wrap mt-10 max-w-[85rem] my-0 mx-auto">
        {[2, 3, 4, 7, 8, 11, 12, 13, 14, 15, 16].map((value, index) => {
          return (
            <div
              key={`PatchGallery${index}`}
              className=" w-[45%] md:w-[22%] border-2 border-black-400 mx-3 my-5 rounded-md overflow-hidden cursor-pointer "
            >
              <img
                src={require(`../../../Assets/patch/${value}t.jpg`)}
                alt={`pic ${value}`}
                className="w-[100%]"
                onClick={() => {
                  setshowModel(`../../../Assets/patch/${value}t.jpg`);
                  setopenClose(true);
                  setnum(value);
                }}
              />
            </div>
          );
        })}
      </div>

      {/* ............................................................ */}
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
          src={require(`../../../Assets/patch/${num}t.jpg`)}
          alt="img"
        />
      </div>
    </>
  );
};

export default PatchGallery;

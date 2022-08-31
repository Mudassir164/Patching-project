import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { BsInstagram, BsTelephone, BsFillTelephoneFill } from "react-icons/bs";

const TopNavbar = () => {
  const iconStyle = "mr-5 hover:fill-white fill-gray-400";
  return (
    <section className="flex w-[100%] flex-row bg-black p-1">
      <div className="flex w-[100%] flex-row bg-black p-1 max-w-[85rem] my-0 mx-auto">
        <div className="flex w-1/2  items-center   ">
          <a
            href="#"
            className="flex flex-row items-center text-gray-200 hover:text-white"
          >
            <BsFillTelephoneFill className="ml-5 " size={12} />
            <p className="   underline text-base ml-2 font-bold">
              +92312-3456789
            </p>
          </a>
        </div>
        <div className="flex w-1/2  justify-end items-center pr-7 ">
          <a href="#">
            <BsInstagram className={iconStyle} />
          </a>
          <a href="#">
            {" "}
            <FaFacebook className={iconStyle} />
          </a>
          <a href="#">
            {" "}
            <FaGoogle className={iconStyle} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopNavbar;

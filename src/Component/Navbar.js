import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import "./navbar.css";
const url = "https://www.reliablepunching.com/heart/imgs/main/rplogo.svg";
const Navbar = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <nav
      className={`navbar-container ease-in py-5 px-16 static z-10  w-full ${
        showMore ? ` bg-[#212121] zoomIn` : `bg-[#423c3c] fadeInDown`
      } flex justify-between items-center`}
    >
      <div className="nav-logo">
        <img className="h-8 " src={url} alt="" />
      </div>
      <div className="nav-options text-white ">
        {showMore ? (
          <ul className="flex gap-8 items-center">
            <li className="hover:text-gray-400 cursor-pointer">Web & App</li>
            <li className=" hover:text-gray-400 cursor-pointer">Vector</li>
            <li className=" hover:text-gray-400 cursor-pointer">Account</li>
            <li className=" hover:text-gray-400 cursor-pointer">Contact</li>
            <li
              className="border-[1px] cursor-pointer rounded-full px-5 py-2 flex items-center"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              More
              <i className="ml-3 text-md">
                {showMore ? <MdClose /> : <IoIosArrowDown />}
              </i>
            </li>
          </ul>
        ) : (
          <ul className="flex gap-8 items-center">
            <li className="hover:text-gray-400 cursor-pointer">Digitizing</li>
            <li className=" hover:text-gray-400 cursor-pointer">
              Emboidered Patch
            </li>
            <li className=" hover:text-gray-400 cursor-pointer">
              Leather Patch
            </li>
            <li className=" hover:text-gray-400 cursor-pointer">
              Sublimation Patch
            </li>
            <li className="hover:text-gray-400 cursor-pointer">PVC Patch</li>
            <li
              className="border-[1px] cursor-pointer rounded-full px-5 py-2 flex items-center"
              onClick={() => {
                setShowMore(!showMore);
              }}
            >
              More
              <i className="ml-3 text-md">
                {showMore ? <MdClose /> : <IoIosArrowDown />}
              </i>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

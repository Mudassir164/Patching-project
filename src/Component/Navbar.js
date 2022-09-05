import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaGreaterThan, FaLessThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./navbar.css";
const url = "https://www.reliablepunching.com/heart/imgs/main/rplogo.svg";

const Navbar = () => {
  const [showMore, setShowMore] = useState(false);
  const [barButton, setbarButton] = useState(false);

  return (
    <nav
      className={`navbar-container ease-in py-3  sticky top-0 z-10
      
      ${showMore ? ` overlay ` : `over `}
        w-full flex flex-col lg:flex-row lg:justify-between lg:items-center`}
    >
      <div className="w-[100%] flex flex-col lg:flex-row lg:justify-between lg:items-center max-w-[85rem] my-0 mx-auto  ">
        <div className="nav-logo w-full justify-between px-5 flex items-center flex-row lg:w-[30%] ">
          <Link to="/">
            <img className="h-10 " src={url} alt="" />
          </Link>

          {!barButton ? (
            <FaBars
              size={20}
              color="white"
              className="lg:hidden cursor-pointer"
              onClick={() => {
                setbarButton(!barButton);
              }}
            />
          ) : (
            <MdClose
              size={20}
              color="white"
              className="lg:hidden cursor-pointer"
              onClick={() => {
                setbarButton(!barButton);
                setShowMore(false);
              }}
            />
          )}
        </div>
        <div
          className={`nav-options text-white w-full justify-center   lg:w-[70%]  ${
            barButton ? "flex" : "hidden"
          } lg:flex`}
        >
          {/* {showMore ? ( */}
          <ul
            className={`w-[100%] p-3 flex flex-col  ${
              showMore ? "items-end" : ""
            } lg:flex-row lg:justify-end lg:gap-5 lg:items-center  lg:mr-5 lg:w-[100%]`}
          >
            {showMore ? (
              <>
                <Less
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                />
                <NavLink
                  title="Account"
                  link="/"
                  onClick={() => {
                    setbarButton(!barButton);
                    setShowMore(false);
                  }}
                />
                <NavLink
                  title="Contact"
                  link="/contact-us"
                  onClick={() => {
                    setbarButton(!barButton);
                    setShowMore(false);
                  }}
                />
              </>
            ) : (
              <>
                <NavLink
                  title="Digitizing"
                  link="/digitizing-patch"
                  onClick={() => {
                    setbarButton(!barButton);
                    setShowMore(false);
                  }}
                />
                <NavLink
                  title="Emboidered Patch"
                  link="/emboridreed-patch"
                  onClick={() => {
                    setbarButton(!barButton);
                    setShowMore(false);
                  }}
                />
                <NavLink
                  title="Leather Patch"
                  link="/leather-patch"
                  onClick={() => {
                    setbarButton(!barButton);
                    setShowMore(false);
                  }}
                />
                <NavLink
                  title="Sublimation Patch"
                  link="/sublimation-patch"
                  onClick={() => {
                    setbarButton(!barButton);
                    setShowMore(false);
                  }}
                />
                <NavLink
                  title=" PVC Patch"
                  link="/pvc-patch"
                  onClick={() => {
                    setbarButton(!barButton);
                    setShowMore(false);
                  }}
                />
                <More
                  onClick={() => {
                    setShowMore(!showMore);
                  }}
                />
              </>
            )}

            <li
              className="border-[1px] cursor-pointer  rounded-full px-5 py-2 hidden lg:flex items-center"
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
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ title, link, onClick }) => {
  return (
    <li
      className="hover:text-gray-400 cursor-pointer font-bold te lg:font-normal py-2"
      onClick={onClick}
    >
      <Link to={link}>{title}</Link>
    </li>
  );
};

const More = ({ onClick }) => {
  return (
    <li
      className="hover:text-gray-400 flex lg:hidden font-bold  lg:font-normal justify-between items-center cursor-pointer py-2"
      onClick={onClick}
    >
      {/* <Link to={link}>{title}</Link> */}
      <p>More</p>
      <FaGreaterThan />
    </li>
  );
};

const Less = ({ onClick }) => {
  return (
    <li
      className="hover:text-gray-400 w-[100%] justify-between flex flex-row lg:hidden font-bold te lg:font-normal cursor-pointer items-center py-2"
      onClick={onClick}
    >
      {/* <Link to={link}>{title}</Link> */}

      <FaLessThan color="" />
      <p className="ml-3">Less</p>
    </li>
  );
};

export default Navbar;

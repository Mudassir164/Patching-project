import React from "react";
import { Link } from "react-router-dom";
import LogInForm from "./LogInForm";

const LogInSection = () => {
  return (
    <section className="w-[100%] py-10 flex flex-col items-center justify-between">
      <LogInForm />
      <div className=" w-[100%] md:w-[40%]  p-2 ">
        <div className="flex flex-row w-[100%] justify-between">
          <p className="text-base font-bold text-gray-500 hover:text-blue-600 cursor-pointer">
            <Link to="/">Lost credentials? </Link>
          </p>
          <p className="hover:text-blue-600 text-gray-500  cursor-pointer">
            <Link to="/sign-up" className=" cursor-pointer">
              New Member?
              <span className="text-base font-bold  "> Get Started</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LogInSection;

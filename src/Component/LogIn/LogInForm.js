import React from "react";
import Form from "./Form";
import { Heading, Logo } from "./FormComponent";

const LogInForm = () => {
  return (
    <div className=" w-[100%] md:w-[40%] shadow-2xl rounded-xl px-5 py-10">
      <Logo />
      <Heading />
      <Form />
    </div>
  );
};

export default LogInForm;

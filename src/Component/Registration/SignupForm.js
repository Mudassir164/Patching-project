import React from "react";
import { Heading, Logo, UnderlineHeading } from "./RegistrationComponent";
import Form from "./Form";

const SignupForm = () => {
  return (
    <div className="w-full md:w-[70%] bg-white shadow-2xl rounded-xl py-5">
      <Logo />
      <Heading />
      <Form />
    </div>
  );
};

export default SignupForm;

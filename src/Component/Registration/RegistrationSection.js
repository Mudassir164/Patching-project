import React from "react";
import SignupForm from "./SignupForm";

const RegistrationSection = () => {
  return (
    <section className="w-[100%] py-10 flex flex-col items-center justify-between bg-slate-300">
      <SignupForm />
    </section>
  );
};

export default RegistrationSection;

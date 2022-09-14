import React from "react";
import Form from "../Form";
import Slider from "./Components/Slider";
import * as Yup from "yup";

const SliderAndForm = () => {
  const selectOptions = [
    "Embroidered Digitizing",
    "Embroidered Patch",
    "Leather Patch",
    "Sublimation Patch",
    "Vector Ilustration",
  ];
  const userQuote = {
    fullname: "",
    email: "",
    phone: "",
    country: "",
    file: [],
    Service: "",
    discription: "",
  };

  const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/png",
  ];
  const validationSchema = Yup.object({
    fullname: Yup.string()
      .trim()
      .min(3, "Invalid Name")
      .required("Name  is required"),
    email: Yup.string()
      .trim()
      .email("Invalid Email")
      .required("Email is required"),
    country: Yup.string()
      .trim()
      .min(3, "Invalid Country Name")
      .required("Country  is required"),
    Service:
      selectOptions &&
      Yup.string()
        .required("Please select a Service")
        .oneOf(selectOptions, "Please Select a Service"),
    phone: Yup.number().required("Phone number is required"),
    discription: Yup.string(),

    file: Yup.array()
      .min(1, "Files required")
      .test("FILE_SIZE", "Upload File is too large", (value) =>
        value.every((val) => val.size <= 1024 * 1024)
      )
      .test("fileFormat", "Unsupported Format", (value) =>
        value.every((val) => SUPPORTED_FORMATS.includes(val.type))
      ),
  });

  return (
    <section className="flex md:flex-row flex-col w-[100%] px-3 max-w-[85rem] my-0 mx-auto ">
      <div className="w-[100%] md:w-[50%] lg:w-[60%]  ">
        <Slider />
      </div>
      <div className="md:w-[50%] lg:w-[40%] w-[100%] pb-5 ">
        <Form
          SI={true}
          selectOptions={selectOptions}
          initialValues={userQuote}
          validationSchema={validationSchema}
          optionTitle="Select Service"
        />
      </div>
    </section>
  );
};

export default SliderAndForm;

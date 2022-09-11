import React, { useState } from "react";

import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import {
  Input,
  PreviewImage,
  SelectFile,
  SelectInput,
  TextArea,
} from "./InputComponents";

const Form = ({ HW, SI, selectOptions }) => {
  const userQuote = {
    fullname: "",
    email: "",
    phone: "",
    country: "",
    file: null,
    Service: "",
    discription: "",
  };
  const FILE_SIZE = 1024 * 1024;
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
    phone: Yup.number().required("Phone Number is required"),
    discription: Yup.string(),

    file: Yup.mixed()
      .nullable()
      .required("A file is required")
      .test(
        "FILE_SIZE",
        "Upload File is too large",
        (value) => !value || (value && value.size <= FILE_SIZE)
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => !value || (value && SUPPORTED_FORMATS.includes(value.type))
      ),
  });

  const onSubmitHandler = (values, actions) => {
    console.log(values);
  };

  return (
    <div className="flex flex-row flex-wrap p-5 justify-between bg-[#f4f7f8] rounded-lg">
      <h1 className="text-xl font-bold w-[100%]">Get A FREE Quote</h1>
      <Formik
        initialValues={userQuote}
        validationSchema={validationSchema}
        onSubmit={onSubmitHandler}
      >
        {({
          values,
          errors,
          handleBlur,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
        }) => {
          const {
            fullname,
            phone,
            email,
            country,
            Service,
            discription,
            file,
          } = values;
          console.log(values);

          return (
            <>
              <Input
                type="text"
                placeholder="Your Name *"
                onChange={handleChange("fullname")}
                value={fullname}
                error={touched.fullname && errors.fullname}
                onBlur={handleBlur("fullname")}
              />
              <Input
                type="tel"
                placeholder="Your Phone Number *"
                onChange={handleChange("phone")}
                value={phone}
                error={touched.phone && errors.phone}
                onBlur={handleBlur("phone")}
              />
              <Input
                type="email"
                placeholder="Your Email *"
                onChange={handleChange("email")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("email")}
              />
              <Input
                type="text"
                placeholder="Country *"
                onChange={handleChange("country")}
                value={country}
                error={touched.country && errors.country}
                onBlur={handleBlur("country")}
              />
              {HW && (
                <>
                  <Input
                    type="text"
                    placeholder="Width *"
                    onChange={handleChange("country")}
                    value={country}
                    error={touched.country && errors.country}
                    onBlur={handleBlur("country")}
                  />
                  <Input
                    type="text"
                    placeholder="Height *"
                    onChange={handleChange("country")}
                    value={country}
                    error={touched.country && errors.country}
                    onBlur={handleBlur("country")}
                  />
                </>
              )}
              <SelectFile
                multiple={true}
                type="file"
                onChange={(e) => {
                  setFieldValue("file", e.currentTarget.files[0]);
                }}
                accept="image/*"
                error={touched.file && errors.file}
                onBlur={handleBlur("file")}
              />
              {file && <PreviewImage file={file} />}
              {SI && (
                <>
                  <SelectInput
                    options={selectOptions}
                    onChange={handleChange("Service")}
                    value={Service}
                    error={touched.Service && errors.Service}
                    onBlur={handleBlur("Service")}
                  />
                </>
              )}
              <TextArea
                onChange={handleChange("discription")}
                value={discription}
              />
              <button
                className="w-[100%] p-5  mt-7 mr-2 bg-[#2babe2] hover:bg-blue-500 text-white text-base"
                onSubmit={!isSubmitting ? handleSubmit : null}
              >
                Get Quote
              </button>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;

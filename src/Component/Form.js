import React, { useState } from "react";

import { Formik, useFormik } from "formik";

import {
  Input,
  PreviewImage,
  SelectFile,
  SelectInput,
  TextArea,
} from "./InputComponents";

const Form = ({
  HW,
  SI,
  selectOptions,
  validationSchema,
  initialValues,
  ...props
}) => {
  const onSubmitHandler = (values, actions) => {
    console.log(values);
    alert(JSON.stringify(values));

    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <div className="flex flex-row flex-wrap p-5 justify-between bg-[#f4f7f8] rounded-lg">
      <h1 className="text-xl font-bold w-[100%]">Get A FREE Quote</h1>
      <Formik
        initialValues={initialValues}
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

          console.log(errors);
          // console.log(values.file);

          return (
            <>
              <Input
                type="text"
                placeholder="Your Name *"
                onChange={handleChange("fullname")}
                value={fullname}
                error={touched.fullname && errors.fullname}
                onBlur={handleBlur("fullname")}
                width="48%"
              />
              <Input
                type="tel"
                placeholder="Your Phone Number *"
                onChange={handleChange("phone")}
                value={phone}
                error={touched.phone && errors.phone}
                onBlur={handleBlur("phone")}
                width="48%"
              />
              <Input
                type="email"
                placeholder="Your Email *"
                onChange={handleChange("email")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("email")}
                width="48%"
              />
              <Input
                type="text"
                placeholder="Country *"
                onChange={handleChange("country")}
                value={country}
                error={touched.country && errors.country}
                onBlur={handleBlur("country")}
                width="48%"
              />
              {HW && (
                <>
                  <Input
                    type="text"
                    placeholder="Width *"
                    onChange={handleChange("width")}
                    value={values.width}
                    error={touched.width && errors.width}
                    onBlur={handleBlur("width")}
                    width="48%"
                  />
                  <Input
                    type="text"
                    placeholder="Height *"
                    onChange={handleChange("height")}
                    value={values.height}
                    error={touched.height && errors.height}
                    onBlur={handleBlur("height")}
                    width="48%"
                  />
                </>
              )}
              <SelectFile
                multiple={true}
                type="file"
                onChange={(e) => {
                  const getFiles = e.currentTarget.files;
                  setFieldValue("file", [...file, ...getFiles]);
                }}
                files={file}
                accept="image/*"
                error={touched.file && errors.file}
                onBlur={handleBlur("file")}
              />
              {file && (
                <div className="w-[100%] flex flex-row gap-2 flex-wrap items-center ">
                  {file.map((value, index) => (
                    <PreviewImage
                      file={value}
                      onClick={() => {
                        const a = file;
                        const updateFile = a.filter(
                          (f) => f.name !== value.name
                        );
                        setFieldValue("file", updateFile);
                      }}
                      key={`upload-img-${index}`}
                    />
                  ))}
                </div>
              )}
              {SI && (
                <>
                  <SelectInput
                    options={selectOptions}
                    onChange={handleChange("Service")}
                    value={Service}
                    error={touched.Service && errors.Service}
                    onBlur={handleBlur("Service")}
                    title={props.optionTitle}
                  />
                </>
              )}
              {props.ST && (
                <>
                  <SelectInput
                    options={props.selectOptions2}
                    onChange={handleChange("type")}
                    value={values.type}
                    error={touched.type && errors.type}
                    onBlur={handleBlur("type")}
                    title={props.optionTitle2}
                  />
                </>
              )}
              {props.IsQuantity && (
                <>
                  <Input
                    type="text"
                    placeholder="Quantity *"
                    onChange={handleChange("quantity")}
                    value={values.quantity}
                    error={touched.quantity && errors.quantity}
                    onBlur={handleBlur("quantity")}
                    width="100%"
                  />
                </>
              )}
              <TextArea
                onChange={handleChange("discription")}
                value={discription}
              />
              <button
                className="w-[100%] p-5  mt-7 mr-2 bg-[#2babe2] hover:bg-blue-500 text-white text-base"
                onClick={handleSubmit}
                type="submit"
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

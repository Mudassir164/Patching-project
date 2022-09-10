import { Formik } from "formik";
import React from "react";
import { TextArea, Input } from "./ContactUsValidationScheema";
import { userQuote, validationSchema } from "./ContactUsValidationScheema";
import { colors } from "../../Constant/Theme";

const ContactUsForm = ({ ip }) => {
  const onSubmitHandler = (values, actions) => {
    console.log(values);
  };

  return (
    <div className="w-[100%] border p-2 rounded-lg">
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
        }) => {
          const {
            fullname,
            phone,
            email,
            country,
            Service,
            discription,
            choseFile,
          } = values;

          return (
            <>
              <Input
                type="text"
                placeholder="Name *"
                onChange={handleChange("fullname")}
                value={fullname}
                error={touched.fullname && errors.fullname}
                onBlur={handleBlur("fullname")}
              />
              <Input
                type="Email"
                placeholder="Your Email *"
                onChange={handleChange("email")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("email")}
              />
              <Input
                type="tel"
                placeholder="Phone *"
                onChange={handleChange("phone")}
                value={phone}
                error={touched.phone && errors.phone}
                onBlur={handleBlur("phone")}
              />

              <Input
                type="text"
                placeholder="Country..."
                onChange={handleChange("country")}
                value={country}
                error={touched.country && errors.country}
                onBlur={handleBlur("country")}
              />
              <div className="py-2 px-1 flex flex-row ">
                <p>Existing Customer ?</p>
                <div className="ml-5">
                  <input
                    type="radio"
                    value="Yes"
                    name="picked"
                    onChange={handleChange("picked")}
                  />
                  Yes
                </div>
                <div className="ml-5">
                  <input
                    type="radio"
                    value="No"
                    name="picked"
                    onChange={handleChange("picked")}
                  />{" "}
                  No
                </div>
              </div>

              <TextArea
                onChange={handleChange("discription")}
                value={discription}
              />
              <button
                className={`p-2  mt-7 mr-2 rounded-lg ${colors.bgSecondry} hover:bg-blue-500 text-white text-base`}
                onClick={handleSubmit}
                type="submit"
              >
                Send Message
              </button>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default ContactUsForm;
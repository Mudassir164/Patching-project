import { Formik } from "formik";
import React, { useState } from "react";
import {
  initialValues,
  Input,
  PasswordInput,
  validationSchema,
} from "./FormComponent";
import { colors } from "../../Constant/Theme";
import { UnderlineHeading } from "./RegistrationComponent";

const Form = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="w-[100%]  py-2 px-10 rounded-lg flex flex-wrap flex-row justify-between gap-x-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={onSubmitHandler}
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
          const { email, password } = values;

          return (
            <>
              <UnderlineHeading title="Registration details" />
              <Input
                type="Text"
                placeholder="Full Name "
                onChange={handleChange("fullname")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("fullname")}
                title="Full Name"
                width="45%"
              />
              <Input
                type="Email"
                placeholder="Your Email *"
                onChange={handleChange("email")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("email")}
                title="Email"
                width="45%"
              />
              <Input
                type="Text"
                placeholder="Company Name"
                onChange={handleChange("companyName")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("companyName")}
                title="Company Name"
                width="100%"
              />

              <Input
                type="Email"
                placeholder="Company Email "
                onChange={handleChange("companyEmail")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("companyEmail")}
                title="Company Email"
                width="45%"
              />
              <Input
                type="Text"
                placeholder="Phone"
                onChange={handleChange("phone")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("phone")}
                title="Phone/Mobile"
                width="45%"
              />
              <Input
                type="Text"
                placeholder="Street Address"
                onChange={handleChange("streetAddress")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("streetAddress")}
                title="Street Address"
                width="100%"
              />
              <Input
                type="Text"
                placeholder="Country "
                onChange={handleChange("country")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("country")}
                title="Country"
                width="45%"
              />
              <Input
                type="Text"
                placeholder="Postal/Zip Code"
                onChange={handleChange("postal")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("postal")}
                title="Postal/Zip Code"
                width="45%"
              />
              <UnderlineHeading title="Login details" />

              <Input
                type="Text"
                placeholder="Username"
                onChange={handleChange("userName")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("userName")}
                title="Username"
                width="100%"
              />

              <PasswordInput
                type={!passwordShown ? "Text" : "Password"}
                placeholder="Password"
                onChange={handleChange("password")}
                value={password}
                error={touched.password && errors.password}
                onBlur={handleBlur("password")}
                title="Password"
                onclick={togglePassword}
                shown={passwordShown}
                width="45%"
              />
              <PasswordInput
                type={!passwordShown ? "Text" : "Password"}
                placeholder="Confirm Password"
                onChange={handleChange("Confirm Password")}
                value={password}
                error={touched.password && errors.password}
                onBlur={handleBlur("confirmPassword")}
                title="Confirm Password"
                onclick={togglePassword}
                shown={passwordShown}
                width="45%"
              />
              <button
                className={`px-6 py-2 rounded-lg mt-5 text-white ${colors.bgSecondry}`}
              >
                Login
              </button>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;

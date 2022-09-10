import { Formik } from "formik";
import React, { useState, useMemo } from "react";
import {
  initialValues,
  Input,
  PasswordInput,
  SelectInput,
  validationSchema,
} from "./FormComponent";
import { colors } from "../../Constant/Theme";
import { UnderlineHeading } from "./RegistrationComponent";
import countryList from "react-select-country-list";

const Form = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

  const options = useMemo(() => countryList().getLabels(), []);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const toggleConfirmPassword = () => {
    setConfirmPasswordShown(!confirmPasswordShown);
  };
  const onSubmitHandler = (values, actions) => {
    console.log(values);
  };
  return (
    <div className="w-[100%]  py-2 px-10 rounded-lg flex flex-wrap flex-row justify-between gap-x-4">
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
        }) => {
          const {
            fullname,
            email,
            companyName,
            companyEmail,
            phone,
            streetAddress,
            country,
            postal,
            userName,
            password,
            confirmPassword,
          } = values;

          return (
            <>
              <UnderlineHeading title="Registration details" />
              <Input
                type="Text"
                placeholder="Full Name "
                onChange={handleChange("fullname")}
                value={fullname}
                error={touched.fullname && errors.fullname}
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
                value={companyName}
                error={touched.email && errors.email}
                onBlur={handleBlur("companyName")}
                title="Company Name"
                width="100%"
              />

              <Input
                type="Email"
                placeholder="Company Email "
                onChange={handleChange("companyEmail")}
                value={companyEmail}
                error={touched.companyEmail && errors.companyEmail}
                onBlur={handleBlur("companyEmail")}
                title="Company Email"
                width="45%"
              />
              <Input
                type="Text"
                placeholder="Phone"
                onChange={handleChange("phone")}
                value={phone}
                error={touched.phone && errors.phone}
                onBlur={handleBlur("phone")}
                title="Phone/Mobile"
                width="45%"
              />
              <Input
                type="Text"
                placeholder="Street Address"
                onChange={handleChange("streetAddress")}
                value={streetAddress}
                error={touched.email && errors.email}
                onBlur={handleBlur("streetAddress")}
                title="Street Address"
                width="100%"
              />

              <SelectInput
                options={options}
                onChange={handleChange("country")}
                value={country}
                error={touched.country && errors.country}
                onBlur={handleBlur("country")}
                title="Country"
              />
              <Input
                type="Text"
                placeholder="Postal/Zip Code"
                onChange={handleChange("postal")}
                value={postal}
                error={touched.postal && errors.postal}
                onBlur={handleBlur("postal")}
                title="Postal/Zip Code"
                width="45%"
              />
              <UnderlineHeading title="Login details" />

              <Input
                type="Text"
                placeholder="Username"
                onChange={handleChange("userName")}
                value={userName}
                error={touched.userName && errors.userName}
                onBlur={handleBlur("userName")}
                title="Username"
                width="100%"
              />

              <PasswordInput
                type={passwordShown ? "Text" : "Password"}
                placeholder="Password"
                onChange={handleChange("password")}
                value={password}
                error={touched.password && errors.password}
                onBlur={handleBlur("password")}
                title="Password"
                onclick={togglePassword}
                shown={!passwordShown}
                width="45%"
              />
              <PasswordInput
                type={confirmPasswordShown ? "Text" : "Password"}
                placeholder="Confirm Password"
                onChange={handleChange("confirmPassword")}
                value={confirmPassword}
                error={touched.confirmPassword && errors.confirmPassword}
                onBlur={handleBlur("confirmPassword")}
                title="Confirm Password"
                onclick={toggleConfirmPassword}
                shown={!confirmPasswordShown}
                width="45%"
              />
              <button
                className={`px-6 py-2 rounded-lg mt-5 text-white ${colors.bgSecondry}`}
                onClick={handleSubmit}
                type="submit"
              >
                Register
              </button>
            </>
          );
        }}
      </Formik>
    </div>
  );
};

export default Form;

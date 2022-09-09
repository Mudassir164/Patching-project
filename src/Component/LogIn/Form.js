import { Formik } from "formik";
import React, { useState } from "react";
import {
  initialValues,
  Input,
  validationSchema,
  PasswordInput,
} from "../LogIn/ValidationScheema";
import { colors } from "../../Constant/Theme";

const Form = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="w-[100%]  p-2 rounded-lg">
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
              <Input
                type="Email"
                placeholder="Your Email *"
                onChange={handleChange("email")}
                value={email}
                error={touched.email && errors.email}
                onBlur={handleBlur("email")}
                title="Email"
              />
              <PasswordInput
                type={!passwordShown ? "Text" : "Password"}
                placeholder="Password *"
                onChange={handleChange("password")}
                value={password}
                error={touched.password && errors.password}
                onBlur={handleBlur("password")}
                title="Password"
                onclick={togglePassword}
                shown={passwordShown}
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

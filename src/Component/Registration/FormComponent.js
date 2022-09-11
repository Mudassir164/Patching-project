import * as Yup from "yup";
import { BiShow, BiHide } from "react-icons/bi";
import countryList from "react-select-country-list";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const countries = countryList().getLabels();

export const initialValues = {
  fullname: "",
  email: "",
  password: "",
  companyName: "",
  companyEmail: "",
  phone: "",
  streetAddress: "",
  country: "",
  postal: "",
  userName: "",

  confirmPassword: "",
};

export const validationSchema = Yup.object({
  fullname: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Please enter valid name")
    .min(3, "Please enter valid name")
    .max(40)
    .required("Name is Required"),

  email: Yup.string()
    .trim()
    .email("Invalid Email")
    .required("Email is required"),
  companyEmail: Yup.string()
    .trim()
    .email("Invalid Company Email")
    .required("Company Email is required"),

  companyName: Yup.string()
    .trim()
    .min(3, "Invalid Company Name")
    .required("Company Name  is required"),
  country:
    countries &&
    Yup.string()
      .required("Please select a Service")
      .oneOf(countries, "Please Select a Service"),

  password: Yup.string()
    .trim()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),

  confirmPassword: Yup.string()
    .trim()
    .required("Confirm Password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must be match"),

  phone: Yup.string()
    .trim()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is Required"),

  streetAddress: Yup.string().trim().required("Address is Required"),

  postal: Yup.string()
    .length(5)
    .matches(/^[0-9]{5}/)
    .required("Postal code is required"),
});

export const Input = ({ title, width, error, ...props }) => {
  return (
    <div className={`w-[100%] md:w-[${width}] mb-2   rounded`}>
      <div className="w-[100%] h-6 mb-1 ">
        <p className=" text-black mr-2 text-xs md:text-base flex flex-row items-center ">
          <span className="text-red-500 text-xl">* </span>
          {title} :
        </p>
      </div>
      <input
        {...props}
        className={`w-[100%] py-1 px-3  rounded-md border-2 focus:outline-none ${
          error
            ? "border-red-500"
            : "focus:border-blue-500 hover:border-blue-500"
        }`}
      />
      <div className="w-[100%]  ">
        <p className=" text-red-500 mr-2 text-xs ">{error}</p>
      </div>
    </div>
  );
};

export const PasswordInput = ({
  title,
  shown,
  width,
  onclick,
  error,
  ...props
}) => {
  return (
    <div className={`w-[100%] md:w-[${width}] mb-2  rounded`}>
      <div className="w-[100%] h-6 mb-1">
        <p className=" text-black mr-2 text-xs md:text-base flex flex-row items-center ">
          <span className="text-red-500 text-xl">* </span>
          {title} :
        </p>
      </div>
      <div className="w-[100%] flex flex-row relative">
        <input
          {...props}
          className={`w-[100%] py-1 px-3  rounded-md border-2 focus:outline-none ${
            error
              ? "border-red-500"
              : "focus:border-blue-500 hover:border-blue-500"
          }`}
        />
        {shown ? (
          <BiHide
            onClick={onclick}
            size={20}
            className="absolute right-2 cursor-pointer  top-2"
          />
        ) : (
          <BiShow
            onClick={onclick}
            size={20}
            className="absolute right-2 cursor-pointer  top-2"
          />
        )}
      </div>
      <div className="w-[100%] h-6 ">
        <p className=" text-red-500 mr-2 text-xs ">{error}</p>
      </div>
    </div>
  );
};

export const SelectInput = ({ title, error, options, ...props }) => {
  return (
    <div className="  w-[100%] md:w-[45%]  mb-2  rounded">
      <div className="w-[100%] h-6 mb-1 ">
        <p className=" text-black mr-2 text-xs md:text-base flex flex-row items-center ">
          <span className="text-red-500 text-xl">* </span>
          {title} :
        </p>
      </div>
      <select
        name="cars"
        id="cars"
        className={`w-[100%] py-1 px-3  rounded-md border-2 focus:outline-none ${
          error
            ? "border-red-500"
            : "focus:border-blue-500 hover:border-blue-500"
        }`}
        {...props}
      >
        <option value="Select">Select Country</option>
        {options.map((op, index) => (
          <option value={op} key={`i${index}`}>
            {op}
          </option>
        ))}
      </select>
      <div className="w-[100%]  ">
        <p className=" text-red-500 mr-2 text-xs ">{error}</p>
      </div>
    </div>
  );
};

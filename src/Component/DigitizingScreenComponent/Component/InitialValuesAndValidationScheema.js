import * as Yup from "yup";

export const userQuote = {
  fullname: "",
  email: "",
  phone: "",
  country: "",
  file: [],
  // Service: "",
  height: "",
  width: "",
  discription: "",
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
export const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, "Invalid Name")
    .required("Name  is required"),
  email: Yup.string()
    .trim()
    .email("Invalid Email")
    .required("Email is required"),
  phone: Yup.string()
    .trim()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone Number is Required"),
  height: Yup.string().test(
    "len",
    "Must be exactly 5 characters",
    (val) => val.length === 5
  ),
  width: Yup.string().test(
    "len",
    "Must be exactly 5 characters",
    (val) => val.length === 5
  ),
  country: Yup.string()
    .trim()
    .min(3, "Invalid Country Name")
    .required("Country  is required"),
  // Service:
  //   selectOptions &&
  //   Yup.string()
  //     .required("Please select a Service")
  //     .oneOf(selectOptions, "Please Select a Service"),
  // phone: Yup.number().required("Phone number is required"),
  // discription: Yup.string(),

  file: Yup.array()
    .min(1, "Files required")
    .test("FILE_SIZE", "Upload File is too large", (value) =>
      value.every((val) => val.size <= 1024 * 1024)
    )
    .test("fileFormat", "Unsupported Format", (value) =>
      value.every((val) => SUPPORTED_FORMATS.includes(val.type))
    ),
});

import * as Yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const userQuote = {
  fullname: "",
  email: "",
  phone: "",
  country: "",
  file: [],
  Service: "",
  height: "",
  width: "",
  discription: "",
  quantity: "",
};

export const selectOptions = [
  "Plain Sew On",
  "Heat Seal Iron-On",
  "Velcro Hook and Loop",
];
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
  height: Yup.string().trim(),
  width: Yup.string().trim(),

  quantity: Yup.number()

    .typeError("you must specify a number")
    .min(1, "Min value 1")
    .max(30, "Max value 30."),

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

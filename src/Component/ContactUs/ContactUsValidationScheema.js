import * as Yup from "yup";

export const userQuote = {
  fullname: "",
  email: "",
  phone: "",
  country: "",
  "Existing Customer": "",
  message: "",
};

export const validationSchema = Yup.object({
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

  phone: Yup.number().required("Phone Number is required"),
  message: Yup.string(),
});

export const TextArea = (props) => {
  return (
    <div className="  w-[100%]  mt-7 mr-2 rounded">
      <textarea
        id="comments"
        name="comments"
        rows="2"
        className="w-[100%] p-3 bg-[#e8eeef] rounded-md"
        {...props}
        placeholder="Message *"
      ></textarea>
    </div>
  );
};

export const Input = (props) => {
  return (
    <div className="   w-[100%]  mt-3 rounded ">
      <div className="w-[100%] h-6 ">
        <p className="text-right text-red-700 mr-2 md:text-xs lg:text-base">
          {props.error}
        </p>
      </div>
      <input
        {...props}
        className="w-[100%] p-2 bg-[#e8eeef] rounded-md focus:outline-none focus:bg-slate-300"
      />
    </div>
  );
};

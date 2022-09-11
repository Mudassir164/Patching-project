import * as Yup from "yup";
import { BiShow, BiHide } from "react-icons/bi";

export const initialValues = {
  email: "",
  password: "",
};

export const validationSchema = Yup.object({
  email: Yup.string()
    .trim()
    .email("Invalid Email")
    .required("Email is required"),
  password: Yup.string().required("No password provided."),
});

export const Input = ({ title, error, ...props }) => {
  return (
    <div className="   w-[100%]  mt-3 rounded ">
      <div className="w-[100%] h-6 mb-3">
        <p className=" text-black mr-2 text-xs md:text-xl">
          <span className="text-red-500 text-xl">* </span>
          {title}
        </p>
      </div>
      <input
        {...props}
        className="w-[100%] p-2 bg-[#e8eeef] rounded-md focus:outline-none focus:bg-slate-300"
      />
      <div className="w-[100%] h-6 ">
        <p className=" text-red-500 mr-2 text-xs ">{error}</p>
      </div>
    </div>
  );
};

export const PasswordInput = ({ title, show, error, onclick, ...props }) => {
  return (
    <div className="   w-[100%]  mt-3 rounded ">
      <div className="w-[100%] h-6 mb-3">
        <p className=" text-black mr-2 text-xs md:text-xl">
          <span className="text-red-500 text-xl">* </span>
          {title}
        </p>
      </div>
      <div className="w-[100%] flex flex-row relative">
        <input
          {...props}
          className="w-[100%] p-2 bg-[#e8eeef] rounded-md focus:outline-none focus:bg-slate-300"
        />
        {show ? (
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

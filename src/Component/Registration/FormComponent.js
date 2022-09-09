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

export const Input = (props) => {
  return (
    <div className={`w-[100%] md:w-[${props.width}] mb-2   rounded`}>
      <div className="w-[100%] h-6 mb-1 ">
        <p className=" text-black mr-2 text-xs md:text-base flex flex-row items-center ">
          <span className="text-red-500 text-xl">* </span>
          {props.title} :
        </p>
      </div>
      <input
        {...props}
        className="w-[100%] py-1 px-3  rounded-md border-2 focus:outline-none focus:border-blue-500 hover:border-blue-500"
      />
      <div className="w-[100%]  ">
        <p className=" text-red-500 mr-2 text-xs ">{props.error}</p>
      </div>
    </div>
  );
};

export const PasswordInput = (props) => {
  return (
    <div className={`w-[100%] md:w-[${props.width}] mb-2  rounded`}>
      <div className="w-[100%] h-6 mb-1">
        <p className=" text-black mr-2 text-xs md:text-base flex flex-row items-center ">
          <span className="text-red-500 text-xl">* </span>
          {props.title} :
        </p>
      </div>
      <div className="w-[100%] flex flex-row relative">
        <input
          {...props}
          className="w-[100%] py-1 px-3  rounded-md border-2 focus:outline-none focus:border-blue-500 hover:border-blue-500"
        />
        {props.shown ? (
          <BiHide
            onClick={props.onclick}
            size={20}
            className="absolute right-2 cursor-pointer  top-2"
          />
        ) : (
          <BiShow
            onClick={props.onclick}
            size={20}
            className="absolute right-2 cursor-pointer  top-2"
          />
        )}
      </div>
      <div className="w-[100%] h-6 ">
        <p className=" text-red-500 mr-2 text-xs ">{props.error}</p>
      </div>
    </div>
  );
};

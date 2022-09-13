import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

export const Input = (props) => {
  return (
    <div className=" md:w-[48%]  w-[100%]  mt-3 rounded ">
      <div className="w-[100%] h-8">
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
export const SelectInput = (props) => {
  return (
    <div className="  w-[100%]  mt-7 mr-2 ">
      <p className="text-right text-red-700 mr-2">{props.error}</p>
      <select
        name="cars"
        id="cars"
        className="w-[100%] p-2 bg-[#e8eeef] rounded-md"
        {...props}
      >
        <option value="Select">Select Service *</option>
        {props.options.map((op, index) => (
          <option value={op} key={`i${index}`}>
            {op}
          </option>
        ))}
      </select>
    </div>
  );
};
export const TextArea = (props) => {
  return (
    <div className="  w-[100%]  mt-7 mr-2 rounded">
      <textarea
        id="comments"
        name="comments"
        rows="2"
        className="w-[100%] p-3 bg-[#e8eeef] rounded-md"
        {...props}
        placeholder="Any additional information that will help us understanding your query in better way"
      ></textarea>
    </div>
  );
};
export const SelectFile = ({ files, ...props }) => {
  return (
    <div className="  w-[100%]  mt-7 mr-2 ">
      <p className="text-right text-red-700 mr-2 ">{props.error}</p>
      <label htmlFor="myfile"></label>
      <div className="w-[100%] bg-[#e8eeef] flex flex-row items-center gap-5">
        <input
          id="myfile"
          name="myfile"
          title=" "
          className="w-[115px] p-2 bg-[#e8eeef] overflow-hidden rounded-md"
          {...props}
        />
        <p>{files.length != 0 ? `${files.length} files` : "No File Chosen"}</p>
      </div>
    </div>
  );
};

export const PreviewImage = ({ file, onClick }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  // console.log(reader);
  return (
    <>
      {preview ? (
        <div className="relative  w-20">
          <img src={preview} alt="Preview Image" />

          <ImCancelCircle
            className="absolute top-0 cursor-pointer right-1  text-white bg-black rounded-full w-4 h-4 text-center flex items-center justify-center"
            onClick={onClick}
          />
        </div>
      ) : (
        "..Loading"
      )}
    </>
  );
};

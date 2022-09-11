import React, { useState } from "react";

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
export const SelectFile = (props) => {
  return (
    <div className="  w-[100%]  mt-7 mr-2 ">
      <p className="text-right text-red-700 mr-2 ">{props.error}</p>
      <label htmlFor="myfile"></label>
      <input
        id="myfile"
        name="myfile"
        className="w-[100%] p-2 bg-[#e8eeef] rounded-md"
        {...props}
      />
    </div>
  );
};

export const PreviewImage = ({ file }) => {
  const [preview, setPreview] = useState(null);
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreview(reader.result);
  };
  return (
    <div className="w-[100%] h-100">
      {preview ? (
        <div className="relative  w-20">
          <img src={preview} alt="Preview Image" className="w-20" />
          <button
            className="absolute top-0 right-1 bg-black text-white rounded-full w-5 h-5 text-center flex items-center justify-center"
            onClick={() => {
              console.log(file);
            }}
          >
            X
          </button>
        </div>
      ) : (
        "..Loading"
      )}
    </div>
  );
};

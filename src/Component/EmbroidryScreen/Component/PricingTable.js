import React from "react";

const PricingTable = ({ list, heading }) => {
  return (
    <div className=" w-[100%] lg:w-[48%] mb-4">
      <h3 className="text-2xl font-bold text-center mb-5"> {heading}</h3>
      <table className="w-[100%] ">
        <FirstRow colData={list.headingRow} />
        {list.otherRow.map((value, index) => (
          <OtherRow
            colData={value}
            key={`other-${index}`}
            bgColor={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
          />
        ))}
      </table>
    </div>
  );
};

const FirstRow = ({ colData }) => {
  return (
    <tr className="bg-blue-500  ">
      {colData.map((value, index) => (
        <td
          className="py-2 sm:pl-2 text-white border border-gray-500 sm:text-center text-[10px] sm:text-sm font-bold"
          key={`first-row-col-${index}`}
        >
          {value}
        </td>
      ))}
    </tr>
  );
};

const OtherRow = ({ colData, bgColor }) => {
  return (
    <tr className={`${bgColor} hover:bg-gray-300`}>
      {colData.map((value, index) =>
        index === 0 ? (
          <td
            className="bg-blue-500 w-[16.6%] border border-gray-500 py-2 sm:pl-2 sm:text-center text-white text-[10px] sm:text-sm font-bold"
            key={`first-row-col-${index}`}
          >
            {value}
          </td>
        ) : (
          <td
            className="border border-gray-500 w-[16.6%] py-2 sm:pl-2 text-[10px] sm:text-sm font-bold"
            key={`first-row-col-${index}`}
          >
            $ {value}
          </td>
        )
      )}
    </tr>
  );
};

export default PricingTable;

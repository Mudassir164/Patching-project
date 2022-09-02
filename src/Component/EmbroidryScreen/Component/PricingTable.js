import React from "react";

const PricingTable = ({ list, heading }) => {
  return (
    <div className=" w-[100%] lg:w-[48%] mb-4">
      <h3 className="text-2xl font-bold text-center mb-5"> {heading}</h3>
      <table className="w-[100%] ">
        <FirstRow colData={list.headingRow} />
        {list.otherRow.map((value, index) => (
          <OtherRow colData={value} key={`other-${index}`} />
        ))}
      </table>
    </div>
  );
};

const FirstRow = ({ colData }) => {
  return (
    <tr className="bg-blue-500 ">
      {colData.map((value, index) => (
        <td
          className="py-2 pl-2 text-white border-2 border-gray-500 text-center text-md font-bold"
          key={`first-row-col-${index}`}
        >
          {value}
        </td>
      ))}
    </tr>
  );
};

const OtherRow = ({ colData }) => {
  return (
    <tr className="bg-white">
      {colData.map((value, index) =>
        index === 0 ? (
          <td
            className="bg-blue-500 w-[16.6%] border-2 border-gray-500 py-2 pl-2 text-center text-white text-md font-bold"
            key={`first-row-col-${index}`}
          >
            {value}
          </td>
        ) : (
          <td
            className="border-2 border-gray-500 w-[16.6%] py-2 pl-2 text-md font-bold"
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

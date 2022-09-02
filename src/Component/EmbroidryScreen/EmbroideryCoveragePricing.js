import React from "react";
import PricingTable from "./Component/PricingTable";
import "./Style.css";

const PricingList = {
  headingRow: ["Size (in.)", "100", "200", "300", "500", "1000"],
  otherRow: [
    [`2" - 2.75"`, "2.50", "2.25", "2.00", "1.75", "1.50"],
    [`3" - 3.75"`, "3.50", "3.25", "3.00", "2.75", "2.50"],
    [`4" - 4.75"`, "4.50", "4.25", "4.00", "3.75", "3.50"],
    [`5" - 5.75"`, "5.50", "5.25", "5.00", "4.75", "4.50"],
    [`6" - 6.75"`, "6.50", "6.25", "6.00", "5.75", "5.50"],
    [`7" - 7.75"`, "7.50", "7.25", "7.00", "6.75", "6.50"],
  ],
};

const EmbroideryCoveragePricing = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 pb-4  flex flex-col relative  bg-gray-50 ">
      <div className="w-[100%] flex flex-col justify-center text-center mb-5  items-center section-break">
        <h1 className="text-4xl text-black font-bold">
          Embroidery Coverage Pricing
        </h1>
        <p className="text-lg text-black text-center ">
          Our custom patches pricing is based on the amount of embroidery that
          covers the patch. We commonly create embroidered patches with 50%
          coverage and 100% coverage. Find out how much yours requires or give
          us a call and we can help you determine it.
        </p>
      </div>
      <div className="w-[100%] flex flex-row flex-wrap py-0 justify-between  items-center max-w-[85rem] my-0 mx-auto ">
        <PricingTable list={PricingList} heading="50% Coverage" />
        <PricingTable list={PricingList} heading="50% Coverage" />
      </div>
      <div>
        <h6 className="text-xl font-bold">
          Price includes up to eight standard embroidery colors.
        </h6>
        <ul className="list-disc ml-5">
          <li className="mt-2">
            On the rare occasion that your job requires more than eight colors,
            each additional color is 10 cents per color.
          </li>
          <li className="mt-2">
            For example, 10 colors would cost an additional 20 cents per piece
            over the base price.
          </li>
          <li className="mt-2">
            For metallic threads, add 20% to the base price per patch.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EmbroideryCoveragePricing;

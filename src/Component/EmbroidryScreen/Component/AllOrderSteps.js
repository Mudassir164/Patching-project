import React from "react";

import {
  FaShirtsinbulk,
  FaTextHeight,
  FaUsers,
  FaFileImage,
  FaList,
  FaRegThumbsUp,
  FaClock,
  FaPencilAlt,
  FaPaw,
  FaRegLightbulb,
  FaDollarSign,
  FaTruckMoving,
} from "react-icons/fa";
import OrderStepBox from "./OrderStepBox";

const FeatureBoxDetail = [
  {
    icon: <FaRegLightbulb size={50} className="text-white" />,
    title: "Discount on Bulk Orders",
    detail:
      "We can provide you a handsome discount on bulk orders with our great quality. Please contact us for details.",
  },

  {
    icon: <FaClock size={50} className="text-white" />,
    title: "Get a Free Quote",
    detail:
      "Once you let us know the quantity, type and required delivery time for your patches. We will send you a price quote and delivery time. Patch order can be just 1 piece.",
  },
  {
    title: "Sample Patch Approval",
    detail:
      "We will e-mail you a sample (original) picture of the patch. You can request unlimited edits until you are 100% satisfied with the sample, or approve it for production.",
    icon: <FaRegThumbsUp size={50} className="text-white" />,
  },

  {
    icon: <FaDollarSign size={50} className="text-white" />,
    title: "Payment Approval",
    detail:
      "As soon as invoice and payment terms are approved, we will begin your order. Our production staff will take over and ensure that your custom patch will be produced on time and within budget.",
  },
  {
    icon: <FaTruckMoving size={50} className="text-white" />,
    title: "Super Fast Delivery",
    detail:
      "Your patches will be shipped out to you as soon as they're finished, quality controlled & packaged. We make sure that your patches are of the highest quality and are sent to you in time.",
  },
];

const AllOrderSteps = () => {
  return (
    <div className="w-[100%] flex flex-row flex-wrap py-0 justify-center  items-center max-w-[85rem] my-0 mx-auto border-red-500">
      {FeatureBoxDetail.map((value, index) => (
        <OrderStepBox
          icon={value.icon}
          title={value.title}
          detail={value.detail}
        />
      ))}
    </div>
  );
};

export default AllOrderSteps;

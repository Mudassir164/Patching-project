import React from "react";
import FeatureBox from "./FeatureBox";
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
} from "react-icons/fa";

const FeatureBoxDetail = [
    {
        title: "100% Quality Assurance",
        detail:
          "With the help of our expert designers we give 100% quality assurance by double checking the quality of each order.",
        icon: <FaRegThumbsUp size={50} className='icon'/>,
      },
 
 
  
  {
    icon: <FaList size={50} className='icon'/>,
    title:'Discount on Bulk Orders',
    detail:'We can provide you a handsome discount on bulk orders with our great quality. Please contact us for details.'
  },
  
  {
    icon: <FaClock size={50} className='icon'/>,
    title:'Fastest Turnaround',
    detail:'Our normal turnaround time is 4-5 hours, if you need any rush order we will do in 2-4 hours without any extra charge.'
  },
  {
    icon: <FaPencilAlt size={50} className='icon'/>,
    title:'Edit / Revision Free',
    detail:'Small edits are totally free from us. And revisions are also being provided free to all of our new and old customers.'
  },
  {
    icon: <FaFileImage size={50} className='icon'/>,
    title:'All Formats Available',
    detail:'We normally provide BMP, DST, PDF & EMB but if you need any other file format i.e CND, PXF, PES etc. We can also provide those.'
  },
  {
    icon: <FaUsers size={50} className='icon'/>,
    title:'365 Days Support',
    detail:'Our professional customer support team is available and ready to serve you 24/7 via call or email. We are also available via live chat.'
  },
  {
    icon: <FaTextHeight size={50} className='icon'/>,
    tile:'Small Text Digitizing',
    detail:'Our digitizers are expert in small text digitizing. We have more than 40+ designer who are able to make small text digitizing for you.'
  },
  
  {
    title: "Applique Digitizing",
        detail:'Our professional team is also expert in Applique digitzing for all kind of fabric, you just need to try our service first.',
    icon: <FaShirtsinbulk size={50} className='icon'/>,
  },
  { title:'Animal Digitizing',
    detail:'Some customers like to get their pet digitized, not everyone or every company is expert in animal digitizing, but WE ARE.',
    icon: <FaPaw size={50} className='icon'/>,
  },
];

const AllFeatures = () => {
  return (
    <div className="w-[100%] flex flex-row flex-wrap justify-between border-red-500">
      {FeatureBoxDetail.map((value, index) => (
        <FeatureBox icon={value.icon} title={value.title} detail={value.detail} />
      ))}
    </div>
  );
};

export default AllFeatures;

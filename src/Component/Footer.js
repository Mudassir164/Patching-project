import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import Paypal from "../Assets/paypal_and_cards.jpg";
import { Link } from "react-router-dom";

const Services = [
  {
    title: "Embroidery Digitizing",
    link: "/digitizing-patch",
  },
  {
    title: "Vectors",
    link: "/sublimation-patch",
  },
  {
    title: "PVC / Rubber Patch",
    link: "/pvc-patch",
  },
  {
    title: "Embroidered Patch",
    link: "/emboridreed-patch",
  },
];

const PrivacyPolicy = [
  {
    title: "Tips",

    link: "/",
  },
  {
    title: "Terms and Conditions",
    link: "/",
  },
  {
    title: "Copyright Policy",
    link: "/",
  },
  {
    title: "Refund Policy",
    link: "/",
  },
];
const Company = [
  {
    title: "Login-Register",

    link: "/",
  },
  {
    title: "About Us",
    link: "/",
  },
  {
    title: "Pay Using Card",
    link: "/",
  },
  {
    title: "Staff Login",
    link: "/",
  },
];
const Footer = () => {
  return (
    <section className="flex w-[100%] flex-row justify-between shrink-0 max-w-[85rem] my-0 mx-auto flex-wrap p-5 md:p-14 ">
      <FooterContent title="Company" ContentList={Company} />
      <FooterContent title="Services" ContentList={Services} />
      <FooterContent title="Policy and Tip" ContentList={PrivacyPolicy} />
      <Address title="Get in touch" />

      <div className="w-[100%] sm:w-[30%] lg:w-[18%]  flex flex-col p-3 ">
        <img src={Paypal} className="w-[70%]" />
      </div>
    </section>
  );
};

const FooterContent = ({ title, ContentList }) => {
  return (
    <div className="w-[48%] sm:w-[30%] lg:w-[18%]  flex flex-col p-3 ">
      <h4 className="text-[#798093] text-lg font-bold mb-1">{title}</h4>
      <ul>
        {ContentList.map((value, index) => (
          <li className="text-[#212121] mb-1 hover:text-[blue]">
            <Link to={value.link}>{value.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Address = ({ title, ContentList }) => {
  return (
    <div className=" w-[48%] min-w-[187px] sm:w-[30%] lg:w-[18%] flex flex-col p-3">
      <h4 className="text-[#798093] text-lg font-bold mb-1">{title}</h4>
      <ul>
        <li>
          <a
            href="#"
            className="flex flex-row items-center text-gray-200 hover:text-white"
          >
            <BsFillTelephoneFill className="text-gray-600 " size={20} />
            <p className=" text-base ml-2 font-bold text-blue-500">
              +92312-3456789
            </p>
          </a>
        </li>
        <li className="text-[#212121] mb-1">Karachi, Pakistan. (75800)</li>
      </ul>
    </div>
  );
};

export default Footer;

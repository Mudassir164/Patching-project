import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import Paypal from "../Assets/paypal_and_cards.jpg";

const Footer = () => {
  return (
    <section className="flex w-[100%] flex-row justify-between shrink-0 flex-wrap p-5 md:p-14">
      <FooterContent
        title="Company"
        ContentList={[
          "Login-Register",
          "About Us",
          "Pay Using Card",
          "Staff Login",
        ]}
      />
      <FooterContent
        title="Services"
        ContentList={[
          "Embroidery Digitizing",
          "Vectors",
          "PVC / Rubber Patch",
          "Embroidered Patch",
        ]}
      />
      <FooterContent
        title="Policy and Tip"
        ContentList={[
          "Tips",
          "Terms and Conditions",
          "Copyright Policy",
          "Refund Policy",
        ]}
      />
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
          <li className="text-[#212121] mb-1">{value}</li>
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

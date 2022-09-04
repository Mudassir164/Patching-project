import React from "react";
import { colors } from "../Constant/Theme";

const WelcomeSection = () => {
  console.log(colors.bgPrimary);
  return (
    <section
      className={`w-[100%] p-3 md:p-14 flex flex-col ${colors.bgPrimary}`}
    >
      <div className="w-[100%] flex flex-col justify-center items-center mb-5 ">
        <h1 className="text-4xl text-black font-bold font-serif">
          YOU HAVE COME TO THE RIGHT PLACE
        </h1>
      </div>
      <div className="mt-8 max-w-[85rem] my-0 mx-auto ">
        <Paragraph>
          If you are searching for the best quality custom products for your
          business, you have come to the right place.
        </Paragraph>
        <Paragraph>
          We are here to help you create that custom product that is more than
          just a label, patch or medal. We consider our products a powerful tool
          in helping you take your brand to the next level. We are experts in
          what we do, and we want to help you design and increase your position
          in your marketplace with our quality custom offerings.
        </Paragraph>
        <Paragraph>
          Reliable Punching manufactures and exports the finest quality custom
          embroidery patches, custom PVC patches, custom leather patches, custom
          sublimation patches, along with embroidery digitizing and screen
          printing with color separation.
        </Paragraph>
        <Paragraph>
          Our clients range from the private fashion industry to the military;
          encompassing all types of business' including police departments,
          uniform suppliers, private clubs, sports teams, government agencies
          and small business owners.
        </Paragraph>
        <Paragraph>
          We welcome the opportunity to work with you. From inception to
          completion, we assure you the highest standards in our customer
          service, in the quality of our products and in the efficiency of our
          time management.
        </Paragraph>
      </div>
    </section>
  );
};

const Paragraph = (props) => {
  return <p className="text-xl mb-5 font-serif">{props.children}</p>;
};

export default WelcomeSection;

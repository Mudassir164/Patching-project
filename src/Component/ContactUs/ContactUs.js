import React, { useState, useEffect } from "react";
import ContactUsForm from "./ContactUsForm";
import axios from "axios";

const ContactUs = () => {
  const [ip, setIP] = useState("");

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col items-center ">
      <div className="w-full md:w-[50%] flex flex-col">
        <div className="w-[100%] flex flex-col justify-center items-center px-10 py-5  ">
          <h1 className="text-2xl text-black text-center font-bold">
            Contact Us
          </h1>
          <p className="text-center">
            Looking for a quote? Or have a general query? Do write us and we
            will get back to you within hours!
          </p>
        </div>
        <ContactUsForm ip={ip} />
        <div className="flex flex-row gap-5 justify-center p-5 font-bold">
          <h2>Your IP Address </h2>
          <h4>{ip}</h4>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

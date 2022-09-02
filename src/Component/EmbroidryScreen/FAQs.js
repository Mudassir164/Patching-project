import React from "react";
import FAQsBox from "./Component/FAQsBox";

import "./Style.css";

const FAQsList = [
  {
    title: "Delivery",
    questions: [
      {
        q: "How long will it take to ship my finished patch?",
        a: "Shipping hinges primarily on your location, but we can use expedited services to ensure that your delivery meets your deadline. If you have one, please tell your representative right away so we can work towards beating it.",
      },
    ],
  },

  {
    title: "Design",
    questions: [
      {
        q: "What is the difference between a bullion patch, bullion crest, blazer badge, and blazer patch?",
        a: "There is no difference. All of these terms refer to emblems embroidered with special metallic wound threads, which originate from India. There is such diversified terminology for bullion emblems because this type of accessory remains a niche item, which remains unique and full of character distinguished from other more common products like thread-embroidered patches and woven labels.",
      },
      {
        q: "How do I determine the overall size of my patches?",
        a: "For us, patch size is just a simple height by width measurement that can be accomplished by an everyday ruler. Some patchmakers complicate this by making it a matter of dividing the height by width and charging you based on the answer, but we spare you the long division.",
      },
      {
        q: "What are the size limits for patches?",
        a: "Patches’ maximum size depends on their type; though for most it's going to be a maximum of eleven twelve inches (corner from corner), speciality patches like PVC and bouillon can only be made up to five inches. Name patches can also exceed twelve inches across, in certain circumstances. Your creative specialist will be able to fill you in on the details — and if you order is large enough, we might be able to break the rules and make an exception for you",
      },
      {
        q: "How long does it take to make my patch?",
        a: "Each order’s turnaround time depends on your design and its complexity. During the design and manufacturing processes, your representative will be able to provide you with delivery and shipment estimates — you’ll also receive email updates as your order makes it way through our system.",
      },
    ],
  },
  {
    title: "Mockup",
    questions: [
      {
        q: "Will I get a sample before my patches are made?",
        a: "After you approve your artwork mockup, we will manufacture an actual sample for you within 5-8 business days. Upon completion of your sample leather patch/label, we will email a digital photo of your sample to your inbox. At this point you are welcome to approve the sample (if you are 100% satisfied), or request an edit (if there are any changes you would like to be made).",
      },
    ],
  },
  {
    title: "Pricing",
    questions: [
      {
        q: "How do you price your patches?",
        a: `We put a lot of thought into our prices. Some of the more important variables are quantity, stylistic add-ons, size and "surface area" of the modifications — i.e., how much printing, sowing or other graphically-related work does the project require? The person most equipped to give you a price for your product is your sale representative or our useful DIY — both can give you a detailed analysis of your quote and what things featured into our per-item price. Happy hunting!`,
      },
    ],
  },
  {
    title: "Production",
    questions: [
      {
        q: "Where will my patch be made?",
        a: "We work with an international network of factories to fulfill our orders — in places from Pakistan and the China to the United States and beyond. Your order will be matched with the factory that can best execute your design. If you have specific production requirements like made-in-the-USA, we’re happy to make accommodations",
      },
    ],
  },
];

const FAQs = () => {
  return (
    <section className="w-[100%] p-3 md:p-14 flex flex-col relative  bg-gray-50 ">
      <h1 className="text-6xl font-bold text-center p-3">FAQ</h1>
      <div className="App">
        {FAQsList.map((value, index) => (
          <FAQsBox
            title={value.title}
            questions={value.questions}
            key={`faqs${index}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQs;

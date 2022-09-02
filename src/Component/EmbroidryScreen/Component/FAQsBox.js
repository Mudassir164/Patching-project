import React, { useEffect, useRef } from "react";
import "../Style.css";
import { FiPlus } from "react-icons/fi";

const FAQsBox = ({ title, questions, active, setActive, ukey, h, seth }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight =
      active === ukey ? `${contentRef.current.scrollHeight}px` : "0px";
  }, [contentRef, active]);

  const toggleAccordion = (index) => {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  };
  return (
    <div className="mb-5">
      <button
        className={`question-section ${active}`}
        onClick={() => {
          toggleAccordion(ukey);
        }}
      >
        <div>
          <div className="flex items-center px-5 py-5">
            <h1 className="text-3xl font-bold">{title}</h1>
            <FiPlus
              className={active ? `question-icon rotate` : `question-icon`}
            />
          </div>
          <div
            ref={contentRef}
            className={active === ukey ? `answer answer-divider` : `answer`}
          >
            {questions.map((value, index) => (
              <div key={`question and answer ${index}`} className="w-full p-3">
                <h4 className="text-lg font-bold">{value.q}</h4>
                <p className="text-lg">{value.a}</p>
              </div>
            ))}
          </div>
        </div>
      </button>
    </div>
  );
};

export default FAQsBox;

import React, { useEffect, useState, useRef } from "react";
import "../Style.css";
import { FiPlus } from "react-icons/fi";

const FAQsBox = ({ title, questions }) => {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };
  return (
    <div className="mb-5">
      <button
        className={`question-section ${active}`}
        onClick={toggleAccordion}
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
            className={active ? `answer answer-divider` : `answer`}
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

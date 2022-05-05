import React, { useState } from "react";
import "../faq/Answers.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Answers = ({ title, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="container answers">
      <div className="answers-title">
        <h4>{title}</h4>
        <button className="answers-icons" onClick={handleClick}>
          {showAnswer ? (
            <AiOutlineMinus color="red" />
          ) : (
            <AiOutlinePlus color="#1f93ff" />
          )}
        </button>
      </div>
      <div className="answers-answer">
        {showAnswer && <p className="u-text-small">{answer}</p>}
      </div>
    </div>
  );
};

export default Answers ;

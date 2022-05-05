import React, { useEffect } from "react";
import { answers } from "./data.js";
import Answers from "./Answers";
import { MdOutlineLibraryBooks } from "react-icons/md";

import AOS from "aos";
import "aos/dist/aos.css";

const More = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="faq">
      <div className="container more">
        <div className="utitle" data-aos="fade-up">
          <MdOutlineLibraryBooks color="#ffff" size={30} />
          <h2>What About Recruitment?</h2>
          <p className="utext">
          Our superlative recruitment process does not only allow us to hit our hiring goals but it also facilitates us to accomplish tasks with efeciency.
          </p>
        </div>
        <div className="answers">
          {answers.map((answers) => (
            <Answers
              key={answers.id}
              title={answers.title}
              answer={answers.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default More;

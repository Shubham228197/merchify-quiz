import React from "react";
import { QuizQuestions } from "../../../Constants/constant";
const DisplayAnswers = () => {
  return (
    <div>
      {QuizQuestions.map((item) => (
        <>
          <h3>Question: {item.question}</h3>
          <p>Answer: {item.answer}</p>
        </>
      ))}
    </div>
  );
};

export default DisplayAnswers;

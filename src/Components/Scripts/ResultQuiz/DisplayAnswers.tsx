import { QuizQuestions } from "../../../Constants/constant";
import {  Divider, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { AnswersContainer, ButtonBox, QuizButton } from "./Styling/ResultStyling";

const DisplayAnswers = () => {
  return (
    <AnswersContainer>
      {QuizQuestions.map((item) => (
        <>
          <h3>
            <span style={{ color: "red" }}>Question: </span>
            {item.question}
          </h3>
          <Stack direction="column">
            <p>
              <span style={{ color: "green", fontWeight: "bold" }}>
                Answer:
              </span>
              {item.answer}
            </p>
          </Stack>
          <Divider />
        </>
      ))}
      <ButtonBox>
        <Link to="/">
          <QuizButton variant="contained" color="secondary">
            Restart
          </QuizButton>
        </Link>
      </ButtonBox>
    </AnswersContainer>
  );
};

export default DisplayAnswers;

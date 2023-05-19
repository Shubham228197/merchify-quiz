import React from "react";
import AttemptScore from "./AttemptScore";
import ScoreMessage from "./ScoreMessage";
import { Stack } from "@mui/material";
import { QuizHeading } from "../../../Constants/constant";
import { Link } from "react-router-dom";
import { QuizContainer, QuizButton, QuizHeadline, ButtonBox } from "./Styling/ResultStyling";

type dispResults = {
  totalQuestions: number;
  correctAnswers: number;
};

const DisplayResults: React.FC<dispResults> = (props): JSX.Element => {
  const percentage = (props.correctAnswers / props.totalQuestions) * 100;
  return (
    <QuizContainer>
      <QuizHeadline>
        {QuizHeading}
      </QuizHeadline>
      <Stack padding={2} direction="column">
        <ScoreMessage percent={percentage} />
        <AttemptScore
          total={props.totalQuestions}
          correct={props.correctAnswers}
        />
        <ButtonBox>
        <Link to="/answers" style={{ textDecoration: "none" }}>
          <QuizButton variant="contained" color="secondary">
            Show Answers
          </QuizButton>
        </Link>
        </ButtonBox>
      </Stack>
    </QuizContainer>
  );
};

export default DisplayResults;

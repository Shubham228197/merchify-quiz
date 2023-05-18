import React from "react";
import AttemptScore from "./AttemptScore";
import ScoreMessage from "./ScoreMessage";
import { Button, Stack } from "@mui/material";
import { QuizHeading } from "../../../Constants/constant";

type dispResults = {
  totalQuestions: number;
  correctAnswers: number;
};
const DisplayResults: React.FC<dispResults> = (props): JSX.Element => {
  const percentage = (props.correctAnswers / props.totalQuestions) * 100;
  console.log("toal: ", props.totalQuestions);
  return (
    <>
      <h2>{QuizHeading}</h2>
      <Stack padding={2} direction="column">
        <ScoreMessage percent={percentage} />
        <AttemptScore
          total={props.totalQuestions}
          correct={props.correctAnswers}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: "30px",
            margin: "20px",
            textTransform: "capitalize",
            padding: "3px 30px",
          }}
        >
          Show Answers
        </Button>
      </Stack>
    </>
  );
};

export default DisplayResults;

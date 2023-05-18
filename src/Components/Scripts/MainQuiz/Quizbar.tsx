import React, { FC } from "react";
// import Countdown from "./Countdown";
import QuestionNumber from "./QuestionNumber";
import { Box } from "@mui/material";

type Quizing = {
  quesNum: number;
  // timer: number;
};

const Quizbar: FC<Quizing> = (props): JSX.Element => {
  // console.log("timer i QuizBar: ",props.timer)
  return (
    <Box sx={{ display: "flex" }}>
      <QuestionNumber quesNum={props.quesNum} />
      {/* <Countdown timer={props.timer}/> */}
    </Box>
  );
};

export default Quizbar;

import React, { FC } from "react";
import QuestionNumber from "./QuestionNumber";
import Countdown from "./Countdown";
import { Box } from "@mui/material";

type Quizing = {
  quesNum: number;
  sec: number;
};

const Quizbar: FC<Quizing> = (props): JSX.Element => {
  return (
    <Box sx={{ display: "flex", margin: '10px 0px' }}>
      <QuestionNumber quesNum={props.quesNum} />
      <Countdown sec={props.sec}/>
    </Box>
  );
};

export default Quizbar;

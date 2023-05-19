import { Box } from "@mui/material";
import React, { FC } from "react";
import { ShowQuesNumSection } from "./Styling/MainQuizStyling";

type QuesNumber = {
  quesNum: number;
};

const QuestionNumber: FC<QuesNumber> = (props): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ShowQuesNumSection
        variant="contained"
        color="success"
        disableTouchRipple
        disableElevation
        disableFocusRipple
        disableRipple
      >
        0{props.quesNum + 1}/05
      </ShowQuesNumSection>
    </Box>
  );
};

export default QuestionNumber;

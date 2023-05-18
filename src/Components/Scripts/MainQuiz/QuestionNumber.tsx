import { Box, Button } from "@mui/material";
import React, { FC } from "react";

type QuesNumber = {
  quesNum: number;
};

const QuestionNumber: FC<QuesNumber> = (props): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Button
        variant="contained"
        color="success"
        sx={{
          borderRadius: "30px",
          textTransform: "capitalize",
          height: '18px',
          fontSize: '12px',
          padding: '10px',
        }}
        disableTouchRipple
        disableElevation
        disableFocusRipple
        disableRipple
      >
        0{props.quesNum + 1}/05
      </Button>
    </Box>
  );
};

export default QuestionNumber;

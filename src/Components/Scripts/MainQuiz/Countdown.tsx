import { Box } from "@mui/material";
import { FC } from "react";
import { ShowQuesNumSection } from "./Styling/MainQuizStyling";

type TimeCountdown = {
  sec: number;
};
const Countdown: FC<TimeCountdown> = (props): JSX.Element => {
  return (
    <Box>
      <ShowQuesNumSection
        variant="contained"
        color="error"
        disableTouchRipple
        disableElevation
        disableFocusRipple
        disableRipple
      >
        {props.sec} sec
      </ShowQuesNumSection>
    </Box>
  );
};

export default Countdown;

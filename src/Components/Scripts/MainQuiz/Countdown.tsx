import { Box, Button } from "@mui/material";
import { FC } from "react";
type TimeCountdown = {
  timer: number;
};
const Countdown: FC<TimeCountdown> = (props): JSX.Element => {

  return (
    <Box>
      <Button
        variant="contained"
        color="error"
        sx={{
          borderRadius: "30px",
          textTransform: "capitalize",
          height: "18px",
          fontSize: "12px",
          padding: "10px",
        }}
      >{props.timer}</Button>
    </Box>
  );
};

export default Countdown;

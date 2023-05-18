import { Box, Button, Paper, Stack, Typography } from "@mui/material";
import QuestionMark from "../../Images/icons8-question-50.png";
import WallClock from "../../Images/icons8-clock-64.png";
import MedalImage from "../../Images/icons8-medal-50.png";
import InfoImage from "../../Images/icons8-info-50.png";

const StartingPage = () => {
  return (
    <Paper
      sx={{
        maxHeight: "844ppx",
        maxWidth: "390px",
        padding: "10px",
      }}
      elevation={8}
    >
      <Typography
        variant="h5"
        sx={{ fontWeight: "bold", padding: "16px 16px 0px 16px" }}
      >
        Quiz Rules
      </Typography>
      <Stack padding={2} direction="column">
        <Typography sx={{ padding: "5px 0px" }}>
          <img
            src={WallClock}
            alt=""
            style={{ maxWidth: "2vw", maxHeight: "2vh", margin: "3px" }}
          />
          Keep in mind that it's a time-bound quiz.
        </Typography>
        <Typography sx={{ padding: "5px 0px" }}>
          <img
            src={QuestionMark}
            alt=""
            style={{ maxWidth: "2vw", maxHeight: "2vh", margin: "3px" }}
          />
          We believe that you will ace it!
        </Typography>
        <Typography sx={{ padding: "5px 0px" }}>
          <img
            src={MedalImage}
            alt=""
            style={{ maxWidth: "2vw", maxHeight: "2vh", margin: "3px" }}
          />
          All the best! See you on the other side.
        </Typography>
      </Stack>
      <Typography sx={{ textAlign: "center", padding: "5px 0px" }}>
        <img
          src={InfoImage}
          alt=""
          color="secondary"
          style={{ maxWidth: "1.5vw", maxHeight: "1.5vh", margin: "3px"}}
        />
        This quiz can only be attempted once daily
      </Typography>
      <Box sx={{ display: "flex", margin: "auto", justifyContent: "center" }}>
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
          Start
        </Button>
      </Box>
    </Paper>
  );
};

export default StartingPage;

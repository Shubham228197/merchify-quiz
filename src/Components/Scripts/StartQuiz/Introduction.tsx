import { Box, Button, Grid, Typography } from "@mui/material";
import {
  QuizHeading,
  QuizIncludesPoints,
  QuizDiscription,
  QuizInteraction,
} from "../../../Constants/constant";
import StudentImage from "../../Images/StudentImage.png";

const Introduction = () => {
  return (
    <Box
      sx={{
        maxHeight: "844ppx",
        maxWidth: "390px",
        padding: "10px",
      }}
    >
      <Grid container sx={{ display: "flex" }}>
        <Grid item xs={5}>
          <Grid container sx={{ margin: "50% 10px" }}>
            {QuizHeading.split(" ").map((word, index) =>
              index % 2 === 0 ? (
                <Typography
                  variant="h5"
                  color="secondary"
                  sx={{ display: "flex", fontWeight: "bold" }}
                >
                  {word}&nbsp;
                </Typography>
              ) : (
                <Typography
                  variant="h5"
                  color="green"
                  sx={{ display: "flex", fontWeight: "bold" }}
                >
                  {word}&nbsp;
                </Typography>
              )
            )}
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <img
            src={StudentImage}
            alt="student"
            style={{ maxHeight: "400px", maxWidth: "190px" }}
          />
        </Grid>
      </Grid>
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {QuizHeading}
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            {QuizInteraction.map((item) => item)}
          </Grid>
          <Grid item xs={6} sx={{ backgroundColor: "green" }}>
            Ratings
          </Grid>
        </Grid>
        <Typography sx={{ margin: "20px 3px" }}>
          {QuizDiscription}
          <Button color="success" sx={{ margin: "0px", padding: "0px" }}>
            Read More
          </Button>
        </Typography>
      </Box>
      <Box>
        <Typography>This Quiz Includes</Typography>
        {QuizIncludesPoints.map((points) => points)}
      </Box>
      <Box sx={{ display: "flex", margin: "auto", justifyContent: "center" }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            borderRadius: "30px",
            margin: "10px",
            textTransform: "capitalize",
            padding: "3px 30px",
          }}
        >
          Take Quiz
        </Button>
      </Box>
    </Box>
  );
};

export default Introduction;

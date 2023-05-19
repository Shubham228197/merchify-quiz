import { Box, Divider, Grid, Typography } from "@mui/material";
import {
  QuizHeading,
  QuizIncludesPoints,
  QuizDiscription,
  QuizInteraction,
} from "../../../Constants/constant";
import StudentImage from "../../Images/StudentImage.png";
import { Link } from "react-router-dom";
import {
  IntroductionContainer,
  GridFlex,
  HeadingText,
  StudentImageContainer,
  BoldText,
  ReadMore,
  ButtonBox,
  QuizButton,
  TextsPadding
} from "./Styling/IntroStyling";
const Introduction = () => {
  return (
    <IntroductionContainer>
      <GridFlex container>
        <Grid item xs={5}>
          <Grid container sx={{ margin: "50% 10px" }}>
            {QuizHeading.split(" ").map((word, index) =>
              index % 2 === 0 ? (
                <HeadingText variant="h5" color="secondary">
                  {word}&nbsp;
                </HeadingText>
              ) : (
                <HeadingText variant="h5" color="green">
                  {word}&nbsp;
                </HeadingText>
              )
            )}
          </Grid>
        </Grid>
        <Grid item xs={7}>
          <StudentImageContainer src={StudentImage} alt="student" />
        </Grid>
      </GridFlex>
      <Divider />
      <Box>
        <BoldText variant="h5">{QuizHeading}</BoldText>
        <Grid container>
          <Grid item xs={6}>
            {QuizInteraction.map((item) => item)}
          </Grid>
          <Grid item xs={6} >
            Don't forget to Rate Us!
          </Grid>
        </Grid>
        <TextsPadding>
          {QuizDiscription}
          <ReadMore color="success">Read More</ReadMore>
        </TextsPadding>
      </Box>
      <Box>
        <Typography>This Quiz Includes</Typography>
        {QuizIncludesPoints.map((points) => points)}
      </Box>
      <Divider />
      <ButtonBox>
        <Link to="/start">
          <QuizButton variant="contained" color="secondary">
            Take Quiz
          </QuizButton>
        </Link>
      </ButtonBox>
      <Divider />
    </IntroductionContainer>
  );
};

export default Introduction;

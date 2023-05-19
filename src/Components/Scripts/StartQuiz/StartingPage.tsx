import { Divider, Stack } from "@mui/material";
import QuestionMark from "../../Images/icons8-question-50.png";
import WallClock from "../../Images/icons8-clock-64.png";
import MedalImage from "../../Images/icons8-medal-50.png";
import InfoImage from "../../Images/icons8-info-50.png";
import { Link } from "react-router-dom";
import {
  StartingPageContainer,
  StartHeadling,
  QuizInstructions,
  StartPageIcon,
  FooterText,
  ButtonBox,
  QuizButton,
} from "./Styling/IntroStyling";

const StartingPage = () => {
  return (
    <StartingPageContainer elevation={8}>
      <StartHeadling variant="h5">Quiz Rules</StartHeadling>
      <Divider />
      <Stack padding={2} direction="column">
        <QuizInstructions>
          <StartPageIcon src={WallClock} alt="clock" />
          Keep in mind that it's a time-bound quiz.
        </QuizInstructions>
        <QuizInstructions>
          <StartPageIcon src={QuestionMark} alt="Qmark" />
          10 sec/question timer runs in background
        </QuizInstructions>
        <QuizInstructions>
          <StartPageIcon src={MedalImage} alt="medal" />
          All the best! See you on the other side.
        </QuizInstructions>
      </Stack>
      <FooterText>
        <StartPageIcon src={InfoImage} alt="Info" color="secondary" />
        This quiz can only be attempted once daily
      </FooterText>
      <Divider />
      <ButtonBox>
        <Link to="/quiz">
          <QuizButton variant="contained" color="secondary">
            Start
          </QuizButton>
        </Link>
      </ButtonBox>
    </StartingPageContainer>
  );
};

export default StartingPage;

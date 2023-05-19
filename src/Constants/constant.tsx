import { Typography } from "@mui/material";
import BookmarkIcon from "../Components/Images/icons8-bookmark-50.png";
import PageIcon from "../Components/Images/icons8-page-50.png";
import ChallengeIcon from "../Components/Images/icons8-war-62.png";
import CommentIcon from "../Components/Images/icons8-comment-100.png";
import QuestionMark from "../Components/Images/icons8-question-50.png";
import WallClock from "../Components/Images/icons8-clock-64.png";
import MultiPage from "../Components/Images/icons8-multi-pages-50.png";

export const QuizHeading = "The Daily MS Excel Quiz";

export const QuizIncludesPoints = [
  <Typography>
    <img
      src={PageIcon}
      alt="single-page-icon"
      style={{ maxWidth: "2vw", maxHeight: "2vh", margin: "3px" }}
    />
    50% Passing Percentage
  </Typography>,
  <Typography>
    <img
      src={QuestionMark}
      alt="question-mark-icon"
      style={{ maxWidth: "2vw", maxHeight: "2vh", margin: "3px" }}
    />
    5 Questions
  </Typography>,
  <Typography>
    <img
      src={WallClock}
      alt="clock-icon"
      style={{ maxWidth: "2vw", maxHeight: "2vh", margin: "3px" }}
    />
    10 Seconds per Question
  </Typography>,
  <Typography>
    <img
      src={MultiPage}
      alt="multi-page-icon"
      style={{ maxWidth: "2vw", maxHeight: "2vh", margin: "3px" }}
    />
    1 Attempt Daily
  </Typography>,
];

export const QuizDiscription = `
The Microsoft Excel Proficency Test is designed to evaluate an individual's knowledge 
and skills in using Microsoft Excel. 
It covers a wide range of topics, including da...`;

export const QuizInteraction = [
  <Typography>
    <img
      src={CommentIcon}
      alt="comment-icon"
      style={{ maxWidth: "2vw", maxHeight: "2vh", margin: "3px" }}
    />
    Best of Luck
  </Typography>,
  <Typography>
    <img
      src={BookmarkIcon}
      alt="bookmark-icon"
      style={{ maxWidth: "2vw", maxHeight: "2vh", margin: "3px" }}
    />
    Save Quiz
  </Typography>,
  <Typography>
    <img
      src={ChallengeIcon}
      alt="challenge-icon"
      style={{ maxWidth: "2vw", maxHeight: "2vh", margin: "3px" }}
    />
    Challenge Quiz
  </Typography>,
];

export const QuizQuestions = [
  {
    question:
      "What is the function used to lookup a value in a table and return a corresponding value from the same row?",
    options: [
      { choice: "MATCH" },
      { choice: "INDEX" },
      { choice: "HLOOKUP" },
      { choice: "VLOOKUP" },
    ],
    answer: "MATCH",
  },
  {
    question: "Which formula is NOT equivalent to all of the others?",
    options: [
      { choice: "=SUM (A3,A6)" },
      { choice: "=A3+A4+A5+A6" },
      { choice: "=SUM(A3:A6)" },
      { choice: "=SUM(A3,A4,A5,A6)" },
    ],
    answer: "=A3+A4+A5+A6",
  },
  {
    question:
      "A cell contains the value 7.877 and you want it to display as 7.9. How can you accomplish this?",
    options: [
      { choice: "Click the Decrease Decimal button once" },
      {
        choice: "In the cells group on the Home tab, click Format > Format Cells. Then click the Allignment tab aand the select Right Indent.",
      },
      { choice: "Click the Decrease Decimal button twice." },
      { choice: "Use the ROUND{} function" },
    ],
    answer: "Click the Decrease Decimal button once",
  },
  {
    question: "Interaction of a column and row iss called __________ .",
    options: [
      { choice: "WorkSheet" },
      { choice: "Cell" },
      { choice: "Ribbon" },
      { choice: "Table" },
    ],
    answer: "WorkSheet",
  },
  {
    question:
      "The NOW() function return the current date and time as 43704.665218. Which part of this value indicates the time?",
    options: [
      { choice: "665218" },
      { choice: "6652" },
      { choice: "43740" },
      { choice: "43740.66522" },
    ],
    answer: "665218",
  },
];

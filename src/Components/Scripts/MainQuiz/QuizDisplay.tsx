import {
  Box,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import DisplayQuestions from "./DisplayQuestions";
import { QuizQuestions } from "../../../Constants/constant";
import Quizbar from "./Quizbar";
import { useEffect, useRef, useState } from "react";
import DisplayResults from "../ResultQuiz/DisplayResults";
import {
  QuizDisplayContainer,
  QuestionContainer,
  SubmitButton,
} from "./Styling/MainQuizStyling";

const QuizDisplay = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, SetCorrectAnswer] = useState(0);
  const [incorrectAnswers, SetIncorrectAnswer] = useState(0);
  const [value, setValue] = useState("");
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const startTimer = () => {
    if (intervalRef.current) return; // Timer already running

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  useEffect(()=>{startTimer()},[])

  const resetTimer = () => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    setSeconds(0);
    startTimer();
  };

  const handleQuestionNumber = () => {
    if (value !== "") {
      if (value === QuizQuestions[questionNumber].answer) {
        SetCorrectAnswer(correctAnswers + 1);
      } else {
        SetIncorrectAnswer(incorrectAnswers + 1);
      }
      setQuestionNumber(questionNumber + 1);
      setValue("");
    } else {
      setQuestionNumber(questionNumber + 1);
    }
    resetTimer();
  };

  if(seconds > 60){
    handleQuestionNumber();
  }

  return (
    <QuizDisplayContainer>
      {questionNumber < QuizQuestions.length ? (
        <>
          <Quizbar quesNum={questionNumber} sec={seconds}/>
          <Divider />
          <QuestionContainer>
            <DisplayQuestions
              question={QuizQuestions[questionNumber].question}
            />
          </QuestionContainer>
          <Divider />
          <Box>
            {QuizQuestions[questionNumber].options.map((item) => (
              <Stack direction="column">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value={value}
                      control={
                        <Radio
                          onChange={() => {
                            setValue(item.choice);
                          }}
                          sx={{ margin: "5px 0px" }}
                        />
                      }
                      label={item.choice}
                      sx={{ margin: "5px 0px" }}
                    />
                  </RadioGroup>
                </FormControl>
              </Stack>
            ))}
          </Box>
          <Divider />
          <Box>
            <SubmitButton
              variant="contained"
              color="secondary"
              onClick={handleQuestionNumber}
            >
              Submit
            </SubmitButton>
          </Box>
        </>
      ) : (
        <div>
          <DisplayResults
            totalQuestions={QuizQuestions.length}
            correctAnswers={correctAnswers}
          />
        </div>
      )}
    </QuizDisplayContainer>
  );
};

export default QuizDisplay;

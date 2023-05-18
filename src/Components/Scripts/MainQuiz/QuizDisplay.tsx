import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import DisplayQuestions from "./DisplayQuestions";
import { QuizQuestions } from "../../../Constants/constant";
import Quizbar from "./Quizbar";
import { useEffect, useRef, useState } from "react";

const QuizDisplay = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [correctAnswers, SetCorrectAnswer] = useState(0);
  const [incorrectAnswers, SetIncorrectAnswer] = useState(0);
  const [value, setValue] = useState("");
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timer | null>(null);

  const startTimer = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    setInterval(() => {
      setQuestionNumber(questionNumber + 1);
      resetTimer();
    }, 10000);
  }, [questionNumber]);

  const resetTimer = () => {
    clearInterval(intervalRef.current!);
    intervalRef.current = null;
    setSeconds(0);
  };

  const handleQuestionNumber = () => {
    resetTimer();
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
  };
  return (
    <Box
      sx={{
        maxHeight: "844ppx",
        maxWidth: "390px",
        padding: "10px",
      }}
    >
      {questionNumber < QuizQuestions.length ? (
        <>
          <Quizbar quesNum={questionNumber} timer={seconds} />
          <Box>
            <DisplayQuestions
              question={QuizQuestions[questionNumber].question}
            />
          </Box>
          <Box>
            {QuizQuestions[questionNumber].options.map((item) => (
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
                      />
                    }
                    label={item.choice}
                  />
                </RadioGroup>
              </FormControl>
            ))}
          </Box>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                borderRadius: "30px",
                margin: "20px",
                textTransform: "capitalize",
                padding: "3px 30px",
              }}
              onClick={handleQuestionNumber}
            >
              Submit
            </Button>
          </Box>
        </>
      ) : (
        <div>
          <p>Correct Answer: {correctAnswers}</p>
          <p>Incorrect Answer: {incorrectAnswers}</p>
        </div>
      )}
    </Box>
  );
};

export default QuizDisplay;

import { FC } from 'react'
import { QuizContainer, ScoreText } from './Styling/ResultStyling';

type scoring = {
  total: number;
  correct: number;
}
const AttemptScore: FC<scoring> = (props): JSX.Element => {
  return (
    <QuizContainer direction='row'>
      <ScoreText variant='h6'>Your Score: </ScoreText>
      <ScoreText>{props.correct}/{props.total}</ScoreText>
    </QuizContainer>
  )
}

export default AttemptScore

import { FC } from "react"
import { PercentMessageContainer, PercentMessageText } from "./Styling/ResultStyling";

type score = {
  percent: number;
}
const ScoreMessage: FC<score> = (props): JSX.Element => {
  return (
    <PercentMessageContainer elevation={8}>
      <PercentMessageText variant="h5">You scored percentage</PercentMessageText>
      <PercentMessageText>{props.percent}%</PercentMessageText>
      <p style={{padding: '0px 10px'}}>Success is not final, failure is not fatal. It is the courage to continue that counts.</p>
    </PercentMessageContainer>
  )
}

export default ScoreMessage

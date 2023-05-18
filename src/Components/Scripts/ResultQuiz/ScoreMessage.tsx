import { Paper } from "@mui/material";
import { FC } from "react"

type score = {
  percent: number;
}
const ScoreMessage: FC<score> = (props): JSX.Element => {
  return (
    <Paper sx={{width: '350px',height: '180px'}} elevation={8}>
      <h4>You scored percentage</h4>
      <h1>{props.percent}%</h1>
      <p>Success is not final, failure is not fatal; It is the courage to continue that counts.</p>
    </Paper>
  )
}

export default ScoreMessage

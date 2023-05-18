import { Stack } from '@mui/material';
import React, { FC } from 'react'

type scoring = {
  total: number;
  correct: number;
}
const AttemptScore: FC<scoring> = (props): JSX.Element => {
  return (
    <Stack padding={2} direction='row'>
      <h3>Your Score: </h3>
      <p>{props.correct}/{props.total}</p>
    </Stack>
  )
}

export default AttemptScore

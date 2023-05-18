import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'

type DisQues = {
  question: string
}

const DisplayQuestions: FC<DisQues> = (props): JSX.Element => {
  return (
    <Box>
      <Typography variant='subtitle2'>{props.question}</Typography>
    </Box>
  )
}

export default DisplayQuestions

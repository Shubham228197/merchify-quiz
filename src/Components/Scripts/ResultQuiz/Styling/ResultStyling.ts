import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import styles from 'styled-components'

export const QuizContainer = styles(Stack)`
display: flex ! important; 
margin: auto ! important;
padding: 16px ! important;
`;
export const ScoreText = styles(Typography)`
margin: auto 5px ! important;
`;

export const AnswersContainer = styles(Box)`
max-height: 844ppx ! important;
max-width: 390px ! important;
padding: 10px ! important;
`;
export const ButtonBox = styles(Box)`
display: flex ! important; 
margin: auto ! important; 
justify-content: center ! important; 
`;
export const QuizButton = styles(Button)`
border-radius: 30px ! important;
margin: 10px ! important;
text-transform: capitalize ! important;
padding: 3px 30px ! important;  
`;
export const QuizHeadline = styles.h2`
display: flex; 
justify-content: center;
`;
export const PercentMessageContainer = styles(Paper)`
width: 350px ! important;
height: 180px ! important;
`;
export const PercentMessageText = styles(Typography)`
display: flex ! important; 
justify-content: center ! important;
margin: 10px ! important;
`;
import { Box, Button } from '@mui/material';
import styles from 'styled-components'

export const ShowQuesNumSection = styles(Button)`
    border-radius: 30px ! important;
    text-transform: capitalize ! important;
    font-size: 12px ! important;
    padding: 10px ! important;
    height: 18px ! important;
`;

export const QuizDisplayContainer = styles(Box)`
    max-height: 844ppx ! important;
    max-width: 390px ! important;
    padding: 10px ! important;
`;
export const QuestionContainer = styles(Box)`
margin: 30px 0px 80px 0px ! important;
`;
export const SubmitButton = styles(Button)`
    display: flex ! important;
    border-radius: 30px ! important;
    margin: 10px auto 10px auto ! important;
    text-transform: capitalize ! important;
    padding: 3px 30px ! important;
`;
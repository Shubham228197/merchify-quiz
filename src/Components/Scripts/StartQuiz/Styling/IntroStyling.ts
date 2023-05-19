import { Box, Button, Grid, Paper, Typography } from '@mui/material';
import styles from 'styled-components'

export const IntroductionContainer = styles(Box)`
    // max-height: 844ppx ! important;
    max-width: 390px ! important;
    padding: 10px ! important;
`;

export const GridFlex = styles(Grid)`
display: flex ! important;
`;
export const HeadingText = styles(Typography)`
display: flex ! important;; 
font-weight: bold ! important;;
`;
export const StudentImageContainer = styles.img`
max-height: 400px; 
max-width: 190px;
`;
export const BoldText = styles(Typography)`
font-weight: bold ! important;
`;
export const ReadMore = styles(Button)`
margin: 0px ! important; 
padding: 0px ! important;
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
export const TextsPadding = styles(Typography)`
margin: 20px 3px ! important;
`;

export const StartingPageContainer = styles(Paper)`
max-height: 844ppx ! important;
max-width: 390px ! important;
padding: 10px ! important;
`;

export const StartHeadling = styles(Typography)`
font-weight: bold ! important; 
padding: 16px 16px 0px 16px ! important;
`;
export const QuizInstructions = styles(Typography)`
padding: 5px 0px ! important;
`;

export const StartPageIcon = styles.img`
max-width: 2vw; 
max-height: 2vh; 
margin: 3px;
`;
export const FooterText = styles(Typography)`
text-align: center ! important; 
padding: 5px 0px ! important; 
margin: 20px 0px ! important;
`;
import Introduction from "./Components/Scripts/StartQuiz/Introduction";
import StartingPage from "./Components/Scripts/StartQuiz/StartingPage";
import QuizDisplay from "./Components/Scripts/MainQuiz/QuizDisplay";
import DisplayAnswers from "./Components/Scripts/ResultQuiz/DisplayAnswers";
// import './App.css'
import {BrowserRouter,Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduction/>}/>
        <Route path="/start" element={<StartingPage/>}/>
        <Route path="/quiz" element={<QuizDisplay/>}/>
        <Route path="/answers" element={<DisplayAnswers/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

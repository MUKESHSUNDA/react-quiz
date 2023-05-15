import { useEffect, useState } from "react";
import "./App.css";
import FinalPage from "./Components/FinalPage";
import QuestionsPage from "./Components/QuestionsPage";
import StartingPage from "./Components/StartingPage";

function App() {
  const [username, setUsername] = useState("");

  const [score, setScore] = useState(0);
  const [scoreb, setScoreb] = useState(0);

  const [topScore, setTopScore] = useState(0);
 

  const [showStartingPage, setShowStartingPage] = useState(true);
  const [showQuestionsPage, setShowQuestionsPage] = useState(false);
  const [showFinalPage, setShowFinalPage] = useState(false);
  
  return (
    <>
      {showStartingPage && (
        <StartingPage
          setShowStartingPage={setShowStartingPage}
          setShowQuestionsPage={setShowQuestionsPage}
          topScore={topScore}
          username={username}
          setUsername={setUsername}
          setShowFinalPage = {setShowFinalPage}
          
        />
      )}
      {showQuestionsPage && (
        <QuestionsPage
          score={score}
          setScore={setScore}
          setShowQuestionsPage={setShowQuestionsPage}
          setShowFinalPage={setShowFinalPage}
          scoreb={scoreb}
          setScoreb={setScoreb}
        />
      )}
      {showFinalPage && (
        <FinalPage
          score={score}
          topScore={topScore}
          setTopScore={setTopScore}
          setShowStartingPage={setShowStartingPage}
          setShowFinalPage={setShowFinalPage}
          setScore={setScore}
          username={username}
          setUsername={setUsername}
          setScoreb = {setScoreb}
        />
      )}
    </>
  );
}

export default App;

import React, { useState } from "react";
import Card from "./Card";

import "./StartingPage.css";

const StartingPage = ({
  setShowStartingPage,
  setShowQuestionsPage,
  topScore,
  username,
  setUsername,
  setShowFinalPage,
 

}) => {
  const startGame = () => {
    if (username.trim().length > 0) {
      setShowStartingPage(false);
      setShowQuestionsPage(true);
     
      setTimeout(() => {
        setShowFinalPage(true);
        setShowQuestionsPage(false);
 
        
        
      }, 60000);
    }
  };
 return (
    <Card>
      <h1 className="header">Welcome to Quiz Game!</h1>
      <h3 className="primary_text">The number of question is 10 </h3>
      <h3 className="primary_text">Time limit is 60 seconds</h3>
      <br></br>
      <h3 className="primary_text">Please enter your username.</h3>
      <input
        type="text"
        placeholder="Username"
        className="username_input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button className="start_btn" onClick={startGame}>
        Let's play
      </button>

      <p className="top_score">
        Top score: <span>{topScore}</span>
      </p>
     
    </Card>
  );
};

export default StartingPage;

import React, { useState } from "react";
import "./App.css";

function App() {
  const [usertotal, setusertotal] = useState(0);
  const [CPUtotal, setCPUtotal] = useState(0);
  const [UserChoice, setUserChoice] = useState("");
  const [GameMessage, setGameMessage] = useState("");
  const anecdotes = ["rock", "scissors", "paper"];

  const [selected, setSelected] = useState("");

  const RandomSelect = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  function compare(humanGuess, computerGuess) {
    let message;
    let userScore = usertotal;
    let cpuScore = CPUtotal;

    if (humanGuess === computerGuess) {
      message = "The result is a tie!";
    } else {
      if (humanGuess === "rock") {
        if (computerGuess === "scissors") {
          userScore = usertotal + 1;
          message = `You win with ${humanGuess}`;
        } else {
          cpuScore = CPUtotal + 1;
          // setCPUtotal(CPUtotal + 1);
          message = `CPU ${computerGuess} wins`;
        }
      }

      if (humanGuess === "paper") {
        if (computerGuess === "rock") {
          userScore = usertotal + 1;
          message = `You win with ${humanGuess}`;
        } else {
          cpuScore = CPUtotal + 1;
          message = `CPU ${computerGuess} wins`;
        }
      }

      if (humanGuess === "scissors") {
        if (computerGuess === "rock") {
          userScore = usertotal + 1;
          message = `You win with ${humanGuess}`;
        } else {
          cpuScore = CPUtotal + 1;
          message = `CPU ${computerGuess} wins`;
        }
      }
    }
    setGameMessage(message);
    setusertotal(userScore);
    setCPUtotal(cpuScore);
  }

  const Choice = (UserChoice) => {
    if (!UserChoice) {
      console.error("No user choice provided");
    }
    setUserChoice(UserChoice);
    // if (UserChoice === "paper") {
    //   setUserChoice("paper");
    // } else if (UserChoice === "scissors") {
    //   setUserChoice("scissors");
    // } else if (UserChoice === "rock") {
    //   setUserChoice("rock");
    // }
    compare(UserChoice, anecdotes[selected]);
    RandomSelect();
  };

  return (
    <div className="App">
      <header className="Rock-paper-scissors">
        <h1>Rock Paper Scissors</h1>
        <p>Choose Rock, Paper, or Scissors to start playing</p>

        {anecdotes.map((choice, key) => {
          return (
            <button onClick={() => Choice(choice)} key={key}>
              {choice}
            </button>
          );
        })}

        {/* <button onClick={() => Choice("rock")}>Rock</button>
        <button onClick={() => Choice("scissors")}>Scissors</button>
        <button onClick={() => Choice("paper")}>Paper</button> */}
        <p>You chose: {UserChoice}</p>
        <p>CPU Chose: {anecdotes[selected]}</p>

        <p>winner:? {GameMessage}</p>

        <p>Your total: {usertotal}</p>

        <p>CPU total: {CPUtotal}</p>

        {/* <button onClick={RandomSelect}>Get Random</button>
        {anecdotes[selected]} */}
      </header>
    </div>
  );
}

export default App;

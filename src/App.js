import React, { useState } from "react";
import "./App.css";

function App() {
  const [usertotal, setusertotal] = useState(1);
  const [CPUtotal, setCPUtotal] = useState(0);
  const [computerChoice, setcomputerChoice] = useState("default");
  const [UserChoice, setUserChoice] = useState("");
  const [value, setValue] = useState(0);

  // const { choice } = props;
  // const addTodo = (text) => {
  //   const newTodos = [...todos, {text}];
  //   setTodos(newTodos);
  // };

  // const UserChoice = (usertotal) => {

  // }
  const anecdotes = ["rock", "scissors", "paper"];
  const [selected, setSelected] = useState("");

  const RandomSelect = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };
  const Choice = (UserChoice) => {
    if (UserChoice === "paper") {
      setUserChoice("paper");
      RandomSelect();
    } else if (UserChoice === "scissors") {
      setUserChoice("scissors");
      RandomSelect();
    } else if (UserChoice === "rock") {
      setUserChoice("rock");
      RandomSelect();
    }
  };

  function compare(humanGuess, computerGuess, CPUtotal, usertotal) {
    if (humanGuess === computerGuess) {
      return "The result is a tie!";
    }

    if (humanGuess === "rock") {
      if (computerGuess === "scissors") {
        // setValue(value + 1);
        return "You win  with rock wins";
      } else {
        // CPUtotal = CPUtotal + 5;
        // setCPUtotal((CPUtotal = 1));
        return " CPU paper wins";
      }
    }

    if (humanGuess === "paper") {
      if (computerGuess === "rock") {
        // setusertotal = usertotal + 1 / 2;
        return "You win with paper wins";
      } else {
        // setCPUtotal = CPUtotal + 1 / 2;
        return "CPU scissors wins";
      }
    }

    if (humanGuess === "scissors") {
      if (computerGuess === "rock") {
        // setusertotal = usertotal + 1 / 2;
        return "The CPU with rock wins";
      } else {
        // setCPUtotal = CPUtotal + 1 / 2;
        return "scissors wins";
      }
    }
  }

  return (
    <div className="App">
      <header className="Rock-paper-scissors">
        <h1>Rock Paper Scissors</h1>
        <p>Choose Rock, Paper, or Scissors to start playing</p>
        <button onClick={() => Choice("rock")}>Rock</button>
        <button onClick={() => Choice("scissors")}>Scissors</button>
        <button onClick={() => Choice("paper")}>Paper</button>
        <p>You chose: {UserChoice}</p>
        <p>CPU Chose: {anecdotes[selected]}</p>

        <p>winner:? {compare(UserChoice, anecdotes[selected])}</p>

        <p>Your total: {usertotal}</p>

        <p>CPU total: {CPUtotal}</p>
        <p>{value}</p>
        {/* <button onClick={RandomSelect}>Get Random</button>
        {anecdotes[selected]} */}
      </header>
    </div>
  );
}

export default App;

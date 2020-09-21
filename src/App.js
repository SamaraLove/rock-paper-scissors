import React, { useState } from "react";
import "./App.css";

function App() {
  const [usertotal, setusertotal] = useState(0);
  const [CPUtotal, setCPUtotal] = useState(0);
  const [Drawtotal, setDrawtotal] = useState(0);
  const [Overalltotal, setOveralltotal] = useState(0);

  const [UserChoice, setUserChoice] = useState("");
  const [CPUChoice, setCPUChoice] = useState("");

  const [GameMessage, setGameMessage] = useState("");
  const anecdotes = ["rock", "scissors", "paper"];

  const choices = [
    {
      selected: "rock",
      beats: ["scissors"],
      loses: ["paper"],
    },
    {
      selected: "scissors",
      beats: ["paper"],
      loses: ["rock"],
    },
    {
      selected: "paper",
      beats: ["rock"],
      loses: ["scissors"],
    },
    // {
    //   selected: "horse",
    //   beats: [],
    //   loses: ["rock", "paper", "scissors"],
    // },
  ];

  const RandomSelect = () => {
    const randomNumber = Math.floor(Math.random() * choices.length);
    setCPUChoice(randomNumber);
  };

  function compare(humanGuess, computerGuess) {
    let message;
    let userScore = usertotal;
    let cpuScore = CPUtotal;
    let drawScore = Drawtotal;
    let OverallScore = Overalltotal;

    const myChoice = choices.find((choice) => choice.selected === humanGuess);

    // {console.log(choices)}
    {
      /* {console.log(choices.selected)} */
    }
    {
      /* undefined */
    }
    // console.log("myChoice:", myChoice);
    // console.log("myChoice.selected:", myChoice.selected);
    // console.log("myChoice.beats:", myChoice.beats);
    // console.log("myChoice.loses:", myChoice.loses);
    // console.log("mCPU random:", choices[CPUChoice]); {/* undefined */}
    // console.log(myChoice.beats.includes("scissors"));

    OverallScore = Overalltotal + 1;

    if (myChoice.selected === computerGuess) {
      message = "The result is a tie!"; /* a delayed message?*/
      drawScore = Drawtotal + 1;
    } else {
      if (myChoice.selected === "rock") {
        if (computerGuess === "scissors") {
          if (myChoice.beats.includes("scissors")) {
            message = `You win with ${myChoice.selected}`;
            userScore = usertotal + 1;
          } else if (!myChoice.loses.includes("scissors")) {
            cpuScore = CPUtotal + 1;
            message = `CPU ${computerGuess} wins`;
          }
        }
        // else if (computerGuess === "paper") {
        //   if (myChoice.beats.includes("paper")) {
        //     message = `You win with ${myChoice.selected}`;
        //     userScore = usertotal + 1;
        //   } else if (!myChoice.loses.includes("paper")) {
        //     cpuScore = CPUtotal + 1;
        //     message = `CPU ${computerGuess} wins`;
        //   }
        // }
      }
    }

    setOveralltotal(OverallScore);
    setGameMessage(message);
    setusertotal(userScore);
    setDrawtotal(drawScore);
    setCPUtotal(cpuScore);
  }

  const Choice = (UserChoice) => {
    if (!UserChoice) {
      console.error("No user choice provided");
    }
    setUserChoice(UserChoice);
    compare(UserChoice, anecdotes[CPUChoice]);
    RandomSelect();
  };

  return (
    <div className="App">
      <header className="Rock-paper-scissors">
        <h1>Rock Paper Scissors</h1>
        <p>Choose Rock, Paper, or Scissors to start playing</p>

        {/* {choices.map((choice, key) => {
          return (
            <button onClick={() => Choice(choice)} key={key}>
              {choice}
            </button>
          );
        })} */}
        {anecdotes.map((choice, key) => {
          return (
            <button onClick={() => Choice(choice)} key={key}>
              {choice}
            </button>
          );
        })}
        <p>You chose: {UserChoice}</p>
        <p>CPU Chose: {anecdotes[CPUChoice]}</p>
        <p>winner:? {GameMessage}</p>
        <p>Total games played: {Overalltotal}</p>
        <p>Your total: {usertotal}</p>
        <p>CPU total: {CPUtotal}</p>
        <p>Draws total: {Drawtotal}</p>
      </header>
    </div>
  );
}

export default App;

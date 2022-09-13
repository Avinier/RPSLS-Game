import React from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Timer from "./components/Handlers/Timer";
import CompWheel from "./components/Wheels/CompWheel";
import PlayerWheel from "./components/Wheels/PlayerWheel";
import WinnerModal from "./components/Modals/WinnerModal";
import WheelContextProvider from "./store/WheelContextProvider";

const DATA = [
  {
    name: "scissors",
    id: 1,
  },
  {
    name: "paper",
    id: 2,
  },
  {
    name: "rock",
    id: 3,
  },
  {
    name: "lizard",
    id: 4,
  },
  {
    name: "spock",
    id: 5,
  },
];

function App() {
  return (
      <WheelContextProvider>
        <Timer/>
        <PlayerWheel data={DATA}/>
        <CompWheel/>
        <WinnerModal/>
        <Scoreboard/>
      </WheelContextProvider>
    );
}

export default App;
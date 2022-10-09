/*TODO:
-Production*/

import React, { useState,useEffect } from "react";
import classes from './App.module.css'
import Scoreboard from "./components/Scoreboard/Scoreboard";
import CompWheel from "./components/Wheels/CompWheel";
import PlayerWheel from "./components/Wheels/PlayerWheel";
import WinnerModal from "./components/Modals/WinnerModal";
import WheelContextProvider from "./store/WheelContextProvider";
import MainHandler from "./components/Handlers/MainHandler";
import Loading from "./components/Modals/LoadingModal";

import scisImage from "./assets/pngs/scissors-solid.png";
import spockImage from "./assets/pngs/atom-solid.png";
import rockImage from "./assets/pngs/hand-back-fist-solid.png";
import paperImage from "./assets/pngs/note-sticky-regular.png";
import lizardImage from "./assets/pngs/hand-lizard-solid.png";

import "./fonts/PublicPixel-z84yD.ttf"
import "./fonts/Robus-BWqOd.otf"

const DATA = [
  {
    name: "scissors",
    id: 1,
    test: <h1>hi</h1>,
    logo: scisImage
  },
  {
    name: "paper",
    id: 2,
    logo: paperImage

  },
  {
    name: "rock",
    id: 3,
    logo: rockImage

  },
  {
    name: "lizard",
    id: 4,
    logo: lizardImage

  },
  {
    name: "spock",
    id: 5,
    logo: spockImage

  },
];

function App() {
  const [isTriggred, setIsTriggered] = useState(false);
  const [randNum, setRandNum] = useState(Math.floor(Math.random() * 5))
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {    
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }, [])

  function triggerHandler() {
    setIsTriggered(true);
    setRandNum(Math.floor(Math.random() * 5))
    
    setTimeout(() => {
      setIsTriggered(false);
    }, 3000);
  };

  return (
      <WheelContextProvider>
        <body>
          {isLoading && <Loading/>}
          <h1>ROCK-PAPER-SCISSOR-LIZARD-SPOCK</h1>
          <section className={classes.app}>
            <div className={classes.body}>
              <PlayerWheel data={DATA}/>
              <MainHandler isTriggred={isTriggred} />
              <CompWheel data={DATA} num={randNum}/>
            </div>
          <WinnerModal clickHandler={triggerHandler}/>
          <Scoreboard/>
          </section>
        </body>
      </WheelContextProvider>
    );
}

export default App;

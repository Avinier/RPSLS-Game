import React from "react";

const WheelContext = React.createContext({
  playerIndex: 0,
  compIndex: 0,
  setPlayerIndex: () => {},
  setCompIndex: () => {},
  debug: () => {},
  scoreDataHandler: () => {},
  scoreData: {},
  score: () => {},
  round: 0,
});

export default WheelContext;

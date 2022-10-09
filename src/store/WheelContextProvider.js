import React, { useState, useEffect } from "react";
import WheelContext from "./wheel-context";

export default function WheelContextProvider(props) {
  const [dataIndex, setDataIndex] = useState(0);
  const [compDataIndex, setCompDataIndex] = useState(0);
  const [rounds, setRounds] = useState(1);
  const [scoreData, setScoreData] = useState({
    playerScore: 0,
    compScore: 0,
    playerWon: false,
    compWon: false,
  });
  const [winner, setWinner] = useState(false);
  const [winnerName, setWinnerName] = useState("");
  function scoreHandler() {
    if (compDataIndex === dataIndex) {
      console.log("Tie");
    } else if (
      compDataIndex === (dataIndex + 1) % 5 ||
      compDataIndex === (dataIndex + 3) % 5
    ) {
      setScoreData((scoreData) => ({
        ...scoreData,
        playerScore: scoreData.playerScore + 1,
        playerWon: true,
        compWon: false,
      }));
    } else {
      setScoreData((scoreData) => ({
        ...scoreData,
        compScore: scoreData.compScore + 1,
        playerWon: false,
        compWon: true,
      }));
    }
    console.log("score recorded");
    setRounds(rounds + 1);

    if (rounds === 9) {
      setWinner(true);

      setScoreData((scoreData) => ({
        ...scoreData,
        compScore: scoreData.compScore + 1,
        playerWon: false,
        compWon: false,
      }));

      if (scoreData.playerScore > scoreData.compScore) {
        setWinnerName("YOU!");
      } else {
        setWinnerName("COMPUTER :(");
      }
    }
  }

  function checker() {
    console.log("Player index: " + dataIndex);
    console.log("Computer Index: " + compDataIndex);
  }

  const wheelContext = {
    playerIndex: dataIndex,
    compIndex: compDataIndex,
    setPlayerIndex: setDataIndex,
    setCompIndex: setCompDataIndex,
    debug: checker,
    scoreDataHandler: setScoreData,
    scoreData: scoreData,
    score: scoreHandler,
    round: rounds,
    finalWinner: winner,
    winnerName: winnerName,
  };

  return (
    <WheelContext.Provider value={wheelContext}>
      {props.children}
    </WheelContext.Provider>
  );
}

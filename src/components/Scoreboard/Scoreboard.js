import { useContext, useEffect, useState } from "react";
import WheelContext from "../../store/wheel-context";

export default function Scoreboard() {
  const scoreCtx = useContext(WheelContext);

  const playScore = scoreCtx.scoreData.playerScore;
  const compuScore = scoreCtx.scoreData.compScore;
  const rounds = scoreCtx.round;

  return (
    <div>
      <h3>Round {rounds} of 10</h3>
      <p>Player Score: {playScore}</p>
      <p>Computer Score: {compuScore}</p>
    </div>
  );
}

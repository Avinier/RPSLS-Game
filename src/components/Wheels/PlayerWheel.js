import React, { useContext, useEffect, useState } from "react";
import WheelContext from "../../store/wheel-context";
import Wheel from "../UI/Wheel";
import classes from "./PlayerWheel.module.css";

export default function PlayerWheel(props) {
  const playerCtx = useContext(WheelContext);

  const modeData = props.data;
  const [mode, setMode] = useState(modeData[playerCtx.playerIndex]);

  useEffect(() => {
    setMode(modeData[playerCtx.playerIndex]);
  }, [playerCtx.playerIndex]);

  function decHandler() {
    playerCtx.setPlayerIndex(playerCtx.playerIndex - 1);
    playerCtx.debug();

    if (playerCtx.playerIndex === 0) {
      playerCtx.setPlayerIndex(4);
    }
  }

  function incHandler() {
    playerCtx.setPlayerIndex(playerCtx.playerIndex + 1);
    playerCtx.debug();

    if (playerCtx.playerIndex === 4) {
      playerCtx.setPlayerIndex(0);
    }
  }

  return (
    <Wheel>
      <button
        onClick={decHandler}
        className={`${classes.btn} ${classes.incBtn}`}
      >
        -
      </button>
      <img src={mode.logo} className={classes.images} />
      <p className={classes.content}>{mode.name}</p>
      <button
        onClick={incHandler}
        className={`${classes.btn} ${classes.decBtn}`}
      >
        +
      </button>
    </Wheel>
  );
}

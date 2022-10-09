import React, { useContext, useEffect, useState } from "react";
import WheelContext from "../../store/wheel-context";
import Wheel from "../UI/Wheel";
import classes from "./PlayerWheel.module.css";

import uparrow from "../../assets/pngs/arrow-up.png";
import downarrow from "../../assets/pngs/arrow-down.png";

import { motion, AnimatePresence } from "framer-motion";

export default function PlayerWheel(props) {
  const playerCtx = useContext(WheelContext);

  const modeData = props.data;
  const [mode, setMode] = useState(modeData[playerCtx.playerIndex]);

  const [translate, setTranslate] = useState(0);

  useEffect(() => {
    setMode(modeData[playerCtx.playerIndex]);
  }, [playerCtx.playerIndex]);

  function decHandler() {
    playerCtx.setPlayerIndex(playerCtx.playerIndex - 1);
    playerCtx.debug();

    if (playerCtx.playerIndex === 0) {
      playerCtx.setPlayerIndex(4);
    }

    setTranslate(-2);

    setTimeout(() => {
      setTranslate(0);
    }, 250);
  }

  function incHandler() {
    playerCtx.setPlayerIndex(playerCtx.playerIndex + 1);
    playerCtx.debug();

    if (playerCtx.playerIndex === 4) {
      playerCtx.setPlayerIndex(0);
    }
    setTranslate(2);

    setTimeout(() => {
      setTranslate(0);
    }, 250);
  }

  return (
    <Wheel>
      <motion.button
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 5,
          duration: 0.5,
        }}
        whileTap={{ scale: 1.5 }}
        onClick={decHandler}
        className={`${classes.btn} ${classes.incBtn}`}
      >
        <img className={classes.btnimage} src={uparrow} />
      </motion.button>
      <motion.img
        src={mode.logo}
        className={classes.images}
        animate={{ translateY: `${translate}vh` }}
        transition={{
          duration: 0.2,
        }}
      />
      <p className={classes.content}>{mode.name}</p>
      <motion.button
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 5,
          duration: 0.5,
        }}
        whileTap={{ scale: 1.5 }}
        onClick={incHandler}
        className={`${classes.btn} ${classes.decBtn}`}
      >
        <img className={classes.btnimage} src={downarrow} />
      </motion.button>
    </Wheel>
  );
}

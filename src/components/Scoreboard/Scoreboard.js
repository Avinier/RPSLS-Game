import { useContext, useEffect, useState } from "react";
import WheelContext from "../../store/wheel-context";
import classes from "./Scoreboard.module.css";

import { motion, AnimatePresence } from "framer-motion";

export default function Scoreboard() {
  const scoreCtx = useContext(WheelContext);
  const [animate, setAnimate] = useState(false);

  const playScore = scoreCtx.scoreData.playerScore;
  const compuScore = scoreCtx.scoreData.compScore;
  const rounds = scoreCtx.round;

  useEffect(() => {
    if (rounds > 0) setAnimate(true);

    const timer = setTimeout(() => {
      setAnimate(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [rounds, playScore, compuScore]);

  const scorevariants = {
    active: {
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.7,
      },
      damping: 25,
      stifness: 600,
      scale: 1.1,
    },
  };

  return (
    <div className={classes.scoreboard}>
      <motion.h3 variants={scorevariants} animate={animate ? "active" : ""}>
        Round {rounds} of 10
      </motion.h3>

      <motion.div className={classes.scores}>
        <motion.div className={classes.playerscore}>Player Score</motion.div>
        <motion.div
          variants={scorevariants}
          animate={animate ? "active" : ""}
          className={classes.scorenum}
        >
          <motion.div>{playScore}</motion.div>
          <motion.div>{compuScore}</motion.div>
        </motion.div>

        <motion.div className={classes.compscore}>Computer Score</motion.div>
      </motion.div>
    </div>
  );
}

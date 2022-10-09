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
      <motion.h3
        variants={scorevariants}
        animate={animate ? "active" : ""}
        transition={{ delay: 1 }}
        className={classes.rounds}
      >
        Round {rounds} of 10
      </motion.h3>

      <motion.div
        className={classes.scores}
        whileHover={{
          backgroundColor: "#FF8B6A",
          boxShadow: "#f09a5d 0 10px 20px -10px",
          scale: 1.1,
        }}
      >
        <motion.div className={classes.playerscore}>Player Score</motion.div>
        <motion.div
          variants={scorevariants}
          animate={animate ? "active" : ""}
          transition={{ delay: 1 }}
          className={classes.scorenum}
        >
          <motion.div className={classes.playScore}>{playScore}</motion.div>
          <motion.div className={classes.compuScore}>{compuScore}</motion.div>
        </motion.div>

        <motion.div className={classes.compscore}>Computer Score</motion.div>
      </motion.div>
    </div>
  );
}

import React, { useEffect } from "react";
import Countdown from "react-countdown";
import timerClass from "./Timer.module.css";

import { motion } from "framer-motion";

export function TimerContent() {
  return <motion.div className={timerClass.content}>TIME UP!</motion.div>;
}
export default function Timer() {
  function renderHandler({ seconds, minutes, completed }) {
    if (completed) {
      return <TimerContent />;
    } else {
      return (
        <motion.div
          animate={{ scale: [1.5, 2, 1] }}
          transition={{ type: "spring", stiffness: 500, damping: 5 }}
          className={timerClass.secs}
        >
          {seconds}
        </motion.div>
      );
    }
  }

  return (
    <motion.div className={timerClass.timerring}>
      <motion.div
        className={timerClass.timerbody}
        layout
        animate={{
          rotate: [0, 90, 180, 180, 0],
          borderRadius: ["50%", "50%", "0%", "0%"],
        }}
        whileHover={{
          backgroundColor: "#FF8B6A",
          boxShadow: "#f09a5d 0 10px 20px -10px",
          scale: 1.2,
        }}
      >
        <Countdown
          date={Date.now() + 5000}
          className={timerClass.timer}
          renderer={renderHandler}
          autoStart={true}
        ></Countdown>
      </motion.div>
    </motion.div>
  );
}

import React from "react";
import Countdown from "react-countdown";
import timerClass from "./Timer.module.css";

import { motion } from "framer-motion";

export function TimerContent() {
  return <motion.div className={timerClass.content}>TIME UP!</motion.div>;
}
export default function Timer() {
  return (
    <motion.div
      className={timerClass.timerbody}
      animate={{
        scale: [1, 1.5, 1.5, 1],
        rotate: [0, 90, 180, 180, 0],
        borderRadius: ["50%", "50%", "0%", "0%"],
      }}
    >
      <Countdown date={Date.now() + 5000} className={timerClass.timer}>
        <TimerContent />
      </Countdown>
    </motion.div>
  );
}

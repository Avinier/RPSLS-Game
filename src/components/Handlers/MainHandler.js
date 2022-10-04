import React, { useContext, useEffect, useState } from "react";
import WheelContext from "../../store/wheel-context";
import Timer from "./Timer";
import classes from "./MainHandler.module.css";

import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: {
    y: "-100vh",
  },
  visible: {
    y: "0",
    transition: 0.1,
    type: "spring",
    damping: 25,
    stifness: 500,
  },
  exit: { y: "100vh" },
};
function StartPopup() {
  return (
    <motion.div
      className={classes.popup}
      variants={variants}
      initial="enter"
      animate="visible"
      exit="exit"
    >
      Start!
    </motion.div>
  );
}

export default function MainHandler(props) {
  const [isStarted, setIsStarted] = useState(false);
  const handlerCtx = useContext(WheelContext);

  function clickHandler() {
    setIsStarted(true);
    handlerCtx.score();
  }

  return (
    <AnimatePresence>
      initial={false}
      exitBeforeEnter={true}
      <motion.div className={classes.mainhandler}>
        {props.isTriggred && <StartPopup />}
        <Timer />
        <motion.button
          whileHover={{
            backgroundColor: "#f09a5d",
            boxShadow: "#f09a5d 0 10px 20px -10px",
            scale: 1.2,
          }}
          transition={{ type: "spring", stiffness: 500, damping: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={clickHandler}
          className={classes.btn}
        >
          {!isStarted ? `Start` : `Continue`}
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}

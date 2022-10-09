import classes from "./Wheel.module.css";
import { motion } from "framer-motion";

export default function Wheel(props) {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 3 }}
      loop
      className={classes.wheelouter}
    >
      <motion.div className={classes.wheel}>{props.children}</motion.div>
      <div className={classes.wheelshadow}></div>
    </motion.div>
  );
}

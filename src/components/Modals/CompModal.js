import { Fragment, useContext } from "react";
import WheelContext from "../../store/wheel-context";
import Modal from "../UI/Modal";

import { motion } from "framer-motion";

export default function CompModal(props) {
  const compModalCtx = useContext(WheelContext);

  function closeCompModal() {
    compModalCtx.scoreDataHandler((scoreData) => ({
      ...scoreData,
      compWon: false,
    }));
    props.clickHandler();
  }

  return (
    <Modal>
      <h1>COMPUTER WINS</h1>
      <motion.button
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500, damping: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={closeCompModal}
      >
        OK
      </motion.button>
    </Modal>
  );
}

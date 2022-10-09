import { useContext } from "react";
import WheelContext from "../../store/wheel-context";
import Modal from "../UI/Modal";

import { motion } from "framer-motion";

export default function PlayerModal(props) {
  const playerModalCtx = useContext(WheelContext);

  function closePlayerModal() {
    playerModalCtx.scoreDataHandler((scoreData) => ({
      ...scoreData,
      playerWon: false,
    }));
    props.clickHandler();
  }

  return (
    <Modal bg={"#000000bf"}>
      <h1>PLAYER WINS!</h1>
      <motion.button
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 500, damping: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={closePlayerModal}
      >
        OK
      </motion.button>
    </Modal>
  );
}

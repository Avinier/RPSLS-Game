import { Fragment, useContext } from "react";
import WheelContext from "../../store/wheel-context";
import Modal from "../UI/Modal";

export default function PlayerModal() {
  const playerModalCtx = useContext(WheelContext);

  function closePlayerModal() {
    playerModalCtx.scoreDataHandler((scoreData) => ({
      ...scoreData,
      playerWon: false,
    }));
  }

  return (
    <Modal>
      <h1>PLAYER WINS!</h1>
      <button onClick={closePlayerModal}>ok</button>
    </Modal>
  );
}

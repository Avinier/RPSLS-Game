import { Fragment, useContext } from "react";
import WheelContext from "../../store/wheel-context";
import Modal from "../UI/Modal";

export default function CompModal() {
  const compModalCtx = useContext(WheelContext);

  function closeCompModal() {
    compModalCtx.scoreDataHandler((scoreData) => ({
      ...scoreData,
      compWon: false,
    }));
  }

  return (
    <Modal>
      <h1>COMPUTER WINS</h1>
      <button onClick={closeCompModal}>ok</button>
    </Modal>
  );
}

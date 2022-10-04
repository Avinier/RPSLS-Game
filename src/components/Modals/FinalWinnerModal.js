import { Fragment, useContext } from "react";
import WheelContext from "../../store/wheel-context";
import Modal from "../UI/Modal";

export default function FinalWinnerModal() {
  const winnerModalCtx = useContext(WheelContext);
  const winner = winnerModalCtx.winnerName;

  return (
    <Modal>
      <h1>FINAL WINNER IS {winner}</h1>
      <button onClick={() => window.location.reload()}>NEW GAME</button>
    </Modal>
  );
}

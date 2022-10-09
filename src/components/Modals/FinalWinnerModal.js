import { useContext } from "react";
import WheelContext from "../../store/wheel-context";
import Modal from "../UI/Modal";
import classes from "./FinalWinner.module.css";

export default function FinalWinnerModal() {
  const winnerModalCtx = useContext(WheelContext);
  const winner = winnerModalCtx.winnerName;

  return (
    <Modal bg={"#000000bf"}>
      <div className={classes.modal}>
        <h1>FINAL WINNER IS {winner}</h1>
        <button onClick={() => window.location.reload()}>NEW GAME</button>
      </div>
    </Modal>
  );
}

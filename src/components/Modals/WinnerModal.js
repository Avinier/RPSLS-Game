import React, { Fragment, useContext } from "react";
import CompModal from "./CompModal";
import PlayerModal from "./PlayerModal";
import WheelContext from "../../store/wheel-context";
import FinalWinnerModal from "./FinalWinnerModal";

export default function WinnerModal(props) {
  const modalCtx = useContext(WheelContext);

  const hasPlayerWon = modalCtx.scoreData.playerWon;
  const hasCompWon = modalCtx.scoreData.compWon;
  const finalWinner = modalCtx.finalWinner;

  return (
    <Fragment>
      {hasPlayerWon && <PlayerModal clickHandler={props.clickHandler} />}
      {hasCompWon && <CompModal clickHandler={props.clickHandler} />}
      {finalWinner && <FinalWinnerModal />}
    </Fragment>
  );
}

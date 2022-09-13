import React, { Fragment, useContext } from "react";
import CompModal from "./Modals/CompModal";
import PlayerModal from "./Modals/PlayerModal";
import WheelContext from "../store/wheel-context";

export default function WinnerModal() {
  const modalCtx = useContext(WheelContext);

  const hasPlayerWon = modalCtx.scoreData.playerWon;
  const hasCompWon = modalCtx.scoreData.compWon;

  return (
    <Fragment>
      {hasPlayerWon && <PlayerModal />}
      {hasCompWon && <CompModal />}
    </Fragment>
  );
}

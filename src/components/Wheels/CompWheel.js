import { useContext, useEffect, useState } from "react";
import WheelContext from "../../store/wheel-context";
import Wheel from "../UI/Wheel";

export default function CompWheel() {
  const compCtx = useContext(WheelContext);

  useEffect(() => {});

  function clicki() {
    compCtx.setCompIndex(Math.floor(Math.random() * 5));
  }

  return (
    <div>
      <Wheel />
      <button onClick={clicki}>LOLOL</button>
    </div>
  );
}

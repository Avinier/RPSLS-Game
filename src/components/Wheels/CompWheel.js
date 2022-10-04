import { useContext, useEffect, useState } from "react";
import WheelContext from "../../store/wheel-context";
import Wheel from "../UI/Wheel";
import classes from "./CompWheel.module.css";

export default function CompWheel(props) {
  const compCtx = useContext(WheelContext);

  const modeData = props.data;
  const [mode, setMode] = useState(modeData[compCtx.compIndex]);

  useEffect(() => {
    compCtx.setCompIndex(Math.floor(Math.random() * 5));
    setMode(modeData[compCtx.compIndex]);
    console.log("yo");
  });

  return (
    <div>
      <Wheel>
        <img src={mode.logo} className={classes.images} />
        <p className={classes.content}>{mode.name}</p>
      </Wheel>
    </div>
  );
}

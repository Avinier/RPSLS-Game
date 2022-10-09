import { useContext, useEffect, useState } from "react";
import WheelContext from "../../store/wheel-context";
import Wheel from "../UI/Wheel";
import classes from "./CompWheel.module.css";
import ReactLoading from "react-loading";

export default function CompWheel(props) {
  const compCtx = useContext(WheelContext);

  const index = compCtx.compIndex;
  const indexSetter = compCtx.setCompIndex;
  const modeData = props.data;

  const [mode, setMode] = useState(modeData[index]);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    indexSetter(props.num);
    setMode(modeData[index]);

    setReveal(false);

    setTimeout(() => {
      setReveal(true);
    }, 5000);
  }, [index, props.num]);

  return (
    <Wheel>
      {reveal && (
        <div>
          <img src={mode.logo} className={classes.images} />
          <p className={classes.content}>{mode.name}</p>
        </div>
      )}
      {!reveal && (
        <div className={classes.reveal}>
          <ReactLoading
            type="spinningBubbles"
            color="#000"
            width={"150px"}
            height={"150px"}
          ></ReactLoading>
          <p>?</p>
        </div>
      )}
    </Wheel>
  );
}

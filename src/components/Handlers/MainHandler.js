import React, { Fragment } from "react";
import Timer from "./Timer";

function StartPopup() {
  return <div>Start!</div>;
}

export default function MainHandler() {
  function clickHandler() {}

  return (
    <Fragment>
      <button onClick={clickHandler}>Continue</button>;
      <Timer />
    </Fragment>
  );
}

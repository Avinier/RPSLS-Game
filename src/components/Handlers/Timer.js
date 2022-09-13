import React from "react";
import Countdown from "react-countdown";

export default function Timer() {
  return <Countdown date={Date.now() + 5000} />;
}

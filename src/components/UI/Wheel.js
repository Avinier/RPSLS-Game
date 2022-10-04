import classes from "./Wheel.module.css";

export default function Wheel(props) {
  return <div className={classes.wheel}>{props.children}</div>;
}

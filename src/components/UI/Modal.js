import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

export function Backdrop(props) {
  return (
    <div
      className={classes.backdrop}
      style={{ backgroundColor: `${props.bgColor}` }}
    ></div>
  );
}

export function ModalOverlay(props) {
  return <div className={classes.modal}>{props.children}</div>;
}

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop bgColor={props.bg} />, portalElement)}

      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

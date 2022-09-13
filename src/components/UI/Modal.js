import React, { Fragment } from "react";
import ReactDOM from "react-dom";

export function ModalOverlay(props) {
  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

import React from "react";
import ReactLoading from "react-loading";
import Modal from "../UI/Modal";

export default function Loading() {
  return (
    <Modal bg={"#111"}>
      <h1
        style={{
          fontFamily: "Title",
          color: "#f09a5d",
          width: "fit-content",
          padding: "60px 200px",
          margin: "0 auto",
          color: "aliceblue",
          textShadow: "0 0 20px #f9d5cc, 0 0 50px #e60073, 0 0 60px #e60073",
        }}
      >
        Loading
      </h1>
      <ReactLoading
        type="bars"
        color="#e60073"
        height={"500px"}
        width={"100px"}
      ></ReactLoading>
    </Modal>
  );
}

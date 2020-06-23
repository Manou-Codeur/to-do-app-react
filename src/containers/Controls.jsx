import React from "react";

import AddBtn from "../components/AddBtn";
// import Input from "../components/Input";

import "../components/components.css";

const Controls = props => {
  return (
    <div className="controls">
      <input
        type="text"
        className="form-control"
        aria-describedby="emailHelp"
        id="myInput"
      />
      <AddBtn onAdd={props.onAdd2} />
    </div>
  );
};

export default Controls;

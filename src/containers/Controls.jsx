import React from "react";

import AddBtn from "../components/AddBtn";
import "../components/components.css";

const Controls = () => {
  return (
    <div className="controls">
      <input
        type="text"
        className="form-control"
        aria-describedby="emailHelp"
        id="myInput"
      />
      <AddBtn />
    </div>
  );
};

export default Controls;

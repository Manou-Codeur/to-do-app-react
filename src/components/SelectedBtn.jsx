import React from "react";

const SelectedBtn = props => {
  return (
    <button type="button" className="btn btn-warning" onClick={props.onSelect1}>
      Done
    </button>
  );
};

export default SelectedBtn;

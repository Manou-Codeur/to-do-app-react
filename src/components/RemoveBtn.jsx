import React from "react";

const RemoveBtn = props => {
  return (
    <button type="button" className="btn btn-danger" onClick={props.removeBtn}>
      Remove
    </button>
  );
};

export default RemoveBtn;

import React from "react";

const AddBtn = props => {
  return (
    <button type="button" className="btn btn-primary" onClick={props.onAdd}>
      Add
    </button>
  );
};

export default AddBtn;

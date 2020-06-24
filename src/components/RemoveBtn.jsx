import React, { useContext } from "react";

import ContextApi from "../containers/ContextApi";

const RemoveBtn = () => {
  const myContext = useContext(ContextApi);

  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={myContext.onHandleDelet}
    >
      Remove
    </button>
  );
};

export default RemoveBtn;

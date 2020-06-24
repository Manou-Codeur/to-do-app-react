import React, { useContext, useEffect } from "react";

import ContextApi from "../containers/ContextApi";

const RemoveBtn = () => {
  const myContext = useContext(ContextApi);
  useEffect(() => {
    /*this is test*/
  }, []);

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

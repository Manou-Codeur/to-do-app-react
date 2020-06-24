import React, { useContext, useEffect } from "react";

import ContextApi from "../containers/ContextApi";

const SelectedBtn = () => {
  const myContext = useContext(ContextApi);
  useEffect(() => {
    /*this is test*/
  }, []);

  return (
    <button
      type="button"
      className="btn btn-warning"
      onClick={myContext.onHandleSelect}
    >
      Done
    </button>
  );
};

export default SelectedBtn;

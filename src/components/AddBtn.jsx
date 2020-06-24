import React, { useContext, useEffect } from "react";

import ContextApi from "../containers/ContextApi";

const AddBtn = () => {
  const myContext = useContext(ContextApi);
  useEffect(() => {
    /*this is test*/
  }, []);

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={myContext.onHandleAdd}
    >
      Add
    </button>
  );
};

export default AddBtn;

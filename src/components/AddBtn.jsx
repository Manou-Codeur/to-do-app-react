import React, { useContext } from "react";

import ContextApi from "../containers/ContextApi";

const AddBtn = () => {
  const myContext = useContext(ContextApi);

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

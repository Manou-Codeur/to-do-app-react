import React, { Component } from "react";

import ContextApi from "../containers/ContextApi";

class AddBtn extends Component {
  static contextType = ContextApi;

  render() {
    return (
      <button
        type="button"
        className="btn btn-primary"
        onClick={this.context.onHandleAdd}
      >
        Add
      </button>
    );
  }
}

export default AddBtn;

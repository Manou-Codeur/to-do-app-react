import React, { Component } from "react";

import ContextApi from "../containers/ContextApi";

class RemoveBtn extends Component {
  static contextType = ContextApi;

  render() {
    return (
      <button
        type="button"
        className="btn btn-danger"
        onClick={this.context.onHandleDelet}
      >
        Remove
      </button>
    );
  }
}

export default RemoveBtn;

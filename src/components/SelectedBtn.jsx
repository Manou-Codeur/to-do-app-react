import React, { Component } from "react";

import ContextApi from "../containers/ContextApi";

class SelectedBtn extends Component {
  static contextType = ContextApi;

  render() {
    return (
      <button
        type="button"
        className="btn btn-warning"
        onClick={this.context.onHandleSelect}
      >
        Done
      </button>
    );
  }
}

export default SelectedBtn;

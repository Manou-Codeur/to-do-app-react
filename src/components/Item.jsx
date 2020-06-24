import React, { Component } from "react";

import RemoveBtn from "./RemoveBtn";
import SelectedBtn from "./SelectedBtn";

class Item extends Component {
  state = {
    class: "filled",
  };

  render() {
    return (
      <div className="Item" id={this.props.itemData.id}>
        <p className={this.state.class}>{this.props.itemData.name}</p>
        <RemoveBtn />
        <SelectedBtn />
      </div>
    );
  }
}

export default Item;

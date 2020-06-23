import React, { Component } from "react";

import RemoveBtn from "./RemoveBtn";
import SelectedBtn from "./SelectedBtn";

class Item extends Component {
  state = {
    class: "filled",
  };

  handleSelect = () => {
    let classClone = this.state.class;
    if (classClone.includes("selected")) classClone = "filled";
    else classClone += " selected";
    this.setState({ class: classClone });
  };

  render() {
    return (
      <div className="Item">
        <p className={this.state.class}>{this.props.itemData.name}</p>
        <RemoveBtn removeBtn={this.props.removeBtn2} />
        <SelectedBtn onSelect1={this.handleSelect} />
      </div>
    );
  }
}

export default Item;

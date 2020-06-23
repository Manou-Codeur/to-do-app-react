import React, { Component } from "react";

import Controls from "./containers/Controls";
import Items from "./containers/Items";
// import ContextApi from "./containers/ContextApi";

class App extends Component {
  state = {
    data: [],
  };

  handleAdd = e => {
    const input = e.target.parentNode.childNodes[0];
    const inputValue = input.value;
    const dataClone = [...this.state.data];
    if (input.value.trim() !== "") {
      dataClone.push({ name: inputValue, id: new Date().getMilliseconds() });
      this.setState({ data: dataClone });
      input.value = "";
      input.focus();
    }
  };

  handleDelete = id => {
    const dataClone = [...this.state.data];
    const index = dataClone.findIndex(el => el.id === id);
    dataClone.splice(index, 1);
    this.setState({ data: dataClone });
  };

  render() {
    return (
      <div className="app">
        <Controls onAdd2={this.handleAdd} />
        <Items data={this.state.data} onDelete2={this.handleDelete} />
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

import Controls from "./containers/Controls";
import Items from "./containers/Items";
import ContextApi from "./containers/ContextApi";

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    document.addEventListener("keypress", e =>
      e.keyCode === 13 ? this.handleAdd(e) : null
    );
  }

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
      <ContextApi.Provider
        value={{
          onHandleAdd: this.handleAdd,
          onHandleDelet: this.handleDelete,
        }}
      >
        <div className="app">
          <Controls />
          <Items data={this.state.data} onDelete2={this.handleDelete} />
        </div>
      </ContextApi.Provider>
    );
  }
}

export default App;

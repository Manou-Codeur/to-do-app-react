import React from "react";

import RemoveBtn from "./RemoveBtn";
import SelectedBtn from "./SelectedBtn";

const Item = props => {
  return (
    <div className="Item" id={props.itemData.id}>
      <p className="filled">{props.itemData.name}</p>
      <RemoveBtn />
      <SelectedBtn />
    </div>
  );
};

export default Item;

import React, { useEffect } from "react";

import RemoveBtn from "./RemoveBtn";
import SelectedBtn from "./SelectedBtn";

const Item = props => {
  useEffect(() => {
    /*this is test*/
  }, []);

  return (
    <div className="Item" id={props.itemData.id}>
      <p className="filled">{props.itemData.name}</p>
      <RemoveBtn />
      <SelectedBtn />
    </div>
  );
};

export default Item;

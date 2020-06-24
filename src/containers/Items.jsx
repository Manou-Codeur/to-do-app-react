import React from "react";

import Item from "../components/Item";

const Items = props => {
  return (
    <div className="Items">
      {props.data.map(els => (
        <Item
          key={els.id}
          itemData={els}
          // removeBtn2={() => props.onDelete2(els.id)}
        />
      ))}
    </div>
  );
};

export default Items;

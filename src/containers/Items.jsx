import React, { useEffect } from "react";

import Item from "../components/Item";

const Items = props => {
  useEffect(() => {
    /*this is test*/
  }, []);

  return (
    <div className="Items">
      {props.data.map(els => (
        <Item key={els.id} itemData={els} />
      ))}
    </div>
  );
};

export default Items;

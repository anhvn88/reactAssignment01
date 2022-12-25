import React from "react";

import "./TypeItem.css";

const TypeItems = (props) => {
  return (
    <div>
      <img src={props.image} alt="" />
      <div className="TypeName">
        <h4>{props.name}</h4>
        <p className="countType">{props.count}</p>
      </div>
    </div>
  );
};
export default TypeItems;

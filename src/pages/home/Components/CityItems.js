import React from "react";

import "./CityItem.css";

const CityItems = (props) => {
  return (
    <div className="cityImage">
      <img src={props.image} alt="" />
      <div className="cityName">
        <div>{props.name}</div>
        <div>{props.subText}</div>
      </div>
    </div>
  );
};
export default CityItems;

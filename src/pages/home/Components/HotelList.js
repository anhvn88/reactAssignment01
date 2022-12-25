import React from "react";

import "./HotelList.css";

const HotelList = (props) => {
  return (
    <div className="hotel">
      <div className="hotelImage">
        <img src={props.image_url} alt="" />
      </div>
      <div>
        <div>{props.name}</div>
        <div>{props.city}</div>
        <div>
          <h4>Staring From ${props.price}</h4>
        </div>
        <div className="hotelRate">
          <div className="hotelRateItem">{props.rate}</div>
          <div>{props.type}</div>
        </div>
      </div>
    </div>
  );
};
export default HotelList;

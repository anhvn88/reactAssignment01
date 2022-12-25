import React from "react";

import "./DetailItem.css";

const DetailItem = (props) => {
  const photoItems = props.photos;
  const photoList = photoItems.map((photoItem) => (
    <img src={photoItem} alt="" />
  ));

  return (
    <div className="itemDetail">
      <div className="detailName">
        <h2>{props.name}</h2>
        <button>Reserve or Book Now!</button>
      </div>
      <div className="detailAddress">{props.address}</div>
      <div className="detailDistance">{props.distance}</div>
      <div className="detailPrice">{props.price}</div>
      <div className="detailPhoto">{photoList}</div>
      <div className="detailMid">
        <div className="detailTitle">
          <h2>{props.title}</h2>
          <div className="detailDescription">{props.description}</div>
        </div>
        <div className="detailItem">
          <h3>Perfect for a 9-night stay!</h3>
          <div className="detailContent">
            Located in the real heart of Krakow, this property has an excellent
            location score of 9.8!
          </div>
          <div className="detailNine">
            <div className="detailNight">${props.nine_night_price}</div>
            <div className="detail9">(9 nights)</div>
          </div>
          <button>Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
};

export default DetailItem;

import React from "react";

import "./SearchContent.css";

const SearchContent = (props) => {
  const detailButton = () => {
    window.location.replace("./pages/detail/Detail");
  };

  return (
    <div className="searchItems">
      <div className="searchImage">
        <img src={props.image_url} alt="" />
      </div>
      <div className="searchName">
        <h2>{props.name}</h2>

        <div className="searchCenter">{props.distance} from center</div>
        <div className="searchTag">{props.tag}</div>
        <div className="searchDescription">{props.description}</div>
        <div className="searchType">{props.type}</div>
        <div className="searchFree">
          {props.free_cancel ? "Free Cancellation" : ""}
        </div>
        <div
          className="searchFreeItem"
          // style={props.free_cancel ? "" : { color: "white" }}
        >
          {props.free_cancel
            ? "You can cancel later, so lock in this great price today!"
            : "You can't cancel later, so lock in this great price today!"}
        </div>
      </div>
      <div className="searchEnd">
        <div className="searchRateItem">
          <h3 className="searchText">{props.rate_text} </h3>
          <div className="searchRate">{props.rate}</div>
        </div>
        <div className="searchPrice">${props.price}</div>
        <div>Includes taxes and fees</div>
        <button className="searchBtn" onClick={detailButton}>
          See availability
        </button>
      </div>
    </div>
  );
};

export default SearchContent;

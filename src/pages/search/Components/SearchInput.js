import React from "react";

import SearchContent from "./SearchContent";

import "./SearchInput.css";

const SearchInput = () => {
  const SearchItems = [
    {
      name: "Tower Street Apartments",
      distance: "500m",
      tag: "Free airport taxi",
      type: "Entire studio • 1 bathroom • 21m² 1 full bed",
      description: "Studio Apartment with Air conditioning",
      free_cancel: true,
      price: 112,
      rate: 8.9,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      distance: "200m",
      tag: "Free Breakfast",
      type: "Entire studio • 2 bathroom • 100m² 2 full bed",
      description: "Studio Apartment",
      free_cancel: true,
      price: 140,
      rate: 9.3,
      rate_text: "Exceptional",
      image_url: "./images/hotel_search_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      distance: "100m",
      tag: "Free Parking",
      type: "1 bathroom • 51m² 2 full bed",
      description: "Hotel in Lisbon",
      free_cancel: false,
      price: 99,
      rate: 8.8,
      rate_text: "Excellent",
      image_url: "./images/hotel_search_3.jpg",
    },
  ];

  return (
    <div className="SearchTool">
      <div className="searchInput">
        <h3>Search</h3>
        <h5>Destination</h5>
        <div className="searchDest">
          <input />
        </div>
        <h5>Check-in Date</h5>
        <div className="searchDest">
          <input placeholder="06/24/2022 to 06/24/2022" />
        </div>
        <h5>Options</h5>
        <div className="searchMin">
          Min price per night <input />
        </div>
        <div className="searchMax">
          Max price per night <input />
        </div>
        <div className="searchAdult">
          Adult <input placeholder="1" />
        </div>
        <div className="searchChild">
          Children <input placeholder="0" />
        </div>
        <div className="searchRoom">
          Room <input placeholder="1" />
        </div>
        <button className="buttonSearch">Search</button>
      </div>
      <div className="SearchContent">
        {SearchItems.map((SearchItem) => (
          <SearchContent
            key={SearchItem.id}
            image_url={SearchItem.image_url}
            name={SearchItem.name}
            distance={SearchItem.distance}
            type={SearchItem.type}
            tag={SearchItem.tag}
            description={SearchItem.description}
            free_cancel={SearchItem.free_cancel}
            price={SearchItem.price}
            rate={SearchItem.rate}
            rate_text={SearchItem.rate_text}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchInput;

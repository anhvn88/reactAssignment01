import React from "react";

import CityItems from "./CityItems";
import TypeItems from "./TypeItems";
import HotelList from "./HotelList";
//import FooterItem from "./FooterItem";
import Footer from "./Footer";

import "./CityItems";

const City = (props) => {
  const cityItems = [
    {
      name: "Dublin",
      subText: "123 properties",
      image: "./images/city_1.webp",
    },
    {
      name: "Reno",
      subText: "533 properties",
      image: "./images/city_2.webp",
    },
    {
      name: "Austin",
      subText: "532 properties",
      image: "./images/city_3.webp",
    },
  ];
  const typeItem = [
    {
      name: "Hotels",
      count: 233,
      image: "./images/type_1.webp",
    },
    {
      name: "Apartments",
      count: 2331,
      image: "./images/type_2.jpg",
    },
    {
      name: "Resorts",
      count: 2331,
      image: "./images/type_3.jpg",
    },
    {
      name: "Villas",
      count: 2331,
      image: "./images/type_4.jpg",
    },
    {
      name: "Cabins",
      count: 2331,
      image: "./images/type_5.jpg",
    },
  ];
  const hotelLists = [
    {
      name: "Aparthotel Stare Miasto",
      city: "Madrid",
      price: 120,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_1.webp",
    },
    {
      name: "Comfort Suites Airport",
      city: "Austin",
      price: 140,
      rate: 9.3,
      type: "Exceptional",
      image_url: "./images/hotel_2.jpg",
    },
    {
      name: "Four Seasons Hotel",
      city: "Lisbon",
      price: 99,
      rate: 8.8,
      type: "Excellent",
      image_url: "./images/hotel_3.jpg",
    },
    {
      name: "Hilton Garden Inn",
      city: "Berlin",
      price: 105,
      rate: 8.9,
      type: "Excellent",
      image_url: "./images/hotel_4.jpg",
    },
  ];

  return (
    <div>
      <div className="cityItems">
        <CityItems
          name={cityItems[0].name}
          subText={cityItems[0].subText}
          image={cityItems[0].image}
        />
        <CityItems
          image={cityItems[1].image}
          subText={cityItems[1].subText}
          name={cityItems[1].name}
        />
        <CityItems
          image={cityItems[2].image}
          subText={cityItems[2].subText}
          name={cityItems[2].name}
        />
      </div>
      <div className="title">
        <h3>Browse by property type</h3>
      </div>
      <div className="typeItems">
        <TypeItems
          name={typeItem[0].name}
          count={typeItem[0].count}
          image={typeItem[0].image}
        />
        <TypeItems
          name={typeItem[1].name}
          count={typeItem[1].count}
          image={typeItem[1].image}
        />
        <TypeItems
          name={typeItem[2].name}
          count={typeItem[2].count}
          image={typeItem[2].image}
        />
        <TypeItems
          name={typeItem[3].name}
          count={typeItem[3].count}
          image={typeItem[3].image}
        />
        <TypeItems
          name={typeItem[4].name}
          count={typeItem[4].count}
          image={typeItem[4].image}
        />
      </div>
      <div className="title">
        <h3>Home guests love</h3>
      </div>
      <div className="hotelListItem">
        {hotelLists.map((hotelList) => (
          <HotelList
            key={hotelList.id}
            image_url={hotelList.image_url}
            name={hotelList.name}
            city={hotelList.city}
            price={hotelList.price}
            rate={hotelList.rate}
            type={hotelList.type}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default City;

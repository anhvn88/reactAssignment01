import React, { useState } from "react";

import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";

import "./Navbar.css";

const NavbarSearch = () => {
  const searchButton = () => {
    window.location.replace("./pages/search/Search");
  };
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="searchButton">
      <input type="text" placeholder="Where are you going?" />
      {/* <input type="calender" placeholder="06/24/2022 to 06/24/2022" /> */}
      <div className="calendar">
        <span onClick={() => setOpenDate(!openDate)}>{`${format(
          date[0].startDate,
          "MM/dd/yyyy"
        )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
        {openDate && (
          <DateRange
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className="date"
          />
        )}
      </div>

      <input
        className="textButton"
        type="text"
        placeholder="1 adult 0 children 1 room"
      />
      <button className="buttonSearch" onClick={searchButton}>
        Search
      </button>
    </div>
  );
};

export default NavbarSearch;

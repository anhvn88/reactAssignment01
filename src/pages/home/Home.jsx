import React from "react";

import Navbar from "./Components/Navbar";
import City from "./Components/City";
import TypeItems from "./Components/TypeItems";
import NavbarSearch from "./Components/NavbarSearch";

const Home = () => {
  return (
    <div>
      <Navbar />
      <NavbarSearch />
      <City />
      <TypeItems />
    </div>
  );
};

export default Home;

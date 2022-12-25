import React from "react";

import Navbar from "../home/Components/Navbar";
import SearchInput from "./Components/SearchInput";
import Footer from "../home/Components/Footer";

import "./Search.css";

const Search = () => {
  return (
    <div>
      <Navbar />
      <SearchInput />
      <Footer />
    </div>
  );
};

export default Search;

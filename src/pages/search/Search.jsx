import React from "react";
import NavBar from "../home/NavBar";
import Footer from "../home/Footer/Footer";
import SearchPopup from "./SearchPopup";
import "./search.css";
import SearchList from "./SearchList";

const Search = () => {
  return (
    <div>
      <NavBar />
      <div className="search-container">
        <SearchPopup />
        <SearchList />
      </div>
      <Footer />
    </div>
  );
};

export default Search;

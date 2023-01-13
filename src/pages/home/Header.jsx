import React from "react";
import "./Header.css";
import DateRangeComponent from "./DateRange";
const Header = () => {
  const movetoSearchPage = (e) => {
    e.preventDefault();
    location.replace("/search");
  };
  return (
    <div className="container-header">
      <div className="header">
        <div className="header-content">
          <h1>A life of discounts? It's Genious</h1>
          <p>
            Get rewarded for your travel - unlock instant saving of 10% or more
            with a free account
          </p>
          <button>Sign in/ Register</button>
        </div>
        <div className="header-form">
          <form>
            <input type="text" placeholder="&#xf236;" />
            <DateRangeComponent />
            <input type="number" placeholder="&#xf183;" />
            <button className="header-button" onClick={movetoSearchPage}>
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;

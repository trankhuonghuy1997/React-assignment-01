import React from "react";
import "./Header.css";
import { DateRange } from "react-date-range";

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
          <button>Sign in/Register</button>
        </div>
        <form className="header-form">
          <input type="text" placeholder={`Where are you going?`} />
          <input type="text" placeholder="06/24/2022 to 06/24/2022" />
          <input type="number" />
          <button onClick={movetoSearchPage}>Search</button>
        </form>
      </div>
    </div>
  );
};

export default Header;

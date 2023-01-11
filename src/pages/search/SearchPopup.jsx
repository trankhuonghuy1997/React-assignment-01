import React from "react";
import "./SearchPopup.css";
const SearchPopup = () => {
  return (
    <div className="search-popup">
      <h1>Search</h1>
      <form action="">
        <form action="">
          <label className="main-label" htmlFor="destination">
            Destination
          </label>
          <input type="text" id="destination" />
        </form>
        <form action="">
          <label className="main-label" htmlFor="check-in-date">
            Check-in date
          </label>
          <input type="date" id="check-in-date" />
        </form>
        <form className="option-form" action="">
          <p className="main-label">Option</p>
          <form action="">
            <label htmlFor="min-price">Min price per night</label>
            <input type="number" id="min-price" />
          </form>
          <form action="">
            <label htmlFor="max-price">Max price per night</label>
            <input type="number" id="max-price" />
          </form>
          <form action="">
            <label htmlFor="adult">Adult</label>
            <input type="number" id="adult" placeholder="1" />
          </form>
          <form action="">
            <label htmlFor="children">Children</label>
            <input type="number" id="children" placeholder="0" />
          </form>
          <form action="">
            <label htmlFor="room">Room</label>
            <input type="number" id="room" placeholder="1" />
          </form>
        </form>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchPopup;

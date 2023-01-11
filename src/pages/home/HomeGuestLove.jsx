import React from "react";
import "./HomeGuestLove.css";
const HomeGuestLove = () => {
  const homeGuestLove = [
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

  const movetoDetailPage = (e) => {
    e.preventDefault();
    location.replace("/detail");
  };
  const homeGuestLoveList = homeGuestLove.map((item, index) => {
    return (
      <div
        key={index}
        className="home-guest-love-item"
        style={{ backgroundImage: `url(${item.image_url})` }}
        onClick={movetoDetailPage}
      >
        <div className="home-guest-love-item__text">
          <a href="#">{item.name}</a>
          <p>{item.city}</p>
          <p>{`Starting from $${item.price}`}</p>
          <p>
            <span>{item.rate}</span>
            {item.type}
          </p>
        </div>
      </div>
    );
  });
  return <div className="home-guest-love-list">{homeGuestLoveList}</div>;
};

export default HomeGuestLove;

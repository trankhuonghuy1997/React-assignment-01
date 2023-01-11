import React from "react";
import "./City.css";

const City = () => {
  const dummyCity = [
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
  const listItems = dummyCity.map((item, index) => {
    return (
      <div
        key={index}
        className="city-item"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="city-item__text">
          <h2>{item.subText}</h2>
          <p>{item.name}</p>
        </div>
      </div>
    );
  });
  return <div className="city-list">{listItems}</div>;
};

export default City;

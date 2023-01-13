import React from "react";
import "./PeropertyType.css";

const PeropertyType = () => {
  const peropertyType = [
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
  const peropertyTypeList = peropertyType.map((item, index) => {
    return (
      <div
        key={index}
        className="type-item"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="type-item__text">
          <h2>{item.name}</h2>
          <p>{item.count} Hotels</p>
        </div>
      </div>
    );
  });
  return (
    <>
      <h2 className="type-list__header">Browser By Property Type</h2>
      <div className="type-list">{peropertyTypeList}</div>
    </>
  );
};

export default PeropertyType;

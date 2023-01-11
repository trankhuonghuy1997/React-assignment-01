import React from "react";
import "./Footer.css";
import FooterElement from "./FooterElement";

const Footer = () => {
  const footer = [
    {
      col_number: 1,
      col_values: [
        "Countries",
        "Regions",
        "Cities",
        "Districts",
        "Airports",
        "Hotels",
      ],
    },
    {
      col_number: 2,
      col_values: [
        "Homes",
        "Apartments",
        "Resorts",
        "Villas",
        "Hostels",
        "Guest houses",
      ],
    },
    {
      col_number: 3,
      col_values: [
        "Unique places to stay",
        "Reviews",
        "Unpacked: Travel articles",
        "Travel communities",
        "Seasonal and holiday deals",
      ],
    },
    {
      col_number: 4,
      col_values: [
        "Car rental",
        "Flight Finder",
        "Restaurant reservations",
        "Travel Agents",
      ],
    },
    {
      col_number: 5,
      col_values: [
        "Curtomer Service",
        "Partner Help",
        "Careers",
        "Sustainability",
        "Press center",
        "Safety Resource Center",
        "Investor relations",
        "Terms & conditions",
      ],
    },
  ];

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: `${footer.length}`,
  };
  return (
    <div style={gridStyle} className="footer">
      {footer.map((footerArray) => {
        return (
          <ul
            key={footerArray.col_number}
            style={{
              gridColumn: `${footerArray.col_number}/${
                footerArray.col_number + 1
              }`,
            }}
          >
            {footerArray.col_values.map((item, index) => {
              return (
                <li key={index}>
                  {" "}
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default Footer;

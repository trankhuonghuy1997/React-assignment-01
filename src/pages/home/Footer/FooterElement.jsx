import React from "react";

const FooterElement = (props) => {
  return props.items.map(item, (index) => {
    <li key={index}>{item}</li>;
  });
};

export default FooterElement;

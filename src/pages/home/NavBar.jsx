import React from "react";
// import style from "./NavBar.module.css";
import "./NavBar.css"

const NavBar = () => {
  const navBarList = [
    {
      "type": "Stays",
      "icon": "fa-bed",
      "active": true
    },
    {
      "type": "Flights",
      "icon": "fa-plane",
      "active": false
    },
    {
      "type": "Car rentals",
      "icon": "fa-car",
      "active": false
    },
    {
      "type": "Attractions",
      "icon": "fa-bed",
      "active": false
    },
    {
      "type": "Airport taxis",
      "icon": "fa-taxi",
      "active": false
    }
  ] 
  
  const listItems = navBarList.map((item, index) =>
    <a className={item.active && "active"} href="#" key={index}> 
      <li >
        <i className={`fa-solid ${item.icon}`}></i>
        {item.type}
      </li>
    </a>
);
return (
  <div className="navbar-container">
    <div className="navbar-top">
      <h3>Booking Website</h3>
      <div className="navbar-control">
          <button>Register</button>
          <button>Login</button>
      </div>  
    </div>    
    <ul className="navbar-bottom">{listItems}</ul>
  </div>
);
};

export default NavBar;

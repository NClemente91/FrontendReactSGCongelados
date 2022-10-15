import React from "react";

import Navigation from "../Navigation/Navigation";
import CardWidget from "../CardWidget/CardWidget";

import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navigation-container">
        <Navigation />
      </div>
      <div className="cardWidget-container">
        <CardWidget />
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import { useSelector } from "react-redux";

import Navigation from "../Navigation/Navigation";
import CardWidget from "../CardWidget/CardWidget";

import "../NavBar/NavBar.css";

const NavBar = () => {
  const { isLogged } = useSelector((state) => state.user);

  return (
    <div className="navbar-container">
      <div className="navigation-container">
        <Navigation />
      </div>
      {isLogged && (
        <div className="cardWidget-container">
          <CardWidget />
        </div>
      )}
    </div>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

import "../HomePage/HomePage.css";

const HomePage = () => {
  return (
    <div className="homePage-container">
      <section className="homePage-container-info">
        <img
          className="homePage-container-info-img"
          src="/assets/images/icons/LogoPpal.svg"
          alt="Logo SG Congelados"
        />
        <span className="homePage-container-info-span">
          COCINAR SANO, RICO y RÁPIDO ES POSIBLE
        </span>
        <Link to="/categorias/todos" className="btn-container">
          <button type="button" className="btn btn-light">
            <span className="btn-container-text">VER PRODUCTOS</span>
          </button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;

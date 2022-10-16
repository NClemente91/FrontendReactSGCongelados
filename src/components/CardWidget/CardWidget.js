import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "../CardWidget/CardWidget.css";

const CardWidget = () => {
  let { totalQuantity } = useSelector((state) => state.cart);

  return (
    <div
      className={
        totalQuantity === 0 ? "logoCarrito opacityCard" : "logoCarrito"
      }
    >
      <Link to="/cart" className="logoCarrito-link">
        <span className="logoCarrito-link-quantity">{totalQuantity}</span>
        <img
          className="logoCarrito-link-img"
          src="/assets/images/icons/Carrito.svg"
          alt="Carrito"
        />
      </Link>
    </div>
  );
};

export default CardWidget;

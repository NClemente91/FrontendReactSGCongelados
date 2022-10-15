import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import "../CardWidget/CardWidget.css";

const CardWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <div
      className={
        totalQuantity() === 0 ? "logoCarrito opacityCard" : "logoCarrito"
      }
    >
      <Link to="/cart" className="logoCarrito-link">
        <span className="logoCarrito-link-quantity">{totalQuantity()}</span>
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

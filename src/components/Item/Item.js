import React from "react";
import { Link } from "react-router-dom";

import "../Item/Item.css";

const Item = ({ product }) => {
  return (
    <div className="card product">
      {product.stock === 0 ? (
        <div className="withoutStock">
          <img
            src={`${product.imageUrl}`}
            className="card-img-top"
            alt="Imagen de producto"
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">SIN STOCK</p>
          </div>
        </div>
      ) : (
        <Link to={`/productos/${product.productId}`}>
          <img
            src={`${product.imageUrl}`}
            className="card-img-top"
            alt="Imagen de producto"
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">$ {product.unitPrice}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Item;

import React, { useState } from "react";

import "../ItemCount/ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);
  const [disableRemove, setdisableRemove] = useState(true);
  const [disableAdd, setdisableAdd] = useState(false);

  const addQuantity = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      setdisableRemove(false);
    } else {
      setdisableAdd(true);
    }
  };

  const removeQuantity = () => {
    if (quantity > initial) {
      setQuantity(quantity - 1);
      setdisableAdd(false);
    } else {
      setdisableRemove(true);
    }
  };

  return (
    <div id="indCard">
      <div className="card">
        <div className="card-body">
          <div className="containerQuantityProduct mb-3">
            <button
              className="btn btn-secondary mr-2"
              onClick={removeQuantity}
              disabled={disableRemove}
            >
              -
            </button>
            <span id="quantityProduct">{quantity}</span>
            <button
              className="btn btn-secondary"
              onClick={addQuantity}
              disabled={disableAdd}
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            id="bg-color-btn"
            disabled={stock === 0 ? true : false}
            onClick={() => {
              quantity > 0 ? onAdd(quantity) : alert("Agregar Cantidad");
            }}
          >
            Agregar
          </button>
          <div>
            <span>Stock Disponible: {stock}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;

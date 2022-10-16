import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addOrRemoveOneOfItem } from "../../store/slices/cart/cartSlice";

import "../ItemCountCart/ItemCountCart.css";

const ItemCountCart = ({ element }) => {
  const dispatch = useDispatch();

  const [disableRemove, setdisableRemove] = useState(false);
  const [disableAdd, setdisableAdd] = useState(false);

  const addQuantity = (item, quantity) => {
    dispatch(addOrRemoveOneOfItem({ item, operation: "suma" }));
    if (quantity < item.stock) {
      setdisableRemove(false);
    } else {
      setdisableAdd(true);
    }
  };

  const removeQuantity = (item, quantity) => {
    dispatch(addOrRemoveOneOfItem({ item, operation: "resta" }));
    if (quantity > 2) {
      setdisableAdd(false);
    } else {
      setdisableRemove(true);
    }
  };

  return (
    <div className="containerQuantityProduct mb-3">
      <button
        className="btn btn-secondary btn-sm mr-2"
        onClick={() => removeQuantity(element.items, element.quantities)}
        disabled={disableRemove}
      >
        -
      </button>
      <span id="quantityProduct">{element.quantities} un</span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => addQuantity(element.items, element.quantities)}
        disabled={disableAdd}
      >
        +
      </button>
    </div>
  );
};

export default ItemCountCart;

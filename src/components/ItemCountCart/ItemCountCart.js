import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { addOrRemoveOneOfItem } from "../../store/slices/cart/cartSlice";

import "../ItemCountCart/ItemCountCart.css";

const ItemCountCart = ({ element }) => {
  const dispatch = useDispatch();

  const [disableRemove, setdisableRemove] = useState(false);
  const [disableAdd, setdisableAdd] = useState(false);

  const addQuantity = (element) => {
    if (element.quantities < element.items.stock) {
      dispatch(
        addOrRemoveOneOfItem({ item: element.items, operation: "suma" })
      );
      setdisableRemove(false);
    } else {
      setdisableAdd(true);
    }
  };

  const removeQuantity = (element) => {
    if (element.quantities > 1) {
      dispatch(
        addOrRemoveOneOfItem({ item: element.items, operation: "resta" })
      );
      setdisableAdd(false);
    } else {
      setdisableRemove(true);
    }
  };

  return (
    <div className="containerQuantityProduct mb-3">
      <button
        className="btn btn-secondary btn-sm mr-2"
        onClick={() => removeQuantity(element)}
        disabled={disableRemove}
      >
        -
      </button>
      <span id="quantityProduct">{element.quantities} un</span>
      <button
        className="btn btn-secondary btn-sm"
        onClick={() => addQuantity(element)}
        disabled={disableAdd}
      >
        +
      </button>
    </div>
  );
};

export default ItemCountCart;

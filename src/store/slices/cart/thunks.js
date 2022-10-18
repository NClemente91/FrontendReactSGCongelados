import { saveOrder } from "../../../services/ordersService";

import { startLoadingOrder, setOrder, clearCart } from "./cartSlice";

export const postOrder = (cartToSave) => {
  return async (dispatch) => {
    dispatch(startLoadingOrder());

    const savedOrder = await saveOrder(cartToSave);

    if (savedOrder.responseCode === 201) {
      dispatch(setOrder({ order: savedOrder.data }));

      dispatch(clearCart());
    } else {
      console.log("error al cargar la orden");
    }
  };
};

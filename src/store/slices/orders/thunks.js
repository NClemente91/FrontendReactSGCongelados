import { saveOrder } from "../../../services/ordersService";

import { startLoadingOrder, setOrder, setMessage } from "./orderSlice";
import { clearCart } from "../cart/cartSlice";

export const postOrder = (cartToSave) => {
  return async (dispatch) => {
    dispatch(startLoadingOrder());

    const savedOrder = await saveOrder(cartToSave);

    if (savedOrder.responseCode === 201) {
      dispatch(
        setMessage({
          type: "success",
          detail: "Orden registrada con éxito",
        })
      );
      dispatch(setOrder({ order: savedOrder.data }));
      dispatch(clearCart());
    } else {
      dispatch(
        setMessage({
          type: "error",
          detail: "Error al cargar la orden " + savedOrder.message,
        })
      );
    }
  };
};

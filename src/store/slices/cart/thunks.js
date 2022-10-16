import { saveOrder } from "../../../services/ordersService";

import { startLoadingOrder, setOrder } from "./cartSlice";

export const postOrder = (cartToSave) => {
  return async (dispatch) => {
    dispatch(startLoadingOrder());

    let cart = cartToSave.map((i) => {
      return {
        productId: i.items.productId,
        quantity: i.quantities,
      };
    });

    const order = {
      userEmail: "nico@example.com",
      cart,
    };

    const savedOrder = await saveOrder(order);

    dispatch(setOrder({ order: savedOrder }));
  };
};

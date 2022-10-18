import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typography, Alert } from "@mui/material";

import "../CheckOut/CheckOut.css";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../store/slices/orders/thunks";
import {
  finishLoadingOrder,
  setMessage,
} from "../../store/slices/orders/orderSlice";

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );
  const { isLoadingOrder, savedOrder, message } = useSelector(
    (state) => state.order
  );
  const { userLogged } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(setMessage(null));
  }, [dispatch]);

  const handleSaveOrder = () => {
    let orderToSave = {
      userEmail: userLogged.email,
      cart: cart.map((i) => {
        return { productId: i.items.productId, quantity: i.quantities };
      }),
    };
    dispatch(postOrder(orderToSave));
  };

  const handleCloseDetailOrder = () => {
    dispatch(finishLoadingOrder());
    navigate("/");
  };

  return (
    <div className="checkoutContainerGrl">
      {!isLoadingOrder && (
        <div className="checkoutContainerGrl-description">
          <div className="col-6">
            <div className="checkoutContainerGrl-description_resumen">
              <h2 className="checkoutContainerGrl-description_title">
                Resumen de compra
              </h2>
              <p className="checkoutContainerGrl-description_text">
                Estas llevando {totalQuantity} producto/s
              </p>
              <div>
                {cart?.map((pC) => {
                  return (
                    <div
                      key={pC.items.productId}
                      className="productResumenContainer"
                    >
                      <img
                        src={pC.items.imageUrl}
                        className="card-img-prod productResumenContainer_image"
                        alt="Imagen de producto"
                      />
                      <div className="productResumenContainer-text">
                        <p className="productResumenContainer-text_p">
                          {pC.items.name}
                        </p>
                        <p className="productResumenContainer-text_p">
                          Cantidad: {pC.quantities}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="checkoutContainerGrl-description_text">
                Precio total:$ {totalPrice}
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="checkoutContainerGrl-description_resumen">
              <h2 className="checkoutContainerGrl-description_title">
                Datos del comprador
              </h2>
              <p className="checkoutContainerGrl-description_text">
                Pedido a nombre de {userLogged.name} {userLogged.lastName}
              </p>
              <p className="checkoutContainerGrl-description_text">
                Dirección de envio:
              </p>
              <div className="productResumenContainer">
                <div className="productResumenContainer-text">
                  <p className="productResumenContainer-text_p">
                    {userLogged.address.street}{" "}
                    {userLogged.address.streetNumber}
                  </p>
                  <p className="productResumenContainer-text_p">
                    {userLogged.address.apartment}
                  </p>
                  <p className="productResumenContainer-text_p">
                    {userLogged.address.city}
                  </p>
                </div>
              </div>
              <div className="checkoutContainerGrl-form_button">
                <button
                  type="button"
                  className="btn"
                  id="bg-color-btn"
                  onClick={() => handleSaveOrder()}
                >
                  <span className="color-btn">CONFIRMAR COMPRA</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isLoadingOrder && savedOrder.length !== 0 && (
        <div className="checkoutContainerGrl-finallyBuy">
          <h2 className="checkoutContainerGrl-finallyBuy_title">
            Muchas gracias por tu compra
          </h2>
          <div className="cartContainerGrl-empty_image">
            <img src="/assets/images/icons/cf-icon.svg" alt="Logo triste" />
          </div>
          <Typography component="h6" variant="h6">
            {message && <Alert severity={message.type}>{message.detail}</Alert>}
          </Typography>
          <p className="checkoutContainerGrl-finallyBuy-order">
            Guarda el siguiente código
            <span className="checkoutContainerGrl-finallyBuy-order_p">
              {" "}
              {savedOrder.orderId}
              {savedOrder.user.name}{" "}
            </span>
            para poder recibir tu compra. El pedido se despacha a las 24 hs de
            la compra.
          </p>
          <p className="checkoutContainerGrl-finallyBuy-order">
            El pago podrá ser en{" "}
            <span className="checkoutContainerGrl-finallyBuy-order_p">
              {" "}
              efectivo{" "}
            </span>{" "}
            al recibir el envío o vía transferencia al{" "}
            <span className="checkoutContainerGrl-finallyBuy-order_p">
              {" "}
              CBU 1234567890123456789{" "}
            </span>
          </p>
          <p className="checkoutContainerGrl-finallyBuy-order">
            Fecha de carga
            <span className="checkoutContainerGrl-finallyBuy-order_p">
              {" "}
              {savedOrder.created_at}{" "}
            </span>
          </p>
          <Link to="/" className="btn-finally">
            <button
              className="btn btn-important"
              id="bg-color-btn"
              onClick={() => handleCloseDetailOrder()}
            >
              <span className="color-btn">VOLVER AL INICIO</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default CheckOut;

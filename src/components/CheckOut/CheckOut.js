import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../CheckOut/CheckOut.css";
import { useDispatch, useSelector } from "react-redux";
import { postOrder } from "../../store/slices/cart/thunks";

const CheckOut = () => {
  const dispatch = useDispatch();
  let { cart, totalQuantity, totalPrice, isLoadingOrder } = useSelector(
    (state) => state.cart
  );

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const handleInputChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const saveOrder = () => {
    dispatch(postOrder(cart));
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
            <div className="checkoutContainerGrl-description_form">
              <h2 className="checkoutContainerGrl-description_title">
                Completa el siguiente formulario para finalizar su pedido
              </h2>
              <form>
                <div className="col-md-3">
                  <div>
                    <label className="form-label">Nombre Completo</label>
                    <input
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="form-label">Teléfono</label>
                    <input
                      className="form-control"
                      type="phone"
                      name="phone"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="form-label">E-mail: </label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="checkoutContainerGrl-form_button">
                    <button
                      type="button"
                      className="btn"
                      id="bg-color-btn"
                      onClick={() => saveOrder()}
                    >
                      <span className="color-btn">CONFIRMAR COMPRA</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {isLoadingOrder && (
        <div className="checkoutContainerGrl-finallyBuy">
          <h2 className="checkoutContainerGrl-finallyBuy_title">
            Muchas gracias por tu compra
          </h2>
          <div className="cartContainerGrl-empty_image">
            <img src="/assets/images/icons/cf-icon.svg" alt="Logo triste" />
          </div>
          <p className="checkoutContainerGrl-finallyBuy-order">
            Tu nro de orden es:{" "}
            <span className="checkoutContainerGrl-finallyBuy-order_p">
              {}AGREGAR ALGO ACA!!!!!!!!!!
            </span>
            . Recirás un email cuando tu pedido esté listo para ser retirado.
          </p>
          <Link to="/" className="btn-finally">
            <button className="btn btn-important" id="bg-color-btn">
              <span className="color-btn">VOLVER AL INICIO</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};
export default CheckOut;

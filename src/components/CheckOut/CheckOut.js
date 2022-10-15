import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

import "../CheckOut/CheckOut.css";

const CheckOut = () => {
  const [loading, setLoading] = useState(false);

  const [orderID, setOrderID] = useState([]);

  //Saqué clear
  const { cartState, totalQuantity, totalPrice } = useContext(CartContext);

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
    console.log("Llego a guardar");
    // const db = getFireStore();

    // const cartFinal = [];

    // cartState.forEach((pCm) => {
    //   cartFinal.push({
    //     id: pCm.items.id,
    //     title: pCm.items.title,
    //     price: pCm.items.price,
    //   });

    //   const itemStockUpdate = db.collection("items").doc(pCm.items.id);
    //   const stockUpdated = pCm.items.stock - pCm.quantities;

    //   itemStockUpdate.update({
    //     stock: stockUpdated,
    //   });
    // });

    // const order = db.collection("orders");
    // const newOrder = {
    //   buyer: buyer,
    //   date: firebase.firestore.Timestamp.fromDate(new Date()),
    //   total: totalPrice(),
    //   items: cartFinal,
    // };
    // order
    //   .add(newOrder)
    //   .then(({ id }) => {
    //     setOrderID(id);
    //     clear();
    //     setLoading(true);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  return (
    <div className="checkoutContainerGrl">
      {!loading && (
        <div className="checkoutContainerGrl-description">
          <div className="col-6">
            <div className="checkoutContainerGrl-description_resumen">
              <h2 className="checkoutContainerGrl-description_title">
                Resumen de compra
              </h2>
              <p className="checkoutContainerGrl-description_text">
                Estas llevando {totalQuantity()} producto/s
              </p>
              <div>
                {cartState?.map((pC) => {
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
                Precio total:$ {totalPrice()}
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

      {loading && (
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
              {orderID}
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

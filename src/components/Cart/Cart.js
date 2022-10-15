import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import "../Cart/Cart.css";

const Cart = () => {
  const { cartState, removeItem, clear, totalQuantity, totalPrice } =
    useContext(CartContext);

  const clearCart = () => {
    clear();
  };

  const clearPartialCart = (ident) => {
    removeItem(ident);
  };

  return (
    <div className="cartContainerGrl">
      <h1 className="cartContainerGrl-titulo"> Carrito de compras</h1>
      <div>
        {cartState[0].quantities === 0 ? (
          <div className="cartContainerGrl-empty">
            <h3 className="cartContainerGrl-empty_title">
              Carrito de Compras Vacío
            </h3>
            <div className="cartContainerGrl-empty_image">
              <img src="/assets/images/icons/ct-icon.svg" alt="Logo triste" />
            </div>
            <div className="cartContainerGrl-empty_a">
              <Link to="/categorias/todos">
                <button className="btn btn-primary" id="bg-color-btn">
                  Buscar Productos
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="cartContainerGrl-description">
            <div className="col-8">
              <div className="cartContainerGrl-description_table">
                <h3 className="cartContainerGrl-description_tableTitle">
                  Descripción de tu pedido
                </h3>
                <table className="table aling-text">
                  <thead>
                    <tr>
                      <th scope="col">Producto</th>
                      <th scope="col">Descripción</th>
                      <th scope="col">Cantidad</th>
                      <th scope="col">Precio</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartState.map((pC) => {
                      return (
                        <tr key={pC.items.productId}>
                          <td>
                            <img
                              src={pC.items.imageUrl}
                              className="card-img-prod"
                              alt="Imagen de producto"
                            />
                          </td>
                          <td>{pC.items.name}</td>
                          <td>{pC.quantities} un.</td>
                          <td>${pC.items.unitPrice * pC.quantities}</td>
                          <td>
                            <button
                              className="btn btn-primary"
                              id="bg-color-btn"
                              onClick={() =>
                                clearPartialCart(pC.items.productId)
                              }
                            >
                              x
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => clearCart()}
                        >
                          Limpiar Carrito
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-4">
              <div className="cartContainerGrl-description_table">
                <h3 className="cartContainerGrl-description_resumenTitle">
                  Resumen de tu pedido
                </h3>
                <div className="mb-5">
                  <h4 className="resumen-title">
                    <span className="resumen-title_span">Cant. Prod:</span>{" "}
                    {totalQuantity()} un.
                  </h4>
                  <h4 className="resumen-title">
                    <span className="resumen-title_span">SubTotal:</span> ${" "}
                    {totalPrice()}
                  </h4>
                  <h4 className="resumen-title">
                    <span className="resumen-title_span">Envío:</span> Gratis
                  </h4>
                  <h4 className="resumen-title">
                    <span className="resumen-title_span">TOTAL:</span> ${" "}
                    {totalPrice()}
                  </h4>
                </div>
                <Link to="/checkout">
                  <button
                    className="btn btn-primary center-btn"
                    id="bg-color-btn"
                  >
                    FINALIZAR COMPRA
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

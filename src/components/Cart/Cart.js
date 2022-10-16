import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../../store/slices/cart/cartSlice";

import "../Cart/Cart.css";
import ItemCountCart from "../ItemCountCart/ItemCountCart";

const Cart = () => {
  const dispatch = useDispatch();
  let { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart);

  const clearTotalCart = () => {
    dispatch(clearCart());
  };

  const clearPartialCart = (ident) => {
    dispatch(removeItem(ident));
  };

  return (
    <div className="cartContainerGrl">
      <h1 className="cartContainerGrl-titulo"> Carrito de compras</h1>
      <div>
        {totalQuantity === 0 ? (
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
                    {cart.map((pC) => {
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
                          <td>
                            <ItemCountCart element={pC} />
                          </td>
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
                          onClick={() => clearTotalCart()}
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
                    {totalQuantity} un.
                  </h4>
                  <h4 className="resumen-title">
                    <span className="resumen-title_span">SubTotal:</span> ${" "}
                    {totalPrice}
                  </h4>
                  <h4 className="resumen-title">
                    <span className="resumen-title_span">Envío:</span> Gratis
                  </h4>
                  <h4 className="resumen-title">
                    <span className="resumen-title_span">TOTAL:</span> ${" "}
                    {totalPrice}
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

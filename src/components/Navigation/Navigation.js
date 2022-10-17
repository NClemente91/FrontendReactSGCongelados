import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLogout } from "../../store/slices/users/userSlice";

import "../Navigation/Navigation.css";

const Navigation = () => {
  const { isLogged } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const hanldeClickLogout = (event) => {
    event.preventDefault();
    dispatch(isLogout());
    navigate("/");
  };

  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
              className="logoSG-img"
              src="/assets/images/icons/LogoPpal.svg"
              alt="Logo SG Congelados"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {!isLogged ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/categorias/todos" className="nav-link">
                    <span className="nav-link-span">PRODUCTOS</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/register" className="nav-link">
                    <span className="nav-link-span">REGISTER</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <span className="nav-link-span">LOGIN</span>
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/categorias/todos" className="nav-link">
                    <span className="nav-link-span">PRODUCTOS</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">
                    <span className="nav-link-span">CART</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/categorias/todos"
                    className="nav-link"
                    onClick={hanldeClickLogout}
                  >
                    <span className="nav-link-span">LOGOUT</span>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;

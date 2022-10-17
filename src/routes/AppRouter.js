import { BrowserRouter, Routes, Route } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

import NavBar from "../components/NavBar/NavBar";
import HomePage from "../components/HomePage/HomePage";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Contact from "../components/Contact/Contact";
import Cart from "../components/Cart/Cart";
import CheckOut from "../components/CheckOut/CheckOut";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route path="/categorias/:category" element={<ItemListContainer />} />
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <Routes>
                <Route
                  path="/productos/:idP"
                  element={<ItemDetailContainer />}
                />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<CheckOut />} />
              </Routes>
            </PrivateRoute>
          }
        />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default AppRouter;

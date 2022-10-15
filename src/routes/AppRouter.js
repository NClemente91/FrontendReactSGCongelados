import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import HomePage from "../components/HomePage/HomePage";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import Contact from "../components/Contact/Contact";
import Cart from "../components/Cart/Cart";
import CheckOut from "../components/CheckOut/CheckOut";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categorias/:category" element={<ItemListContainer />} />
        <Route path="/productos/:idP" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      <Contact />
    </BrowserRouter>
  );
};

export default AppRouter;

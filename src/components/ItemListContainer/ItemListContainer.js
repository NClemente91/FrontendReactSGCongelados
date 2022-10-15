import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
// import { getAllProducts } from "../../services/productsService";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();

  useEffect(() => {
    setLoading(true);
    if (category === "todos") {
      // getAllProducts()
      //   .then((data) => setProducts(data))

      fetch("http://localhost:8080/product/all?page=0&size=23")
        .then((data) => data.json())
        .then((res) => {
          if (res.data.results.length === 0) {
            console.log("No hay resultados");
            return;
          }
          setProducts(res.data.results);
        })
        .catch((e) => console.log(e))
        .finally(setLoading(false));
    } else {
      fetch(`http://localhost:8080/product/category/${category}?page=0&size=23`)
        .then((data) => data.json())
        .then((res) => {
          if (res.data.results.length === 0) {
            console.log("No hay resultados");
            return;
          }
          setProducts(res.data.results);
        })
        .catch((e) => console.log(e))
        .finally(setLoading(false));
    }
  }, [category]);

  return (
    <div className="productContainerGrl">
      <section className="productContainer-navGral">
        <div className="productContainer-nav">
          <Link className="itemCategory" to="/categorias/todos">
            TODOS
          </Link>
          <Link className="itemCategory" to="/categorias/frutas">
            FRUTAS
          </Link>
          <Link className="itemCategory" to="/categorias/verduras">
            VERDURAS
          </Link>
          <Link className="itemCategory" to="/categorias/mix">
            MIX
          </Link>
        </div>
      </section>
      {loading && <div className="loader center-spin" />}
      {!loading && <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;

import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/products/thunks";

import { Pagination, Stack } from "@mui/material";

const ItemListContainer = () => {
  const dispatch = useDispatch();
  let { products, isLoading, page, totalPages } = useSelector(
    (state) => state.products
  );
  const { category } = useParams();

  useEffect(() => {
    dispatch(getProducts(category, page));
  }, [category, dispatch, page, totalPages]);

  const handleChange = (e, value) => {
    e.preventDefault();
    dispatch(getProducts(category, value));
  };

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
      {isLoading && <div className="loader center-spin" />}
      {!isLoading && (
        <>
          <ItemList products={products} />
          <div className="pagination-section">
            <Stack spacing={2}>
              <Pagination
                count={totalPages}
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
              />
            </Stack>
          </div>
        </>
      )}
    </div>
  );
};

export default ItemListContainer;

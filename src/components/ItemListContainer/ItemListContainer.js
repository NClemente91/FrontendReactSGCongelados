import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import "../ItemListContainer/ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/products/thunks";

import { Pagination, Stack } from "@mui/material";

const ItemListContainer = () => {
  const dispatch = useDispatch();
  let { productsData, isLoading, lastCategory } = useSelector(
    (state) => state.products
  );
  const { category } = useParams();

  useEffect(() => {
    dispatch(getProducts(category, productsData.currentPage, lastCategory));
  }, [category, dispatch, productsData.currentPage, lastCategory]);

  const handleChange = (e, value) => {
    e.preventDefault();
    dispatch(getProducts(category, value, lastCategory));
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
      {!isLoading && productsData.results.length !== 0 && (
        <>
          <ItemList products={productsData.results} />
          {productsData.totalPages > 1 && (
            <div className="pagination-section">
              <Stack spacing={2}>
                <Pagination
                  count={productsData.totalPages}
                  page={productsData.currentPage}
                  variant="outlined"
                  shape="rounded"
                  onChange={handleChange}
                />
              </Stack>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ItemListContainer;

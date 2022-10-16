import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../store/slices/products/thunks";

import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemDetailContainer/ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const dispatch = useDispatch();
  let { productDetail, isLoading } = useSelector((state) => state.products);
  const { idP } = useParams();

  useEffect(() => {
    dispatch(getProduct(idP));
  }, [idP, dispatch]);

  return (
    <div className="detailContainerGrl">
      {isLoading && <div className="loader center-spin" />}
      {!isLoading && <ItemDetail element={productDetail} />}
    </div>
  );
};

export default ItemDetailContainer;

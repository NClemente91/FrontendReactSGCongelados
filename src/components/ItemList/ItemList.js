import React from "react";

import Item from "../Item/Item";
import "../ItemList/ItemList.css";

const ItemList = ({ products }) => {
  return (
    <div className="productContainer">
      {products.map((product) => {
        return (
          <div className="productContainer-ind" key={product.productId}>
            <Item product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;

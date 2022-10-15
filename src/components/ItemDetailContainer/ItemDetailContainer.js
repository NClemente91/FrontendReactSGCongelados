import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import "../ItemDetailContainer/ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [itemDetail, setItemDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  const { idP } = useParams();

  useEffect(() => {
    setLoading(true);

    fetch(`http://localhost:8080/product/${idP}`)
      .then((data) => data.json())
      .then((res) => {
        if (res.data === null) {
          console.log("No hay resultados");
          return;
        }
        setItemDetail(res.data);
      })
      .catch((e) => console.log(e))
      .finally(setLoading(false));
  }, [idP]);

  return (
    <div className="detailContainerGrl">
      {loading && <div className="loader center-spin" />}
      {!loading && <ItemDetail element={itemDetail} />}
    </div>
  );
};

export default ItemDetailContainer;

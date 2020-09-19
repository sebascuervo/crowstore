import React, { useEffect, useState } from "react";
import CardProduct from "../CardProduct/CardProduct";
import "./Products.scss";

function Products({ data }) {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    if (data) {
      setProductData(data["results"]);
    }
  }, [data]);
  return (
    <section className="products">
      {productData &&
        productData.map((product) => {
          return <CardProduct key={product.id} product={product} />;
        })}
    </section>
  );
}

export default Products;

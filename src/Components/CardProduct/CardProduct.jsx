import React, { useState } from "react";
import "./CardProduct.scss";

const formatterPeso = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  minimumFractionDigits: 0,
});

function CardProduct({ product }) {
  const [fill, setFill] = useState(false);
  return (
    <div className="card-product">
      <img
        className="card-product__image"
        src={product.thumbnail}
        alt={product.title}
      />
      <div className="card-product__info">
        <h2 className="card-product__title">{product.title}</h2>
        <p className="card-product__price">
          {formatterPeso.format(product.price)}
        </p>
        <button className="card-product__button">Add to cart</button>
        <i
          onMouseEnter={() => setFill(!fill)}
          onMouseLeave={() => setFill(!fill)}
          className={fill ? "fas fa-heart" : "far fa-heart"}
        />
      </div>
    </div>
  );
}

export default CardProduct;

import React from "react";
import "./Product.css";
import Product from "./Product";
import Category from "./Category";

function ProductIndex() {
  return (
    <div className="product">
      <Product />
      <Category />
    </div>
  );
}

export default ProductIndex;

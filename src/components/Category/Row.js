import React, { useState, useEffect } from "react";

function Row({ category }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://arrow-shopping-site.herokuapp.com/api/product")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result.data.productList);
        console.log(result);
      });
  }, []);

  const categoryRow = product.filter(
    (Product) => Product.category === category
  );

  return (
    <div>
      {categoryRow.map((mapProduct) => (
        <img src={mapProduct.image} alt={category} />
      ))}
    </div>
  );
}

export default Row;

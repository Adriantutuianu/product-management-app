import React from "react";

const ProductDetails = (id) => {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .then((json) => console.log(json));
  return <div>ProductDetails</div>;
};

export default ProductDetails;

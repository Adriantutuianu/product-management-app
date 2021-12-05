import React, { useState, useEffect } from "react";

const Products = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    //get product onload
    getProducts(endpoint);
  }, []);

  const getProducts = async (path) => {
    try {
      await fetch(path)
        .then((res) => res.json())
        .then((res) => {
          setProducts(res);
        });
    } catch (error) {
      console.log("Failed to get all products: " + error);
    }
  };

  const endpoint = "https://fakestoreapi.com/products";
  console.log(products);

  return <div>Products</div>;
};

export default Products;

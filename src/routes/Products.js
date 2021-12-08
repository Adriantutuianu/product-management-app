import React, { useState, useEffect } from "react";
import "./products.css";
import FiltersSection from "../components/productsPage/FiltersSection";
import ProductsTable from "../components/productsPage/ProductsTable";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    //get product onload
    getProducts(productsEndpoint);
    getCategories(categoriesEndpoint);
  }, []);

  const getProducts = async (path) => {
    try {
      await fetch(path)
        .then((res) => res.json())
        .then((res) => {
          // fix for unique key for each item.
          const resWithKey = res.map((obj) => ({ ...obj, key: obj.id }));
          setProducts(resWithKey);
        });
    } catch (error) {
      console.log("Failed to get all products: " + error);
    }
  };

  const getCategories = async (path) => {
    try {
      await fetch(path)
        .then((res) => res.json())
        .then((res) => {
          setCategories(res);
        });
    } catch (error) {
      console.log("Failed to get all products: " + error);
    }
  };

  const productsEndpoint = "https://fakestoreapi.com/products";
  const categoriesEndpoint = "https://fakestoreapi.com/products/categories";

  const handleClickCategoriesFilter = () => {
    console.log("Categories Filter Button was clicked!");
  };
  const handleClickNewProduct = () => {
    console.log("New Product Button was clicked!");
  };
  const handleClickUpdateProduct = () => {
    console.log("Update product Button was clicked!");
  };

  return (
    <>
      <FiltersSection
        methods={{
          handleClickCategoriesFilter,
          handleClickNewProduct,
          handleClickUpdateProduct,
        }}
      />
      <ProductsTable productsProp={products} />
    </>
  );
};

export default Products;

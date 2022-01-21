import React, { useState, useEffect } from "react";
import "./products.css";
import FiltersSection from "../components/productsPage/FiltersSection";
import ProductsTable from "../components/productsPage/ProductsTable";
import TitleComp from "../components/Title";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectRows, setSelectRows] = useState([]);

  const productsEndpoint = "https://fakestoreapi.com/products";
  const categoriesEndpoint = "https://fakestoreapi.com/products/categories";

  useEffect(() => {
    //get product onload
    getCategories(categoriesEndpoint);
    getProducts(productsEndpoint);
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
  // Fetch all products with a specific category
  const handleClickCategoriesFilter = (category) => {
    getProducts(`https://fakestoreapi.com/products/category/${category}`);
  };

  return (
    <>
      <TitleComp title="Products" />
      <FiltersSection
        selectRows={selectRows}
        methods={{
          handleClickCategoriesFilter,
          getProducts,
        }}
        categories={categories}
      />
      <ProductsTable productsProp={products} setSelectRows={setSelectRows} />
    </>
  );
};

export default Products;

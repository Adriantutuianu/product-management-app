import React, { useState, useEffect } from "react";
import "./products.css";
import FiltersSection from "../components/productsPage/FiltersSection";
import ProductsTable from "../components/productsPage/ProductsTable";
import TitleComp from "../components/Title";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectRows, setSelectRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isResetActive, setIsResetActive] = useState(false);

  const productsEndpoint = `${process.env.REACT_APP_BASE_URL}/products`;
  const categoriesEndpoint = `${process.env.REACT_APP_BASE_URL}/products/categories`;

  useEffect(() => {
    //get product onload
    getProducts(productsEndpoint);
    getCategories(categoriesEndpoint);
  }, [productsEndpoint, categoriesEndpoint]);

  const getProducts = async (path) => {
    setLoading(true);
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
    setLoading(false);
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
    setIsResetActive(true);
  };

  const resetCategoriesFilter = () => {
    getProducts("https://fakestoreapi.com/products");
    setIsResetActive(false);
  };

  return (
    <>
      <TitleComp title="Products" />
      <FiltersSection
        selectRows={selectRows}
        methods={{
          handleClickCategoriesFilter,
          resetCategoriesFilter,
        }}
        categories={categories}
        isResetActive={isResetActive}
      />
      <ProductsTable
        loading={loading}
        productsProp={products}
        setSelectRows={setSelectRows}
      />
    </>
  );
};

export default Products;

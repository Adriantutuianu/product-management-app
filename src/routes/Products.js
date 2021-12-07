import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "./products.css";
import FiltersSection from "../components/productsPage/FiltersSection";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //get product onload
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

  const productsEndpoint = "https://fakestoreapi.com/products";
  console.log(products);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
  ];

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
      <Table
        className="products-table"
        dataSource={products}
        columns={columns}
        pagination={{ pageSize: 20 }}
      />
    </>
  );
};

export default Products;

import React, { useState, useEffect } from "react";
import { Table, Button } from "antd";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    //get product onload
    getProducts(endpoint);
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

  const endpoint = "https://fakestoreapi.com/products";
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
    console.log("Button was clicked!");
  };
  const handleClickNewProduct = () => {
    console.log("Button was clicked!");
  };
  const handleClickUpdateProduct = () => {
    console.log("Button was clicked!");
  };

  return (
    <>
      <>
        <section className="filters-actions">
          <h3>Filters & actions</h3>
          <Button onClick={handleClickCategoriesFilter}>
            Categories filter
          </Button>
          <Button onClick={handleClickNewProduct}>Create new product</Button>
          <Button onClick={handleClickUpdateProduct}>Update product</Button>
        </section>
      </>
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

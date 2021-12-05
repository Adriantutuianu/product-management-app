import React, { useState, useEffect } from "react";
import { Table } from "antd";

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

  const dataSource = [
    {
      key: "1",
      title: "Mike",
      id: 32,
      category: "10 Downing Street",
      price: "100$",
    },

    {
      key: "2",
      title: "Mike",
      id: 32,
      category: "10 Downing Street",
      price: "100$",
    },
  ];

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

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  );
};

export default Products;

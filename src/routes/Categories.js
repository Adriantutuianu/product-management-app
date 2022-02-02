import React, { useState, useEffect } from "react";
import TitleComp from "../components/Title";
import { List } from "antd";

const Categories = () => {
  const [categories, setCategories] = useState([]);

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

  const categoriesEndpoint = `${process.env.REACT_APP_BASE_URL}/products/categories`;

  useEffect(() => {
    //get categories onload
    getCategories(categoriesEndpoint);
  }, [categoriesEndpoint]);

  return (
    <>
      <TitleComp title="Categories" />
      <List
        size="large"
        bordered
        dataSource={categories}
        renderItem={(item) => (
          <List.Item style={{ textTransform: "capitalize" }}>{item}</List.Item>
        )}
      />
    </>
  );
};

export default Categories;

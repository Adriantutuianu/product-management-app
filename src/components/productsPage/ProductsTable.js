import React from "react";
import { Table } from "antd";

const ProductsTable = ({ productsProp }) => {
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
    <Table
      className="products-table"
      dataSource={productsProp}
      columns={columns}
      pagination={{ pageSize: 20 }}
    />
  );
};

export default ProductsTable;

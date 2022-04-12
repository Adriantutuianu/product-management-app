import React from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";

const ProductsTable = ({ productsProp, setSelectRows }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (id) => <Link to={`/product/${id}`}>{id}</Link>,
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

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectRows(selectedRows);
    },
  };

  return (
    <Table
      className="products-table"
      rowSelection={{
        ...rowSelection,
      }}
      dataSource={productsProp}
      columns={columns}
      pagination={{ pageSize: 10 }}
    />
  );
};

export default ProductsTable;

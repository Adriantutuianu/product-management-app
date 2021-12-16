import React from "react";
import { Table } from "antd";

const ProductsTable = ({ productsProp, setSelectRows }) => {
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

import React from "react";
import { Table, Tooltip } from "antd";
import { Link } from "react-router-dom";

const ProductsTable = ({ productsProp, setSelectRows, loading }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Link to={`/product/${id}`}>
          {" "}
          <Tooltip
            placement="right"
            title={"View project details"}
            style={{ marginLeft: "15px" }}
          >
            {id}
          </Tooltip>
        </Link>
      ),
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
      loading={loading}
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

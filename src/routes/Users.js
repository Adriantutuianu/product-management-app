import React from "react";
import TitleComp from "../components/Title";
import { Table } from "antd";

const Users = () => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
  ];

  return (
    <>
      <TitleComp title="Users" />
      <Table
        className="users-table"
        columns={columns}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
};

export default Users;

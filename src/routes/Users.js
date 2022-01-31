import React, { useState, useEffect } from "react";
import TitleComp from "../components/Title";
import { Table } from "antd";
import "./users.css";

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

  const getUsers = async () => {
    try {
      await fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.log("Failed to get all users: " + error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

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

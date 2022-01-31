import React, { useState, useEffect } from "react";
import TitleComp from "../components/Title";
import { Table } from "antd";
import "./users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: 50,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => `${text.firstname}, ${text.lastname}`,
    },
    {
      title: "User",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      render: (text, record) =>
        `${text.number}, ${text.street}, ${text.city}, ${text.zipcode} `,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
  ];

  const getUsers = async () => {
    try {
      await fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((res) => {
          const resWithKey = res.map((obj) => ({ ...obj, key: obj.id }));
          setUsers(resWithKey);
        });
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
        dataSource={users}
      />
    </>
  );
};

export default Users;

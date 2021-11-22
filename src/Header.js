import React from "react";
import { Menu } from "antd";
import "./header.css";

const Header = () => {
  return (
    <header>
      <Menu
        className="header-menu"
        defaultSelectedKeys={["1"]}
        style={{ display: "flex" }}
      >
        <Menu.Item key="1">Products</Menu.Item>
        <Menu.Item key="2">View Categories</Menu.Item>
        <Menu.Item key="3">Manage Users</Menu.Item>
        <Menu.Item key="4">About</Menu.Item>
      </Menu>
    </header>
  );
};

export default Header;

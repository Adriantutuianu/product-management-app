import React from "react";
import { Menu } from "antd";
import "./header.css";
import Auth from "./auth/Auth.js";

const Header = () => {
  return (
    <header>
      <section style={{ display: "flex" }}>
        <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Product logo" />
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
      </section>
      <Auth />
    </header>
  );
};

export default Header;

import React from "react";
import { Menu } from "antd";
import "./header.css";
import Auth from "./auth/Auth.js";
import { NavLink } from "react-router-dom";

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
          <Menu.Item key="1">
            <NavLink to="/">Products</NavLink>
          </Menu.Item>
          <Menu.Item key="2">
            <NavLink to="/categories">View Categories</NavLink>
          </Menu.Item>
          <Menu.Item key="3">
            <NavLink to="users">Manage Users</NavLink>
          </Menu.Item>
          <Menu.Item key="4">
            <NavLink to="about">About</NavLink>
          </Menu.Item>
        </Menu>
      </section>
      <Auth />
    </header>
  );
};

export default Header;

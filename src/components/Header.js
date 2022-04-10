import React from "react";
import { Menu } from "antd";
import "./header.css";
import Auth from "../auth/Auth.js";
import { Link } from "react-router-dom";

const Header = ({ credentials }) => {
  return (
    <header>
      <section style={{ display: "flex" }}>
        <Link to="/">
          <img
            style={{ height: "100%" }}
            src={process.env.PUBLIC_URL + "/logo192.png"}
            alt="Product logo"
          />
        </Link>

        <Menu
          className="header-menu"
          defaultSelectedKeys={["1"]}
          style={{ display: "flex" }}
        >
          {credentials.token && (
            <>
              {" "}
              <Menu.Item key="1">
                <Link to="/">Products</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/categories">View Categories</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="users">Manage Users</Link>
              </Menu.Item>
            </>
          )}
          <Menu.Item key="4">
            <Link to="about">About</Link>
          </Menu.Item>
        </Menu>
      </section>
      <Auth credentials={credentials} />
    </header>
  );
};

export default Header;

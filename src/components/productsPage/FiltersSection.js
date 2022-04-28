import React from "react";
import UpdateProduct from "./UpdateProduct";
import CreateProduct from "./CreateProduct";

import { Typography, Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FiltersSection = ({ methods, categories, selectRows, isResetActive }) => {
  const { Title } = Typography;

  const { handleClickCategoriesFilter, getProducts } = methods;

  // dynamic menu options
  const menuItems = categories.map((category, index) => (
    <Menu.Item key={index} style={{ textTransform: "capitalize" }}>
      {category}
    </Menu.Item>
  ));

  // passing selected value to function that will fetch all products that contain a specific category
  const categoriesMenu = (
    <Menu
      onClick={({ domEvent }) =>
        handleClickCategoriesFilter(domEvent.target.textContent)
      }
    >
      {menuItems}
    </Menu>
  );
  return (
    <section className="filters-actions">
      <Title level={5}>Filters & actions</Title>

      <Dropdown overlay={categoriesMenu} trigger={["click"]}>
        <a
          href="cat"
          className="ant-dropdown-link"
          onClick={(e) => e.preventDefault()}
        >
          Categories filter <DownOutlined />
        </a>
      </Dropdown>
      <Button
        onClick={() => getProducts("https://fakestoreapi.com/products")}
        type="primary"
        disabled={isResetActive ? false : true}
        style={{ marginTop: "15px" }}
      >
        Reset
      </Button>

      <CreateProduct categories={categories} />

      <UpdateProduct selectRows={selectRows} categories={categories} />
    </section>
  );
};

export default FiltersSection;

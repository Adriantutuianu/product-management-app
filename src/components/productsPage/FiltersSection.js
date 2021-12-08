import React from "react";
import { Button, Typography, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FiltersSection = ({ methods, categories }) => {
  const { Title } = Typography;

  const {
    handleClickCategoriesFilter,
    handleClickNewProduct,
    handleClickUpdateProduct,
  } = methods;

  const menuItems = categories.map((category, index) => (
    <Menu.Item key={index} style={{ textTransform: "capitalize" }}>
      {category}
    </Menu.Item>
  ));

  const categoriesMenu = <Menu>{menuItems}</Menu>;

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

      <Button type="primary" onClick={handleClickNewProduct}>
        Create new product
      </Button>
      <Button type="primary" onClick={handleClickUpdateProduct}>
        Update product
      </Button>
    </section>
  );
};

export default FiltersSection;

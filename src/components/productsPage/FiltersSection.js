import React from "react";
import { Button, Typography, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FiltersSection = ({ methods, categories }) => {
  const { Title } = Typography;
  console.log(categories);

  const {
    handleClickCategoriesFilter,
    handleClickNewProduct,
    handleClickUpdateProduct,
  } = methods;

  const categoriesMenu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.antgroup.com">1st menu item</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.aliyun.com">2nd menu item</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">3rd menu item</Menu.Item>
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

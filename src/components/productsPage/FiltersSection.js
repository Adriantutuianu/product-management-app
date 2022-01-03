import React from "react";
import UpdateProduct from "./UpdateProduct";
import { Button, Typography, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FiltersSection = ({ methods, categories, selectRows }) => {
  const { Title } = Typography;

  const {
    handleClickCategoriesFilter,
    handleClickNewProduct,
    // handleClickUpdateProduct,
  } = methods;

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

      <Button type="primary" onClick={handleClickNewProduct}>
        Create new product
      </Button>
      <UpdateProduct selectRows={selectRows} />
    </section>
  );
};

export default FiltersSection;

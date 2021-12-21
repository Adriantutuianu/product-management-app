import React, { useState } from "react";
import { Button, Typography, Menu, Dropdown, Tooltip, Drawer } from "antd";
import { DownOutlined } from "@ant-design/icons";

const FiltersSection = ({ methods, categories, selectRows }) => {
  const [visible, setVisible] = useState(false);

  const handleClickUpdateProduct = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

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
      <Tooltip
        placement="topLeft"
        title={selectRows.length < 1 ? "Please select at least 1 product" : ""}
      >
        <Button
          type="primary"
          disabled={selectRows.length !== 1}
          onClick={handleClickUpdateProduct}
        >
          Update product
        </Button>
        <Drawer
          title="Product:"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <p>Title: </p>
          <p>Price: </p>
          <p>Description: </p>
          <p>Image: </p>
          <p>Category: </p>
        </Drawer>
      </Tooltip>
    </section>
  );
};

export default FiltersSection;

import React, { useState } from "react";
import { Button, Tooltip, Drawer, Input, Menu, Dropdown } from "antd";
import { InfoCircleOutlined, DownOutlined } from "@ant-design/icons";

const UpdateProduct = (props) => {
  const [visible, setVisible] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const handleClickUpdateProduct = () => {
    setVisible(true);
  };

  const handleCloseDrawer = () => {
    setVisible(false);
  };

  const menuItems = props.categories.map((category, index) => (
    <Menu.Item key={index} style={{ textTransform: "capitalize" }}>
      {category}
    </Menu.Item>
  ));

  // passing selected value to function that will fetch all products that contain a specific category
  const categoriesMenu = (
    <Menu onClick={({ domEvent }) => console.log(domEvent.target.textContent)}>
      {menuItems}
    </Menu>
  );

  return (
    <Tooltip
      placement="topLeft"
      title={
        props.selectRows.length === 0
          ? "Please select 1 product"
          : props.selectRows.length >= 2
          ? "Please select only 1 product"
          : ""
      }
    >
      <Button
        type="primary"
        disabled={props.selectRows.length !== 1}
        onClick={handleClickUpdateProduct}
      >
        Update product
      </Button>

      {visible && (
        <Drawer
          title="Update Product :"
          style={{ textAlign: "center" }}
          placement="right"
          onClose={handleCloseDrawer}
          visible={visible}
        >
          <Input
            value={titleValue}
            onChange={(e) => setTitleValue(e.target.value)}
            placeholder={props.selectRows[0].title}
            style={{ marginBottom: "15px" }}
          />
          <Input
            value={priceValue}
            onChange={(e) => setPriceValue(e.target.value)}
            placeholder={props.selectRows[0].price}
            style={{ marginBottom: "15px" }}
          />
          <Input
            value={descriptionValue}
            onChange={(e) => setDescriptionValue(e.target.value)}
            placeholder={props.selectRows[0].description}
            style={{ marginBottom: "15px" }}
          />

          <Dropdown overlay={categoriesMenu} trigger={["click"]}>
            <p
              style={{
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                color: "lightgray",
                padding: "3px 12px",
                border: "1px solid var(--secondary-color)",
              }}
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Select category
              <DownOutlined style={{ marginLeft: "5px" }} />
            </p>
          </Dropdown>

          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <Input placeholder={props.selectRows[0].image} />
            <Tooltip placement="topLeft" title={"This will be the image URL"}>
              <InfoCircleOutlined style={{ marginLeft: "10px" }} />
            </Tooltip>{" "}
          </div>
          <Button type="primary" style={{ marginTop: "15px" }}>
            Submit
          </Button>
        </Drawer>
      )}
    </Tooltip>
  );
};

export default UpdateProduct;

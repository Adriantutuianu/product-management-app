import React, { useState } from "react";
import { Button, Tooltip, Drawer, Input, Menu, Dropdown, Select } from "antd";
import { InfoCircleOutlined, DownOutlined } from "@ant-design/icons";

const UpdateProduct = (props) => {
  const [visible, setVisible] = useState(false);
  const [titleValue, setTitleValue] = useState("");
  const [priceValue, setPriceValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  const { Option } = Select;

  const handleClickUpdateProduct = () => {
    setVisible(true);
  };

  const handleCloseDrawer = () => {
    setVisible(false);
  };

  function handleChangeCategories(value) {
    console.log(`selected ${value}`);
  }

  const categoriesDropdownItems = props.categories.map((category, index) => (
    <Option
      key={index}
      style={{ textTransform: "capitalize" }}
      value={category}
    >
      {category}
    </Option>
  ));

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
          width={500}
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

          <Select
            // defaultValue="lucy"
            style={{ width: 120 }}
            onChange={handleChangeCategories}
          >
            {categoriesDropdownItems}
          </Select>

          <div style={{ display: "flex", alignItems: "center" }}>
            {" "}
            <Input
              value={imageValue}
              onChange={(e) => setImageValue(e.target.value)}
              placeholder={props.selectRows[0].image}
            />
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

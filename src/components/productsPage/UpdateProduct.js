import React, { useState } from "react";
import { Button, Tooltip, Drawer, Input } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const UpdateProduct = (props) => {
  const [visible, setVisible] = useState(false);

  const handleClickUpdateProduct = () => {
    setVisible(true);
  };
  console.log(props);
  const onClose = () => {
    setVisible(false);
  };

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
      <Drawer
        title="Update Product :"
        style={{ textAlign: "center" }}
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Input placeholder="Title" style={{ marginBottom: "15px" }} />
        <Input placeholder="Price" style={{ marginBottom: "15px" }} />
        <Input placeholder="Description" style={{ marginBottom: "15px" }} />

        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <Input placeholder="Image" style={{ marginBottom: "15px" }} />
          <Tooltip placement="topLeft" title={"This will be the image URL"}>
            <InfoCircleOutlined style={{ marginLeft: "10px" }} />
          </Tooltip>{" "}
        </div>
        <Button type="primary">Submit</Button>
      </Drawer>
    </Tooltip>
  );
};

export default UpdateProduct;

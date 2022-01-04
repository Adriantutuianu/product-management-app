import React, { useState } from "react";
import { Button, Tooltip, Drawer, Input, Menu, Dropdown } from "antd";
import { InfoCircleOutlined, DownOutlined } from "@ant-design/icons";

const UpdateProduct = (props) => {
  const [visible, setVisible] = useState(false);

  const handleClickUpdateProduct = () => {
    setVisible(true);
  };

  const handleCloseDrawer = () => {
    setVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item icon={<DownOutlined />} disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item disabled>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item (disabled)
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
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
            placeholder={props.selectRows[0].title}
            style={{ marginBottom: "15px" }}
          />
          <Input
            placeholder={props.selectRows[0].price}
            style={{ marginBottom: "15px" }}
          />
          <Input
            placeholder={props.selectRows[0].description}
            style={{ marginBottom: "15px" }}
          />

          <Dropdown overlay={menu} trigger={["click"]}>
            <p
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Select category
              <DownOutlined />
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

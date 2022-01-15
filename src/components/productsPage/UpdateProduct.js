import React, { useState } from "react";
import { Button, Tooltip, Drawer, Input, Select } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const UpdateProduct = (props) => {
  const [visible, setVisible] = useState(false),
    [titleValue, setTitleValue] = useState(""),
    [priceValue, setPriceValue] = useState(""),
    [descriptionValue, setDescriptionValue] = useState(""),
    [imageValue, setImageValue] = useState(""),
    [categoriesValue, setCategoriesValue] = useState(""),
    { Option } = Select;

  const handleClickUpdateProduct = () => {
    setVisible(true);
  };

  const handleCloseDrawer = () => {
    setVisible(false);
  };

  function handleChangeCategories(value) {
    setCategoriesValue(value);
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

  const updateProductEndpoint = `https://fakestoreapi.com/products/${props?.selectRows[0]?.id}`;

  const handleClickSubmit = () => {
    fetch(updateProductEndpoint, {
      method: "PATCH",
      body: JSON.stringify({
        title: { titleValue },
        price: { priceValue },
        description: { descriptionValue },
        image: { imageValue },
        category: { categoriesValue },
      }),
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .then(
        console.info(
          "Will return an object with sent id. Remember that nothing in real will update in the database."
        )
      );
    handleCloseDrawer();
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
            placeholder={props.selectRows[0].category}
            style={{ width: "100%", marginBottom: "15px" }}
            dropdownStyle={{ textAlign: "center" }}
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
          <Button
            onClick={handleClickSubmit}
            type="primary"
            style={{ marginTop: "15px" }}
          >
            Submit
          </Button>
        </Drawer>
      )}
    </Tooltip>
  );
};

export default UpdateProduct;

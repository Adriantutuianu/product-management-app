import React, { useState } from "react";
import { Button, Tooltip, Drawer, Input, Select, notification } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const CreateProduct = (props) => {
  const [visible, setVisible] = useState(false),
    [titleValue, setTitleValue] = useState(""),
    [priceValue, setPriceValue] = useState(""),
    [descriptionValue, setDescriptionValue] = useState(""),
    [imageValue, setImageValue] = useState(""),
    [categoriesValue, setCategoriesValue] = useState(null),
    { Option } = Select;

  const showDrawer = () => {
    setVisible(true);
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
  const handleCloseDrawer = () => {
    setVisible(false);
    setTitleValue("");
    setPriceValue("");
    setDescriptionValue("");
    setImageValue("");
    setCategoriesValue(null);
  };
  const handleClickSubmit = () => {
    fetch("https://fakestoreapi.com/products", {
      method: "POST",
      body: JSON.stringify({
        title: { titleValue },
        price: { priceValue },
        description: { descriptionValue },
        image: { imageValue },
        category: { categoriesValue },
      }),
    })
      .then((res) => res.json())
      .then((json) =>
        notification.open({
          message: `Product #${json.id} was created.`,
          description:
            "Remember this is a fake API, so nothing will be created in the database.",
        })
      );

    handleCloseDrawer();
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Create new product
      </Button>

      <Drawer
        title="Create new product:"
        style={{ textAlign: "center" }}
        width={500}
        placement="right"
        onClose={handleCloseDrawer}
        visible={visible}
      >
        <Input
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
          style={{ marginBottom: "15px" }}
          placeholder="Product title"
        />
        <Input
          value={priceValue}
          placeholder="Product price"
          onChange={(e) => setPriceValue(e.target.value)}
          style={{ marginBottom: "15px" }}
        />
        <Input
          value={descriptionValue}
          placeholder="Product description"
          onChange={(e) => setDescriptionValue(e.target.value)}
          style={{ marginBottom: "15px" }}
        />

        <Select
          className="category-selector"
          style={{ width: "100%", marginBottom: "15px", textAlign: "left" }}
          dropdownStyle={{ textAlign: "center" }}
          value={categoriesValue}
          placeholder="Category"
          onChange={handleChangeCategories}
        >
          {categoriesDropdownItems}
        </Select>

        <div style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <Input
            value={imageValue}
            placeholder="Product image"
            onChange={(e) => setImageValue(e.target.value)}
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
    </>
  );
};
export default CreateProduct;

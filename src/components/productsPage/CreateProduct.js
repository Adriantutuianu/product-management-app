import React, { useState } from "react";
import { Drawer, Button } from "antd";

const CreateProduct = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Create new product
      </Button>

      <Drawer
        title="Drawer with extra actions"
        width={500}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default CreateProduct;
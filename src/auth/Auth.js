import React, { useState } from "react";
import "./auth.css";
import { Modal, Button, Input } from "antd";

const Auth = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <div className="auth">
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      ;
      <Modal
        title="Login"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Input placeholder="Username" />
        <Input placeholder="Password" />
      </Modal>
    </div>
  );
};

export default Auth;

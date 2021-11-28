import React, { useState } from "react";
import "./auth.css";
import { Modal, Button, Input } from "antd";

const Auth = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [usernameInputValue, setUsernameInputValue] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setUsernameInputValue("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setUsernameInputValue("");
  };

  const onChangeUsername = (e) => {
    console.log("Change:", e.target.value);
    setUsernameInputValue(e.target.value);
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
        <Input
          placeholder="Username"
          onChange={onChangeUsername}
          value={usernameInputValue}
        />
        <Input placeholder="Password" />
      </Modal>
    </div>
  );
};

export default Auth;

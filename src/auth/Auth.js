import React, { useState } from "react";
import "./auth.css";
import { Modal, Button, Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Auth = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [usernameInputValue, setUsernameInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setUsernameInputValue("");
    setPasswordInputValue("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setUsernameInputValue("");
    setPasswordInputValue("");
  };

  const onChangeUsername = (e) => {
    console.log("Change:", e.target.value);
    setUsernameInputValue(e.target.value);
  };

  const onChangePassword = (e) => {
    console.log("Change:", e.target.value);
    setPasswordInputValue(e.target.value);
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
        <Space direction="vertical">
          <Input.Password
            placeholder="input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            onChange={onChangePassword}
            value={passwordInputValue}
          />
        </Space>
        ,
      </Modal>
    </div>
  );
};

export default Auth;

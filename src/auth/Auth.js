import React, { useState } from "react";
import "./auth.css";
import { Modal, Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Auth = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [usernameInputValue, setUsernameInputValue] = useState("");
  const [passwordInputValue, setPasswordInputValue] = useState("");

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    loginUser();
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
    setUsernameInputValue(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswordInputValue(e.target.value);
  };

  const loginUser = async () => {
    try {
      await fetch(`${process.env.REACT_APP_BASE_URL}/auth/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username: usernameInputValue,
          password: passwordInputValue,
        }),
      })
        .then((res) => res.json())
        .then((json) => console.log(json));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth">
      <Button type="primary" onClick={showModal}>
        Login
      </Button>

      <Modal
        title="Login"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        style={{ maxWidth: "300px" }}
        okText={"Login"}
      >
        <Input
          placeholder="Username"
          onChange={onChangeUsername}
          value={usernameInputValue}
          style={{ marginBottom: "8px" }}
        />
        <Input.Password
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={onChangePassword}
          value={passwordInputValue}
        />
      </Modal>
    </div>
  );
};

export default Auth;

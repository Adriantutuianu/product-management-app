import React, { useState } from "react";
import { Modal, Button, Input } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login = () => {
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
        headers: {
          "Content-Type": "application/json",
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
    <>
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
          placeholder=" password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={onChangePassword}
          value={passwordInputValue}
        />
      </Modal>
    </>
  );
};

export default Login;

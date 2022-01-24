import React, { useState } from "react";
import { Modal, Button, Input, Typography, notification } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login = ({ setToken }) => {
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
        .then((json) => {
          if (json.token) {
            setToken(json.token);
          } else {
            notification.open({
              message: `Error`,
              description: json.msg,
            });
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const { Paragraph } = Typography;

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Login
      </Button>
      <Modal
        className="login-modal"
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
          placeholder=" Password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onChange={onChangePassword}
          value={passwordInputValue}
        />
        <Paragraph
          type="secondary"
          style={{ fontSize: "8px", margin: "15px 0 0px" }}
        >
          We are using a fake API. You can use the following credentials:
        </Paragraph>
        <Paragraph type="secondary" style={{ fontSize: "8px" }}>
          User: johnd / Password: m38rmF$
        </Paragraph>
      </Modal>
    </>
  );
};

export default Login;

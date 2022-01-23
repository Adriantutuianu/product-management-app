import React from "react";
import { Button, notification } from "antd";

const Logout = ({ setToken }) => {
  const handleClickLogout = () => {
    setToken("");
    notification.open({
      message: `Authentication`,
      description: "You have been logged out!",
    });
    console.log("You have been logged out!");
  };

  return (
    <Button type="primary" onClick={handleClickLogout}>
      Logout
    </Button>
  );
};

export default Logout;

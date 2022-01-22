import React from "react";
import { Button } from "antd";

const Logout = ({ setToken }) => {
  const handleClickLogout = () => {
    setToken("");
    console.log("You have been logged out!");
  };

  return (
    <Button type="primary" onClick={handleClickLogout}>
      Logout
    </Button>
  );
};

export default Logout;

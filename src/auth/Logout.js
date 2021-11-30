import React from "react";
import { Button } from "antd";

const Logout = () => {
  const handleClickLogout = () => {
    console.log("You have been logged out!");
  };
  return (
    <Button type="primary" onClick={handleClickLogout}>
      Logout
    </Button>
  );
};

export default Logout;

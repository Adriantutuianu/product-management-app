import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const NotLoggedIn = () => {
  return (
    <Text
      strong
      style={{
        fontSize: "24px",
        height: "calc(100vh - 120px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Please login first.
    </Text>
  );
};

export default NotLoggedIn;

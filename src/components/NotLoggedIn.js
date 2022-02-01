import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const NotLoggedIn = () => {
  return (
    <div>
      <Text
        strong
        style={{ fontSize: "20px", display: "flex", alignItems: "center" }}
      >
        Please login first.
      </Text>
    </div>
  );
};

export default NotLoggedIn;

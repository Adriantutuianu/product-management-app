import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const NotFoundRoute = () => {
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
      Page does not exist.
    </Text>
  );
};

export default NotFoundRoute;

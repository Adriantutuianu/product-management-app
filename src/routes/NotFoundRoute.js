import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const NotFoundRoute = () => {
  return (
    <div
      style={{
        height: "calc(100vh - 120px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        style={{
          width: "60px",
          marginRight: "20px",
          animation: "spin 4s infinite linear",
        }}
        src={process.env.PUBLIC_URL + "/gear.png"}
        alt="gear"
      />
      <Text
        strong
        style={{
          fontSize: "24px",
        }}
      >
        Page does not exist.
      </Text>
    </div>
  );
};

export default NotFoundRoute;

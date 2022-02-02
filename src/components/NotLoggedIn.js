import React from "react";
import { Typography } from "antd";

const { Text } = Typography;

const NotLoggedIn = () => {
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
        style={{ width: "60px", marginRight: "20px" }}
        src={process.env.PUBLIC_URL + "/gear.png"}
        alt="gear"
      />
      <Text
        strong
        style={{
          fontSize: "24px",
        }}
      >
        Please login first.
      </Text>
    </div>
  );
};

export default NotLoggedIn;

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
          width: "70px",
          marginRight: "25px",
          animation: "spin 3s infinite linear",
        }}
        src={process.env.PUBLIC_URL + "/gear.png"}
        alt="gear"
      />
      <Text
        strong
        style={{
          fontSize: "26px",
        }}
      >
        Error. Page does not exist.
      </Text>
    </div>
  );
};

export default NotFoundRoute;

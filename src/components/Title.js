import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const TitleComp = (props) => {
  return (
    <Title
      style={{
        color: "var(--primary-color)",
        textAlign: "center",
        margin: "20px",
      }}
    >
      {props.title}
    </Title>
  );
};

export default TitleComp;

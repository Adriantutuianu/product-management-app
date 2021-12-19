import React from "react";
import { Typography } from "antd";

const { Title } = Typography;

const Title = (props) => {
  return <Title level={2}>{props.title}</Title>;
};

export default Title;

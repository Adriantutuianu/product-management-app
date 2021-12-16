import React from "react";
import { Typography, Divider } from "antd";

const { Title, Paragraph, Text, Link } = Typography;

const About = () => {
  return (
    <div>
      <Title level={2}>Introduction</Title>
      <Text mark>
        This page is build using a fake API and it's not going to make any
        change in the database.
      </Text>
    </div>
  );
};

export default About;

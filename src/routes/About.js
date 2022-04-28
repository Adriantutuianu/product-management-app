import React from "react";
import "./about.css";
import { Typography } from "antd";
import TitleComp from "../components/Title";

const { Paragraph } = Typography;

const About = () => {
  return (
    <div className="about">
      <TitleComp title="About" />
      <Paragraph>
        Product Management App is a SPA (Single Page Application) built in React
        that will have the following functionalities:
      </Paragraph>
      <ul style={{ marginLeft: "30px" }}>
        <li> Routing (React Router v6)</li>
        <li> Authentication</li>
        <li> Pagination</li>
        <li> Filters & sorting</li>
        <li> Create new product</li>
        <li> Update product</li>
        <li> Delete product</li>
      </ul>
      <Paragraph>
        This is a CRUD APP. A CRUD app is a specific type of software
        application that consists of four basic operations; Create, Read,
        Update, Delete.
      </Paragraph>
      <Paragraph>
        The Product Management application was built using a fake API and it's
        not going to make any changes in the database.
      </Paragraph>
      <Paragraph>
        FakeStoreApi is a free online REST API that you can use whenever you
        need Pseudo-real data for your e-commerce or shopping website without
        running any server-side code. It's awesome for teaching purposes, sample
        codes, tests, etc.
      </Paragraph>
      <Paragraph>To build the app I have used Ant Design UI Kit.</Paragraph>
      <Paragraph>
        Also I have used Github Issues (as a Jira story) to organize and created
        separate branch for each feature.
      </Paragraph>
      <Paragraph>
        All data is being fetched from https://fakestoreapi.com. This is an fake
        API and new data will not be stored.
      </Paragraph>
    </div>
  );
};

export default About;

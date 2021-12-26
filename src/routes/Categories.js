import React from "react";
import TitleComp from "../components/Title";
import { List } from "antd";

const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
];

const Categories = () => {
  return (
    <>
      <TitleComp title="Categories" />
      <List
        size="large"
        bordered
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </>
  );
};

export default Categories;

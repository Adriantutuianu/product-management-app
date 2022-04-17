import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Rate, Descriptions, Button } from "antd";
import "./productsDetails.css";
import TitleComp from "../components/Title";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  const [details, setDetails] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        await fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res) => res.json())
          .then((res) => setDetails(res));
      } catch (error) {
        console.log("Failed to get a single product: " + error);
      }
    };

    getDetails();
  }, [id]);

  const calculateIdType = (id) => {
    if (id % 2 === 0) {
      return "The id is EVEN.";
    } else {
      return "The id is ODD.";
    }
  };

  return (
    <div className="product-details">
      {" "}
      <TitleComp title="Product details" />
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item label="ID"> {details.id}</Descriptions.Item>
        <Descriptions.Item label="Title">{details.title}</Descriptions.Item>

        <Descriptions.Item label="Category">
          {details.category}
        </Descriptions.Item>
        <Descriptions.Item label="Description" span={3}>
          {details.description}
        </Descriptions.Item>
        <Descriptions.Item label="Image">
          <Image width={100} src={details.image} />
        </Descriptions.Item>
        {/* {details && details.rating && details.rating.rate} */}
        <Descriptions.Item label="Rating">
          <Rate value={details?.rating?.rate} disabled={true} />
        </Descriptions.Item>
        <Descriptions.Item label="Text">
          {calculateIdType(details.id)}
        </Descriptions.Item>
      </Descriptions>
      <Button style={{ marginTop: "20px" }}>
        <Link to="/">
          {" "}
          <ArrowLeftOutlined /> Return to products dashboard
        </Link>{" "}
      </Button>
    </div>
  );
};

export default ProductDetails;

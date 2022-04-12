import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Rate, Descriptions } from "antd";
import "./productsDetails.css";
import TitleComp from "../components/Title";

const ProductDetails = () => {
  const [details, setDetails] = useState({});

  const { id } = useParams();
  console.log(details);

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

  return (
    <div className="product-details">
      {" "}
      <TitleComp title="Product details" />
      <Descriptions layout="vertical" bordered>
        <Descriptions.Item label="ID"> {details.id}</Descriptions.Item>
        <Descriptions.Item label="Title">{details.title}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {details.description}
        </Descriptions.Item>
        <Descriptions.Item label="Category">
          {details.category}
        </Descriptions.Item>
        <Descriptions.Item label="Image">
          <Image width={100} src={details.image} />
        </Descriptions.Item>
        {/* {details && details.rating && details.rating.rate} */}
        <Descriptions.Item label="Rating">
          <Rate value={details?.rating?.rate} disabled={true} />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ProductDetails;

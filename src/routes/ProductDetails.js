import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Rate, Descriptions } from "antd";
import "./productsDetails.css";

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
      <Descriptions title="Product details" layout="vertical" bordered>
        <Descriptions.Item label="ID">Id: {details.id}</Descriptions.Item>
        {/* <br /> */}
        <Descriptions.Item label="Title">
          Title: {details.title}
        </Descriptions.Item>
        {/* <br /> */}
        <Descriptions.Item label="Description">
          Description: {details.description}
        </Descriptions.Item>
        {/* <br /> */}
        <Descriptions.Item label="Category">
          Category: {details.category}
        </Descriptions.Item>
        {/* <br /> */}
        <Descriptions.Item label="Image">
          <Image width={100} src={details.image} />
        </Descriptions.Item>
        {/* <br /> */}
        {/* {details && details.rating && details.rating.rate} */}
        <Descriptions.Item label="Rating">
          Rating: <Rate value={details?.rating?.rate} disabled={true} />
        </Descriptions.Item>
      </Descriptions>
    </div>
  );
};

export default ProductDetails;

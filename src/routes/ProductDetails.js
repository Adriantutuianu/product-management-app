import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Image, Rate, Descriptions } from "antd";

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
      <Descriptions title="Product details" layout="vertical"></Descriptions>
      <Descriptions.Item label="ID:">Id: {details.id}</Descriptions.Item>
      <Image width={200} src={details.image} />
      {/* {details && details.rating && details.rating.rate} */}
      <Rate value={details?.rating?.rate} disabled={true} />
    </div>
  );
};

export default ProductDetails;

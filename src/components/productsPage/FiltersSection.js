import React from "react";
import { Button, Typography } from "antd";

const FiltersSection = ({ methods }) => {
  const { Title } = Typography;

  const {
    handleClickCategoriesFilter,
    handleClickNewProduct,
    handleClickUpdateProduct,
  } = methods;

  return (
    <section className="filters-actions">
      <Title level={5}>Filters & actions</Title>
      <Button type="primary" onClick={handleClickCategoriesFilter}>
        Categories filter
      </Button>
      <Button type="primary" onClick={handleClickNewProduct}>
        Create new product
      </Button>
      <Button type="primary" onClick={handleClickUpdateProduct}>
        Update product
      </Button>
    </section>
  );
};

export default FiltersSection;

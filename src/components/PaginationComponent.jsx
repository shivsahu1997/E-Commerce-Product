import React from "react";
import { Pagination } from "@mui/material";

const PaginationComponent = ({
  totalProducts,
  productsPerPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalProducts / productsPerPage);

  const handleChange = (event, value) => {
    onPageChange(value);
  };

  return <Pagination count={pageCount} onChange={handleChange} />;
};

export default PaginationComponent;

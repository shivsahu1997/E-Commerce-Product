import React, { useState } from "react";
import { TextField, MenuItem, Slider, Box, Typography } from "@mui/material";

const ProductFilter = ({ categories, onFilterChange }) => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    onFilterChange({ category: event.target.value, priceRange, searchQuery });
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
    onFilterChange({
      category: selectedCategory,
      priceRange: newValue,
      searchQuery,
    });
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onFilterChange({ category: selectedCategory, priceRange, searchQuery });
  };

  return (
    <Box>
      <TextField
        label='Search'
        variant='outlined'
        value={searchQuery}
        onChange={handleSearchChange}
        fullWidth
        margin='normal'
      />
      <TextField
        select
        label='Category'
        value={selectedCategory}
        onChange={handleCategoryChange}
        fullWidth
        margin='normal'>
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </TextField>
      <Box mt={2}>
        <Typography gutterBottom>Price Range</Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay='auto'
          min={0}
          max={1000}
        />
      </Box>
    </Box>
  );
};

export default ProductFilter;

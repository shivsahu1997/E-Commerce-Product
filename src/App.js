import React, { useEffect, useState } from 'react';
import ProductList from './components/ProductList';
import ProductFilter from './components/ProductFilter';
import PaginationComponent from './components/PaginationComponent';
import { Container, Box, Typography } from '@mui/material';
import { fetchProducts } from './api/productService';

const App = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

 

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
      setFilteredProducts(products);
    };

    loadProducts();
  }, []);

   console.log("products",products)

  const handleFilterChange = (filters) => {
    let filtered = products;

    if (filters.searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
      );
    }

    if (filters.category) {
      filtered = filtered.filter((product) => product.category === filters.category);
    }

    if (filters.priceRange) {
      filtered = filtered.filter(
        (product) => product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
      );
    }

    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ paddingTop: '20px' }}>
        E-Commerce Product
      </Typography>
      <Box mt={4}>
        <ProductFilter
          categories={[...new Set(products.map((product) => product.category))]}
          onFilterChange={handleFilterChange}
        />
      </Box>
      <Box mt={4}>
        <ProductList products={currentProducts} />
      </Box>
      <Box mt={4} display="flex" justifyContent="center">
        <PaginationComponent
          totalProducts={filteredProducts.length}
          productsPerPage={productsPerPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </Box>
    </Container>
  );
};

export default App;

import React from "react";
import { Grid, Card, CardContent, Typography, CardMedia } from "@mui/material";

const ProductList = ({ products }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Card>
            <CardMedia
              component='img'
              height='140'
              image={product.image}
              alt={product.title}
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='div'>
                {product.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                ${product.price}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;

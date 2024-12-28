// src/components/products/ProductGrid.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Button, Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import Loader from '../common/Loader'; // src/components/common/Loader.js

// ProductGrid แสดงสินค้าในรูปแบบ Grid พร้อม Load more ถ้าจำเป็น
// ProductGrid displays products in a grid layout and supports load more button

const ProductGrid = ({ products = [], loading = false, onLoadMore, hasMore = false }) => {
  const { t } = useTranslation();

  return (
    <Box sx={{ p: 2 }}>
      {loading && <Loader loading={true} />}
      {!loading && products.length === 0 && (
        <Typography variant="body1">{t('noProductsFound', 'No products found')}</Typography>
      )}
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={3} key={product.id}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      {hasMore && !loading && (
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Button variant="outlined" onClick={onLoadMore}>
            {t('loadMore', 'Load More')}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ProductGrid;

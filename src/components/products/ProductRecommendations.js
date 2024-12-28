// src/components/products/ProductRecommendations.js
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import ProductCard from './ProductCard';
import Loader from '../common/Loader'; // src/components/common/Loader.js

// ProductRecommendations แสดงสินค้าที่แนะนำ โดยอาจเรียก API จาก recommendationService
// ProductRecommendations displays recommended products (fetched from a recommendation API)

const ProductRecommendations = ({ userId, category }) => {
  const [loading, setLoading] = useState(true);
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    // สมมุติเรียก API จาก recommendationService
    // Assume calling recommendationService.getRecommendations(userId, category)
    setTimeout(() => {
      // ตัวอย่าง: สมมุติเอาผลมาเป็นสินค้า mock
      const mockProducts = [
        { id: 'r1', name: 'Recommended 1', price: 99, images: ['/images/sample1.jpg'] },
        { id: 'r2', name: 'Recommended 2', price: 149, images: ['/images/sample2.jpg'] },
        { id: 'r3', name: 'Recommended 3', price: 199, images: ['/images/sample3.jpg'] },
      ];
      setRecommendedProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, [userId, category]);

  if (loading) return <Loader loading={true} />;

  if (recommendedProducts.length === 0) {
    return <Typography variant="body1">No recommendations available</Typography>;
  }

  return (
    <Box sx={{ display: 'flex', gap: 2, overflowX: 'auto', p: 2 }}>
      {recommendedProducts.map((p) => (
        <Box key={p.id} sx={{ minWidth: 300 }}>
          <ProductCard product={p} />
        </Box>
      ))}
    </Box>
  );
};

export default ProductRecommendations;

// src/components/products/ProductCarousel.js
import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ProductCard from './ProductCard';

// ProductCarousel แสดงสินค้าต่อกันในแนวนอน พร้อมปุ่มเลื่อนซ้ายขวา
// ProductCarousel displays products in a horizontal layout with left/right arrows

const ProductCarousel = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 3; // จำนวนสินค้าแสดงพร้อมกัน (Number of products to show at once)
  const maxIndex = Math.max(0, products.length - itemsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsToShow);

  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handlePrev} disabled={currentIndex === 0} sx={{ zIndex: 1 }}>
        <ArrowBackIosNewIcon />
      </IconButton>
      <Box sx={{ display: 'flex', transition: 'transform 0.3s ease', ml: 2, mr: 2 }}>
        {visibleProducts.map((p) => (
          <Box key={p.id} sx={{ minWidth: 300 }}>
            <ProductCard product={p} />
          </Box>
        ))}
      </Box>
      <IconButton onClick={handleNext} disabled={currentIndex === maxIndex} sx={{ zIndex: 1 }}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ProductCarousel;

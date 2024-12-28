// src/components/products/ProductFilter.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox, Slider, Button } from '@mui/material';

// ProductFilter ให้ผู้ใช้เลือกหมวดหมู่ แบรนด์ ราคาช่วง สี ขนาด และกด Filter
// ProductFilter provides UI to filter products by category, brand, price range, etc.

const ProductFilter = ({ categories = [], brands = [], onFilterChange, onReset }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [freeShipping, setFreeShipping] = useState(false);

  const handleFilterChange = () => {
    onFilterChange({
      category: selectedCategory,
      brand: selectedBrand,
      priceRange,
      freeShipping
    });
  };

  const handleReset = () => {
    setSelectedCategory('');
    setSelectedBrand('');
    setPriceRange([0, 100]);
    setFreeShipping(false);
    onReset && onReset();
  };

  return (
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>{t('category', 'Category')}</InputLabel>
        <Select
          value={selectedCategory}
          label={t('category', 'Category')}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <MenuItem value="">{t('allCategories', 'All Categories')}</MenuItem>
          {categories.map(cat => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>{t('brand', 'Brand')}</InputLabel>
        <Select
          value={selectedBrand}
          label={t('brand', 'Brand')}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <MenuItem value="">{t('allBrands', 'All Brands')}</MenuItem>
          {brands.map(br => (
            <MenuItem key={br} value={br}>{br}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box sx={{ mb: 2 }}>
        <p>{t('priceRange', 'Price Range')}</p>
        <Slider
          value={priceRange}
          onChange={(e, newValue) => setPriceRange(newValue)}
          valueLabelDisplay="auto"
          min={0}
          max={1000}
        />
      </Box>

      <FormGroup sx={{ mb: 2 }}>
        <FormControlLabel 
          control={<Checkbox checked={freeShipping} onChange={(e) => setFreeShipping(e.target.checked)} />} 
          label={t('freeShipping', 'Free Shipping')}
        />
      </FormGroup>

      <Button variant="contained" sx={{ mr: 1 }} onClick={handleFilterChange}>{t('applyFilters', 'Apply Filters')}</Button>
      <Button variant="text" onClick={handleReset}>{t('resetFilters', 'Reset')}</Button>
    </Box>
  );
};

export default ProductFilter;

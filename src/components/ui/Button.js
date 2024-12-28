// src/components/ui/Button.js
import React from 'react';
import { Button as MUIButton, CircularProgress } from '@mui/material';

/*
Button.js

หน้าที่ (ไทย):
- ปุ่มที่ใช้ทั่วระบบ, รองรับรูปแบบและสถานะต่างๆ

Functionality (English):
- A reusable button component supporting variants, sizes, icons, disabled and loading states.
*/

const variantMapping = {
  primary: 'contained',
  secondary: 'outlined',
  danger: 'contained', // อาจใช้สี theme.error
  success: 'contained' // อาจใช้สี theme.success
};

const colorMapping = {
  primary: 'primary',
  secondary: 'secondary',
  danger: 'error',
  success: 'success'
};

const sizeMapping = {
  small: 'small',
  medium: 'medium',
  large: 'large'
};

const CustomButton = ({ 
  variant = 'primary', 
  size = 'medium', 
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  children,
  ...props
}) => {
  const muiVariant = variantMapping[variant] || 'contained';
  const muiColor = colorMapping[variant] || 'primary';
  const muiSize = sizeMapping[size] || 'medium';

  return (
    <MUIButton
      variant={muiVariant}
      color={muiColor}
      size={muiSize}
      disabled={disabled || loading}
      startIcon={!loading ? startIcon : null}
      endIcon={!loading ? endIcon : null}
      {...props}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : children}
    </MUIButton>
  );
};

export default CustomButton;

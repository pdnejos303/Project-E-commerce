// src/components/ui/Input.js
import React from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';

/*
Input.js

หน้าที่ (ไทย):
- ช่องกรอกข้อมูลพร้อมปรับแต่งง่าย ใช้ได้กับ text, email, password ฯลฯ

Functionality (English):
- A reusable input component based on MUI TextField, supports various input types, icons, error states, etc.
*/

const CustomInput = ({
  type = 'text',
  label,
  error = false,
  helperText = '',
  disabled = false,
  icon,
  onIconClick,
  ...props
}) => {
  return (
    <TextField
      type={type}
      label={label}
      error={error}
      helperText={error ? helperText : ''}
      disabled={disabled}
      fullWidth
      InputProps={{
        endAdornment: icon ? (
          <InputAdornment position="end">
            <IconButton onClick={onIconClick} edge="end">
              {icon}
            </IconButton>
          </InputAdornment>
        ) : null
      }}
      {...props}
    />
  );
};

export default CustomInput;

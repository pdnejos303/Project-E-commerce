// src/components/ui/Select.js
import React from 'react';
import { FormControl, InputLabel, Select as MUISelect, MenuItem } from '@mui/material';

/*
Select.js

หน้าที่ (ไทย):
- คอมโพเนนต์ select สำหรับเลือกข้อมูลจากรายการตัวเลือก
- รองรับ multiple, disabled, placeholder

Functionality (English):
- A reusable select component for choosing from a list of options.
- Supports multiple selection, disabled state, and placeholders.
*/

const CustomSelect = ({
  label,
  options = [],
  value,
  onChange,
  multiple = false,
  disabled = false,
  placeholder = 'Please select',
  ...props
}) => {
  return (
    <FormControl fullWidth disabled={disabled}>
      <InputLabel>{label}</InputLabel>
      <MUISelect
        multiple={multiple}
        value={value || (multiple ? [] : '')}
        onChange={onChange}
        label={label}
        {...props}
      >
        {!multiple && (
          <MenuItem value="">
            <em>{placeholder}</em>
          </MenuItem>
        )}
        {options.map((opt, index) => (
          <MenuItem key={index} value={opt.value}>{opt.label}</MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export default CustomSelect;

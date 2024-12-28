// src/components/ui/RatingStars.js
import React from 'react';
import { Box, Rating, Typography } from '@mui/material';

/*
RatingStars.js

หน้าที่ (ไทย):
- แสดงดาวสำหรับให้คะแนนหรือแสดงคะแนนแบบอ่านอย่างเดียว

Functionality (English):
- A reusable rating component using MUI Rating.
- Supports readOnly and editable mode.
- Can show numeric value alongside stars.
*/

const RatingStars = ({ value = 0, onChange, readOnly = false, showValue = false }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <Rating
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        precision={1}
      />
      {showValue && <Typography variant="body2">{value.toFixed(1)}</Typography>}
    </Box>
  );
};

export default RatingStars;

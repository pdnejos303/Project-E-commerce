// src/components/forms/CouponForm.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

/*
CouponForm.js

หน้าที่ (ไทย):
- ฟอร์มให้ผู้ใช้กรอกรหัสคูปองเพื่อรับส่วนลด
- เมื่อใช้คูปองแล้วแสดงข้อความว่าสำเร็จหรือไม่

Functionality (English):
- A form to enter a coupon code for discount.
- Upon applying the coupon, display success or error message.
- Could call parent function to update total price or state.
*/

const CouponForm = ({ onApplyCoupon }) => {
  const [coupon, setCoupon] = useState('');
  const [applied, setApplied] = useState(false);
  const [error, setError] = useState('');

  const handleApply = () => {
    // สมมุติให้คูปอง "SAVE50" ลด 50 บาท
    // Example: If coupon code "SAVE50" is valid
    if (coupon.toUpperCase() === 'SAVE50') {
      setApplied(true);
      setError('');
      onApplyCoupon && onApplyCoupon({ code: coupon, discountAmount: 50 });
    } else {
      setError('Invalid coupon code.');
      setApplied(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Apply Coupon</Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {applied && !error && <Alert severity="success" sx={{ mb: 2 }}>Coupon applied successfully!</Alert>}

      <TextField
        label="Coupon Code"
        fullWidth
        value={coupon}
        onChange={(e) => setCoupon(e.target.value)}
        disabled={applied}
        sx={{ mb: 2 }}
      />

      <Button variant="contained" onClick={handleApply} disabled={!coupon.trim() || applied}>
        Apply Coupon
      </Button>
    </Box>
  );
};

export default CouponForm;

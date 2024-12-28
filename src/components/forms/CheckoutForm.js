// src/components/forms/CheckoutForm.js
import React, { useState } from 'react';
import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, Button, Divider, Alert } from '@mui/material';

/*
CheckoutForm.js

หน้าที่ (ไทย):
- ฟอร์มสำหรับกรอกข้อมูลการชำระเงินในขั้นตอน Checkout
- ผู้ใช้กรอกชื่อผู้รับ ที่อยู่ วิธีการชำระเงิน และใส่คูปองส่วนลด
- แสดงยอดรวมรายการสั่งซื้อ เมื่อข้อมูลครบกดยืนยันคำสั่งซื้อได้

Functionality (English):
- A checkout form where user enters recipient name, shipping address, selects payment method, and optionally applies a coupon.
- Displays total order amount including tax/shipping (mock).
- On submit, calls onConfirm callback with the collected data.
*/

const CheckoutForm = ({ total = 500, onConfirm }) => {
  // total: ยอดรวมทั้งหมด (mock) เช่น 500 บาท
  // onConfirm: callback ที่เรียกเมื่อฟอร์มถูกยืนยัน

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [couponError, setCouponError] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // ตรวจสอบว่ากรอกข้อมูลครบถ้วนหรือไม่
  // Validate if required fields are filled
  const isValid = name.trim() && address.trim() && paymentMethod;

  const handleApplyCoupon = () => {
    // ตัวอย่าง: สมมุติรหัสคูปอง "DISCOUNT10" ลด 10%
    // Example: If coupon code "DISCOUNT10" -> apply 10% off
    if (coupon.toUpperCase() === 'DISCOUNT10') {
      setCouponApplied(true);
      setCouponError('');
    } else {
      setCouponError('Invalid coupon code!');
      setCouponApplied(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      // คำนวณราคาใหม่ถ้ามีคูปอง
      let finalTotal = total;
      if (couponApplied) {
        finalTotal = total * 0.9; // ลด 10%
      }
      const orderData = {
        name,
        address,
        paymentMethod,
        coupon: couponApplied ? coupon : null,
        total: finalTotal
      };
      // เรียก onConfirm และแจ้งสถานะ
      onConfirm && onConfirm(orderData);
      setOrderConfirmed(true);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Checkout</Typography>

      {orderConfirmed && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Your order has been confirmed!
        </Alert>
      )}

      <TextField
        label="Recipient Name"
        fullWidth
        required
        value={name}
        onChange={e => setName(e.target.value)}
        sx={{ mb: 2 }}
      />

      <TextField
        label="Shipping Address"
        fullWidth
        multiline
        rows={3}
        required
        value={address}
        onChange={e => setAddress(e.target.value)}
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Payment Method</InputLabel>
        <Select
          value={paymentMethod}
          onChange={e => setPaymentMethod(e.target.value)}
          label="Payment Method"
          required
        >
          <MenuItem value="credit_card">Credit Card</MenuItem>
          <MenuItem value="cod">Cash on Delivery</MenuItem>
          <MenuItem value="bank_transfer">Bank Transfer</MenuItem>
        </Select>
      </FormControl>

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={{ mb: 1 }}>Have a coupon?</Typography>
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <TextField
          label="Coupon Code"
          fullWidth
          value={coupon}
          onChange={e => setCoupon(e.target.value)}
          disabled={couponApplied}
        />
        <Button variant="outlined" onClick={handleApplyCoupon} disabled={!coupon.trim() || couponApplied}>
          Apply
        </Button>
      </Box>
      {couponError && <Alert severity="error" sx={{ mb: 2 }}>{couponError}</Alert>}
      {couponApplied && <Alert severity="info" sx={{ mb: 2 }}>Coupon applied: 10% discount</Alert>}

      <Divider sx={{ my: 2 }} />

      <Typography variant="body1" sx={{ mb: 2 }}>
        Total: $
        {couponApplied ? (total * 0.9).toFixed(2) : total.toFixed(2)}
      </Typography>

      <Button variant="contained" type="submit" disabled={!isValid}>
        Confirm Order
      </Button>
    </Box>
  );
};

export default CheckoutForm;

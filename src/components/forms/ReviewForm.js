// src/components/forms/ReviewForm.js
import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Rating, Alert } from '@mui/material';

/*
ReviewForm.js

หน้าที่ (ไทย):
- ฟอร์มให้ผู้ใช้ให้คะแนนและเขียนรีวิวสินค้า
- ตรวจสอบว่าผู้ใช้ให้คะแนนและกรอกข้อความแล้ว
- แสดงข้อความขอบคุณหลังส่งรีวิว

Functionality (English):
- A form to allow users to rate and review a product.
- Validate that user has provided a rating and comment.
- Show success message after submission.
*/

const ReviewForm = ({ productId, onSubmitReview }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const isValid = rating > 0 && comment.trim();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      const reviewData = { productId, rating, comment };
      onSubmitReview && onSubmitReview(reviewData);
      setSubmitted(true);
      setRating(0);
      setComment('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Write a Review</Typography>
      {submitted && (
        <Alert severity="success" sx={{ mb: 2 }}>
          Thank you for your review!
        </Alert>
      )}
      <Typography variant="body1" sx={{ mb: 1 }}>Your Rating:</Typography>
      <Rating
        value={rating}
        onChange={(e, newValue) => setRating(newValue)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Your Comment"
        fullWidth
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" type="submit" disabled={!isValid}>
        Submit Review
      </Button>
    </Box>
  );
};

export default ReviewForm;

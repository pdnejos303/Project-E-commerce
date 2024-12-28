// src/components/products/ProductReviewForm.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Rating, TextField, Button, Typography, Alert } from '@mui/material';

// ProductReviewForm ฟอร์มให้คะแนนและรีวิวสินค้า
// ProductReviewForm allows user to rate and review a product

const ProductReviewForm = ({ productId, onSubmitReview }) => {
  const { t } = useTranslation();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && comment.trim()) {
      // ส่งรีวิวไปยัง onSubmitReview (ซึ่งอาจเรียก reviewService)
      // Send review data to onSubmitReview
      onSubmitReview({ productId, rating, comment });
      setSuccess(true);
      setRating(0);
      setComment('');
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Typography variant="h6">{t('leaveAReview', 'Leave a Review')}</Typography>
      {success && <Alert severity="success">{t('reviewSubmitted', 'Review submitted successfully')}</Alert>}
      <form onSubmit={handleSubmit}>
        <Box sx={{ my: 2 }}>
          <Typography variant="body1">{t('yourRating', 'Your Rating')}:</Typography>
          <Rating
            value={rating}
            onChange={(e, newValue) => setRating(newValue)}
          />
        </Box>
        <TextField
          fullWidth
          multiline
          rows={4}
          label={t('yourComment', 'Your Comment')}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit">{t('submitReview', 'Submit Review')}</Button>
      </form>
    </Box>
  );
};

export default ProductReviewForm;

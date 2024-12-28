// src/components/products/ProductCard.js
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, IconButton, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { CartContext } from '../../contexts/CartContext'; // src/contexts/CartContext.js
import { UserContext } from '../../contexts/UserContext'; // src/contexts/UserContext.js

// ProductCard แสดงรูปภาพสินค้า ชื่อ ราคา ปุ่มเพิ่มตะกร้า ปุ่ม wishlist และลิงก์ไปหน้ารายละเอียด
// ProductCard displays product image, name, price, add-to-cart button, wishlist button, and detail link

const ProductCard = ({ product }) => {
  const { t } = useTranslation();
  const { addToCart } = useContext(CartContext);
  const { user } = useContext(UserContext);

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleAddToWishlist = () => {
    // ในตัวอย่างนี้เพียง console.log
    // In this example just console.log, in real case call wishlistService
    console.log('Add to wishlist:', product.id);
  };

  return (
    <Card sx={{ maxWidth: 300, m: 1, position: 'relative' }}>
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          component="img"
          height="200"
          image={product.images[0]}
          alt={product.name}
        />
      </Link>

      <CardContent>
        <Typography variant="h6" noWrap>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {product.price} {t('currency', 'USD')}
        </Typography>
      </CardContent>

      <CardActions sx={{ justifyContent: 'space-between' }}>
        <Box>
          <IconButton aria-label="add to wishlist" onClick={handleAddToWishlist}>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <Button 
          variant="contained" 
          size="small" 
          endIcon={<AddShoppingCartIcon />} 
          onClick={handleAddToCart}
        >
          {t('addToCart', 'Add to Cart')}
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;

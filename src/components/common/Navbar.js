// src/components/common/Navbar.js
import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { UserContext } from '../../contexts/UserContext';
import { CartContext } from '../../contexts/CartContext';
import { AppBar, Toolbar, IconButton, Typography, Box, Button, InputBase } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import logo from '../../assets/images/logo.png'; // ตรวจสอบให้มีไฟล์นี้จริง
// หมวดหมู่สินค้า mock
const categories = [
  { name: 'Electronics', path: '/products?category=electronics' },
  { name: 'Clothing', path: '/products?category=clothing' },
  { name: 'Shoes', path: '/products?category=shoes' },
  { name: 'Accessories', path: '/products?category=accessories' },
];

const Navbar = () => {
  const { t } = useTranslation();
  const { user } = useContext(UserContext);
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const cartCount = cartItems.length;

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton 
          size="large"
          edge="start"
          color="inherit"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box component="img" src={logo} alt="Logo" sx={{ height: 40, mr: 1 }} />
          </Link>
          <Typography variant="h6" noWrap>
            {t('navbar.home', 'Home')}
          </Typography>
        </Box>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          {categories.map(cat => (
            <Button key={cat.name} color="inherit" component={Link} to={cat.path}>
              {cat.name}
            </Button>
          ))}
        </Box>
        <Box component="form" onSubmit={handleSearch} sx={{ position: 'relative', mr: 2 }}>
          <InputBase
            placeholder={t('navbar.searchPlaceholder', 'Search products...')}
            inputProps={{ 'aria-label': 'search' }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ color: 'inherit', backgroundColor: 'rgba(255,255,255,0.15)', pl: 2, pr: 2, borderRadius: 1 }}
          />
          <IconButton type="submit" sx={{ position: 'absolute', right: 0, top: 0, bottom: 0 }}>
            <SearchIcon />
          </IconButton>
        </Box>
        <Button color="inherit" component={Link} to="/cart">
          Cart ({cartCount})
        </Button>
        {user ? (
          <Button color="inherit" component={Link} to="/myaccount">
            {t('navbar.myAccount', 'My Account')}
          </Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            {t('navbar.login', 'Login')}
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

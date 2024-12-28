// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box, Container, Button, Typography } from '@mui/material';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ProductGrid from './components/products/ProductGrid';
import ProductFilter from './components/products/ProductFilter';
import ProductCarousel from './components/products/ProductCarousel';
import ProductReviewForm from './components/products/ProductReviewForm';
import ProductRecommendations from './components/products/ProductRecommendations';
import ErrorBoundary from './components/common/ErrorBoundary';
import ProtectedRoute from './components/common/ProtectedRoute';
import { CartProvider } from './contexts/CartContext';
import { UserProvider } from './contexts/UserContext';

const mockProducts = [
  { id: 'p1', name: 'Product 1', price: 100, images: ['/images/sample-product1.jpg'] },
  { id: 'p2', name: 'Product 2', price: 200, images: ['/images/sample-product2.jpg'] },
  { id: 'p3', name: 'Product 3', price: 300, images: ['/images/sample-product3.jpg'] },
  { id: 'p4', name: 'Product 4', price: 400, images: ['/images/sample-product4.jpg'] }
];

function HomePage() {
  return (
    <Box>
      <ProductCarousel products={mockProducts} />
      <Typography variant="h5" sx={{ mt: 4 }}>Recommended for you</Typography>
      <ProductRecommendations userId="user123" category="electronics" />
    </Box>
  );
}

function ProductsPage() {
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(false);

  const categories = ['Electronics', 'Clothing', 'Shoes', 'Accessories'];
  const brands = ['Brand A', 'Brand B', 'Brand C'];

  const handleFilterChange = (filter) => {
    setLoading(true);
    setTimeout(() => {
      let results = mockProducts;
      if (filter.category) {
        results = results.filter(p => p.name.toLowerCase().includes(filter.category.toLowerCase()));
      }
      results = results.filter(p => p.price >= filter.priceRange[0] && p.price <= filter.priceRange[1]);
      setFilteredProducts(results);
      setLoading(false);
    }, 500);
  };

  const handleResetFilters = () => {
    setFilteredProducts(mockProducts);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box sx={{ width: 250 }}>
        <ProductFilter categories={categories} brands={brands} onFilterChange={handleFilterChange} onReset={handleResetFilters} />
      </Box>
      <Box sx={{ flex: 1 }}>
        <ProductGrid products={filteredProducts} loading={loading} />
      </Box>
    </Box>
  );
}

function ProductDetailPage() {
  const handleSubmitReview = (data) => {
    console.log('Review submitted:', data);
  };

  return (
    <Box>
      <Typography variant="h4">Product Detail (Mock)</Typography>
      <ProductReviewForm productId="p1" onSubmitReview={handleSubmitReview} />
    </Box>
  );
}

function MyAccountPage() {
  return <Typography variant="h4">My Account (Protected)</Typography>;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light'
    }
  });

  return (
    <ErrorBoundary>
      <UserProvider>
        <CartProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <Navbar />
              <Container sx={{ mt: 2 }}>
                <Button variant="outlined" onClick={() => setDarkMode(!darkMode)}>
                  Toggle Dark Mode
                </Button>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/products" element={<ProductsPage />} />
                  <Route path="/product/:id" element={<ProductDetailPage />} />
                  <Route 
                    path="/myaccount"
                    element={
                      <ProtectedRoute>
                        <MyAccountPage />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </Container>
              <Footer />
            </Router>
          </ThemeProvider>
        </CartProvider>
      </UserProvider>
    </ErrorBoundary>
  );
}

export default App;

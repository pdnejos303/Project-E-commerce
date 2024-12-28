// src/components/forms/LoginForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // ตรวจสอบการกรอกข้อมูล (Simple validation)
  const isValid = email.includes('@') && password.length > 5;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onLogin({ email, password });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Login</Typography>
      <TextField 
        label="Email" 
        type="email" 
        fullWidth 
        required 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
        sx={{ mb: 2 }}
      />
      <TextField 
        label="Password" 
        type="password" 
        fullWidth 
        required 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mb: 2 }} 
      />
      <Button type="submit" variant="contained" disabled={!isValid}>Login</Button>
      <Box sx={{ mt: 2 }}>
        <Link href="/reset-password">Forgot Password?</Link>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Typography variant="body2">Or login with:</Typography>
        <Button variant="outlined" sx={{ mr: 1 }}>Google</Button>
        <Button variant="outlined">Facebook</Button>
      </Box>
    </Box>
  );
};

export default LoginForm;

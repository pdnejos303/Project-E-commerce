// src/components/forms/RegisterForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Checkbox, FormControlLabel } from '@mui/material';

const RegisterForm = ({ onRegister }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const passwordValid = password.length >= 6 && password === confirmPassword;
  const isValid = name && email.includes('@') && passwordValid && acceptedTerms;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      onRegister({ name, email, password });
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto' }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Register</Typography>
      <TextField label="Full Name" fullWidth required value={name} onChange={e=>setName(e.target.value)} sx={{ mb: 2 }}/>
      <TextField label="Email" type="email" fullWidth required value={email} onChange={e=>setEmail(e.target.value)} sx={{ mb: 2 }}/>
      <TextField label="Password" type="password" fullWidth required value={password} onChange={e=>setPassword(e.target.value)} sx={{ mb: 2 }}/>
      <TextField label="Confirm Password" type="password" fullWidth required value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} sx={{ mb: 2 }}/>
      <FormControlLabel 
        control={<Checkbox checked={acceptedTerms} onChange={e=>setAcceptedTerms(e.target.checked)} />} 
        label="I accept the terms and conditions" 
      />
      <Button type="submit" variant="contained" disabled={!isValid} sx={{ mt: 2 }}>Register</Button>
    </Box>
  );
};

export default RegisterForm;

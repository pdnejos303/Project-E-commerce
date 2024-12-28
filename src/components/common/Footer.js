// src/components/common/Footer.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';

const Footer = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscribed:', email);
    setEmail('');
  };

  return (
    <Box component="footer" sx={{ mt: 4, p: 4, backgroundColor: 'primary.dark', color: 'white' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">{t('footer.usefulLinks', 'Useful Links')}</Typography>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li><Link to="/about" style={{ color: 'inherit', textDecoration: 'none' }}>{t('footer.aboutUs', 'About Us')}</Link></li>
            <li><Link to="/contact" style={{ color: 'inherit', textDecoration: 'none' }}>{t('footer.contactUs', 'Contact Us')}</Link></li>
            <li><Link to="/faq" style={{ color: 'inherit', textDecoration: 'none' }}>{t('footer.faq', 'FAQ')}</Link></li>
            <li><Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>{t('footer.privacy', 'Privacy Policy')}</Link></li>
            <li><Link to="/terms" style={{ color: 'inherit', textDecoration: 'none' }}>{t('footer.terms', 'Terms & Conditions')}</Link></li>
          </ul>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">{t('footer.newsletter', 'Newsletter')}</Typography>
          <Typography variant="body2">
            {t('footer.newsletterDesc', 'Subscribe to get our latest updates.')}
          </Typography>
          <Box component="form" onSubmit={handleNewsletterSubmit} sx={{ mt: 2 }}>
            <TextField 
              variant="filled" 
              label={t('footer.yourEmail', 'Your Email')} 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ mb: 1, backgroundColor: 'white' }}
            />
            <Button type="submit" variant="contained">{t('footer.subscribe', 'Subscribe')}</Button>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6">{t('footer.contactInfo', 'Contact Info')}</Typography>
          <Typography variant="body2">{t('footer.address', '123 Main Street, City, Country')}</Typography>
          <Typography variant="body2">{t('footer.phone', 'Phone: +1 234 567 890')}</Typography>
          <Typography variant="body2">{t('footer.email', 'Email: info@example.com')}</Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>FB</a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>IG</a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ color: 'inherit' }}>TW</a>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body2">{t('footer.businessReg', 'Business Registration: 010555XXXXXX')}</Typography>
        <Typography variant="body2">{t('footer.copyright')}</Typography>
      </Box>
    </Box>
  );
};

export default Footer;

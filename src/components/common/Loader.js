// src/components/common/Loader.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loader = ({ loading = true }) => {
  const { t } = useTranslation();

  if (!loading) return null;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
      <CircularProgress />
      <Typography sx={{ mt: 2 }}>{t('common.loading', 'Loading...')}</Typography>
    </Box>
  );
};

export default Loader;

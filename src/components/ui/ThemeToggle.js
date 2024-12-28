// src/components/ui/ThemeToggle.js
import React, { useEffect, useState } from 'react';
import { IconButton, useTheme } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

/*
ThemeToggle.js

หน้าที่ (ไทย):
- ปุ่มสลับธีม Light/Dark และบันทึกค่านี้ลง localStorage

Functionality (English):
- A theme toggle button that switches between light and dark mode.
- Saves preference to localStorage.
- Assuming we have a mechanism in App.js or a parent to switch theme mode.
*/

const ThemeToggle = ({ currentMode, onToggle }) => {
  // currentMode: 'light' or 'dark'
  // onToggle: callback เพื่อสลับโหมด
  // สมมุติว่า parent component จัดการ themeProvider แล้วส่ง currentMode มา
  const theme = useTheme();

  // เมื่อกดปุ่มจะเรียก onToggle ให้ parent เปลี่ยนโหมด
  const handleClick = () => {
    onToggle(currentMode === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton onClick={handleClick} color="inherit">
      {currentMode === 'light' ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggle;
